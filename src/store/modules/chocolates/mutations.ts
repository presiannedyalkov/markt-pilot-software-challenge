import { MutationTree } from 'vuex';

import { ChocolateData } from '@/types';

import { ChocolateData as State } from '@/types'
import { ChocolatesMutationTypes } from './mutation-types';

export type Mutations<S = State> = {
    [ChocolatesMutationTypes.SET_DATA](state: S, payload: ChocolateData): void;
}

export const mutations: MutationTree<State> & Mutations = {
    [ChocolatesMutationTypes.SET_DATA](state: State, chocolates: ChocolateData) {
        state.data = chocolates.data;
        state.pagination = chocolates.pagination;
    },
};
