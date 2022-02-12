import { createStore, createLogger } from 'vuex';
import createPersistedState from 'vuex-persistedstate';

import { store as chocolates, ChocolatesStore, State as ChocolatesState } from '@/store/modules/chocolates';

export type RootState = {
  chocolates: ChocolatesState;
};

export type Store = ChocolatesStore<Pick<RootState, 'chocolates'>>;

// Plug in logger when in development environment
const debug = process.env.NODE_ENV !== 'production';
const plugins = debug ? [createLogger({})] : [];

// Plug in session storage based persistence
plugins.push(createPersistedState({ storage: window.sessionStorage }));

export const store = createStore({
  plugins,
  modules: {
    chocolates,
  },
});

export function useStore(): Store {
  return store as Store;
}
