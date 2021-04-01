import * as R from 'ramda';
import Yoga from '@react-pdf/yoga';

/**
 * Set display attribute to node's Yoga instance
 *
 * @param {String} display
 * @param {Object} node instance
 * @return {Object} node instance
 */
const setDisplay = value =>
  R.tap(node => {
    const yogaNode = node._yogaNode;

    if (yogaNode) {
      yogaNode.setDisplay(
        value === 'none' ? Yoga.DISPLAY_NONE : Yoga.DISPLAY_FLEX,
      );
    }
  });

export default setDisplay;