import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function TemperatureChart({ readings }) {
  const chartData = readings.map((reading) => ({
    ...reading,
    time: new Date(reading.timestampUtc).toLocaleTimeString(),
  }));

  return (
    <div className="card chart-card">
      <h2>Temperature Trend</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="value" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default TemperatureChart;