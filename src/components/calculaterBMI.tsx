import  { useState, useEffect } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const calculateBMI = (weight: number, height: number): number => {
  const bmi = weight / Math.pow(height / 100, 2);
  return parseFloat(bmi.toFixed(2));
};

export const CalculaterBMI: React.FC = () => {
  const [weight, setWeight] = useState<string>('');
  const [height, setHeight] = useState<string>('');
  const [bmi, setBMI] = useState<number | null>(null);
  const [chartData, setChartData] = useState<{ name: string; y: number }[]>([]);

  useEffect(() => {
    if (weight && height) {
      const newBMI = calculateBMI(parseFloat(weight), parseFloat(height));
      setBMI(newBMI);
      setChartData([{ name: 'BMI', y: newBMI }]);
    }
  }, [weight, height]);

  const chartOptions: Highcharts.Options = {
    chart: {
      type: 'column',
    },
    title: {
      text: 'BMI Chart',
    },
    series: [
      {
        type: 'column', 
        name: 'BMI',
        data: chartData,
      },
    ],
  };

  return (
    <div>
      <h1>BMI Calculator</h1>
      <label>
        Weight (kg):
        <input
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
      </label>
      <br />
      <label>
        Height (cm):
        <input
          type="number"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
      </label>
      <br />
      {bmi && <p>Your BMI: {bmi}</p>}
      <HighchartsReact highcharts={Highcharts} options={chartOptions} />
    </div>
  );
};
