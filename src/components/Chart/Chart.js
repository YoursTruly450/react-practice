import { ChartBar } from './ChartBar';

import './Chart.css';

export const Chart = ({ dataPoints }) => {
  const maxValue = Math.max.apply(null, dataPoints.map(({ value }) => value));
  // const maxValue = Math.max(...dataPoints.map(({ value }) => value));

  return (
    <ul className='chart'>
      {dataPoints.map((dataPoint) => <ChartBar
        key={dataPoint.label}
        value={dataPoint.value}
        maxValue={maxValue}
        label={dataPoint.label}
      />)}
    </ul>
  );
};