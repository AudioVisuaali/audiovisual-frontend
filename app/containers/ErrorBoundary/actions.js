import { ERROR_BOUNDARY_ERROR } from './constants';
/**
 *
 *  Actions for error boundary
 *    For receiving data from the websocket
 *
 */

/**
 * Set room, used for initial load
 * @param {Object} room
 */
export function sendError(error, info) {
  return { type: ERROR_BOUNDARY_ERROR, error, info };
}
