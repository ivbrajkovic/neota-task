/* eslint-disable no-plusplus */

import { memo, useEffect, useRef } from 'react';
import { useClimateDataSelected, useClimateData } from 'hooks/useClimateData';
import { observeDataPoint } from 'components/ModalForm/useModalForm';
import { Card, CardContent } from '@mui/material';
import { FrappeChart } from 'components';
import { formatUrls } from 'common';

const BartChart = memo(({ type }) => {
  const chartRef = useRef();
  const climateData = useClimateData();
  const [selected] = useClimateDataSelected();

  useEffect(() => {
    const urls = formatUrls({ ...selected, type });
    if (!urls.length) return; // Exit effect if no valid urls

    const labels = [];
    const values = [];
    const gcmAvg = {};

    for (let i = 0; i < urls.length; i++) {
      const countryData = climateData[urls[i]];

      // TODO If no data try refetch?
      if (!countryData) return; // Exit effect if no data

      for (let j = 0; j < countryData.length; j++) {
        const { gcm, annualData } = countryData[j];
        gcmAvg[gcm] = (gcmAvg[gcm] || 0) + +annualData;
      }
    }

    // eslint-disable-next-line no-restricted-syntax
    for (const [key, value] of Object.entries(gcmAvg)) {
      labels.push(key);
      values.push(value / urls.length); // Average result
    }

    const newCartData = { labels, datasets: [{ values }] };
    chartRef.current.updateNotEqual(newCartData);
  }, [selected, climateData]);

  useEffect(() => {
    // eslint-disable-next-line no-unused-vars
    observeDataPoint(({ gcm, point }) => {
      chartRef.current.addDataPoint(gcm, [+point]);
    });
  }, []);

  return (
    <Card elevation={12}>
      <CardContent>
        <FrappeChart
          ref={chartRef}
          type="bar"
          barOptions={{
            spaceRatio: 0.2,
          }}
          axisOptions={{
            xAxisMode: 'tick',
            yAxisMode: 'tick',
            xIsSeries: 1,
          }}
          colors={['#7fd858', '#743ee2']}
          height={300}
          // data={chartData}
        />
      </CardContent>
    </Card>
  );
});

export default BartChart;
