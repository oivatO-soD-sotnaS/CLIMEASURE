import React, { FC } from 'react'

//Recharts Imports
import {
  ComposedChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

interface ResponsiveLineChartProps {
  report: {
    id_report: number;
    id_institute: number;
    solar_energy: number;
    temperature: number;
    wind_speed: number;
    rain: number;
    moisture: number;
    timestamp: Date;
    }[],
  dataKey: string,
}

const ResponsiveLineChart: FC<ResponsiveLineChartProps> = ({ report, dataKey }: ResponsiveLineChartProps) => {

  return (
    <ResponsiveContainer>
      <ComposedChart
        data={report}
        margin={{
          top: 20,
          right: 20,
          bottom: 20,
          left: 20,
        }}
      >
        <CartesianGrid stroke="#f5f5f5" />
        <XAxis dataKey="timestamp" scale="auto" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey={dataKey}  barSize={20} fill="#413ea0" />
        <Line type="natural" dataKey={dataKey} stroke="#ff7300" />
      </ComposedChart>
    </ResponsiveContainer>
  );
}

export default ResponsiveLineChart