import './ChartBar.css';

export const ChartBar = ({ value, maxValue, label }) => {
  let barFillHeight = '0%';

  if (maxValue > 0) {
    barFillHeight = `${Math.ceil((value / maxValue * 100))}%`;
  }

  return (
    <div className='chart-bar'>
      <div className='chart-bar__inner'>
        <div className='chart-bar__fill' style={{ height: barFillHeight }}></div>
      </div>
      <div className='chart-bar__label'>{label}</div>
    </div>
  );
};