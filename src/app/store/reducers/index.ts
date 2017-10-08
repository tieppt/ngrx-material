import { ActionReducer, ActionReducerMap, createFeatureSelector, createSelector, MetaReducer } from '@ngrx/store';
import * as fromRouter from '@ngrx/router-store';

import { storeFreeze } from 'ngrx-store-freeze';
import { environment } from '@env/environment';

import * as fromLayout from '@app/core/store/reducers/layout';

export interface State {
  layout: fromLayout.State;
  routerReducer: fromRouter.RouterReducerState;
}

export const reducers: ActionReducerMap<State> = {
  layout: fromLayout.reducer,
  routerReducer: fromRouter.routerReducer,
};

// console.log all actions
export function logger(reducer: ActionReducer<State>): ActionReducer<State> {
  return function(state: State, action: any): State {
    console.log('state', state);
    console.log('action', action);

    return reducer(state, action);
  };
}


export const metaReducers: MetaReducer<State>[] = environment.production ? [] : [logger/*, storeFreeze*/];

/**
 * Layout Reducers
 */
export const getLayoutState = createFeatureSelector<fromLayout.State>('layout');

export const getShowSidenav = createSelector(
  getLayoutState,
  fromLayout.getShowSidenav
);
