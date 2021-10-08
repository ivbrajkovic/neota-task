import { forwardRef, memo, useLayoutEffect, useRef } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import isEqual from 'lodash/isEqual';
import { Chart } from 'frappe-charts/dist/frappe-charts.min.esm';
import useCombinedRefs from 'hooks/useCombinedRefs';

// TODO Check props.data to update component in React way :)
// eslint-disable-next-line no-unused-vars
const isEqualComponent = (prev, next) => true; // isEqual(prev.data, next.data);

const ReactFrappeChart = memo(
  forwardRef((props, parentRef) => {
    const nodeRef = useRef();
    const chartRef = useRef();
    const combinedRef = useCombinedRefs(parentRef, chartRef);

    // Run effect ASAP
    useLayoutEffect(() => {
      combinedRef.current = new Chart(nodeRef.current, {
        ...props,
        data: {
          labels: [0],
          datasets: [{ values: [0] }],
        },
        // animate: 0,
      });

      // eslint-disable-next-line func-names
      combinedRef.current.updateNotEqual = function (newData) {
        // FrappeChart does not remove svg element in
        // same microtask so we schedule update on next microtask
        // eslint-disable-next-line react/no-this-in-sfc
        if (!isEqual(newData, this.data)) {
          setTimeout(() => {
            // eslint-disable-next-line react/no-this-in-sfc
            this.update(newData);
          }, 0);
        }
      };
    }, []);

    return <div ref={nodeRef} />;
  }),
  isEqualComponent
);

export default ReactFrappeChart;
