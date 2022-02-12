import { ActionTree, ActionContext } from 'vuex';

import { RootState } from '@/store';

import { State, state } from './state';
import { Mutations } from './mutations';
import { ChocolatesMutationTypes } from './mutation-types';
import { ChocolatesActionTypes } from './action-types';

import mock from '@/api/mock';
import server from '@/api/server';

type AugmentedActionContext = {
    commit<K extends keyof Mutations>(
        key: K,
        payload: Parameters<Mutations[K]>[1],
    ): ReturnType<Mutations[K]>;
} & Omit<ActionContext<State, RootState>, 'commit'>

export interface Actions {
    [ChocolatesActionTypes.FETCH_CHOCOLATES](
        { commit }: AugmentedActionContext
    ): Promise<void>;
}

export const actions: ActionTree<State, RootState> & Actions = {
    async [ChocolatesActionTypes.FETCH_CHOCOLATES]({ commit }) {
        return new Promise((resolve, reject) => {
            const api = process.env.VUE_APP_API_CLIENT === 'mock' ? mock : server;

            (async () => {
                await api.fetchChocolates()
                    .then((data) => {
                        commit(ChocolatesMutationTypes.SET_DATA, data);
                        resolve();
                    })
                    .catch((error) => {
                        console.error(error); // TODO: commit mutation to show error message to user
                        commit(ChocolatesMutationTypes.SET_DATA, state); // fallback to the old state if the fetch fails
                        reject();
                    });
            })();
        });
    },
};