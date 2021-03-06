import { AppAction, AppActionType } from './actions';
import { initialState, VersionState } from './contract';

export function reducer(state = initialState, action: AppAction): VersionState {
  switch (action.type) {

    case AppActionType.LoadLatestStateVersionSuccessful: {
      return {
        ...state,
        version: action.payload,
      };
    }

    default: {
      return state;
    }
  }
}
