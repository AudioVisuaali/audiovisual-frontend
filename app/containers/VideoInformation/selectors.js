import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the videoInformation state domain
 */

const selectVideoInformationDomain = state =>
  state.videoInformation || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by VideoInformation
 */

const makeSelectVideoInformation = () =>
  createSelector(
    selectVideoInformationDomain,
    substate => substate,
  );

export default makeSelectVideoInformation;
export { selectVideoInformationDomain };
