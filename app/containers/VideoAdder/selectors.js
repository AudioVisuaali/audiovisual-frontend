import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the videoAdder state domain
 */

const selectVideoAdderDomain = state => state.videoAdder || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by VideoAdder
 */

const makeSelectVideoAdder = () =>
  createSelector(
    selectVideoAdderDomain,
    substate => substate,
  );

export default makeSelectVideoAdder;
export { selectVideoAdderDomain };
