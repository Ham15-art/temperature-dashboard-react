import StatusBadge from "./StatusBadge";

function TemperatureCard({ reading }) {
  if (!reading) return <p>No latest reading available.</p>;

  return (
    <div className="card">
      <h2>Latest Reading</h2>
      <p><strong>Device:</strong> {reading.deviceId}</p>
      <p><strong>Temperature:</strong> {reading.value} °C</p>
      <p><strong>Timestamp:</strong> {new Date(reading.timestampUtc).toLocaleString()}</p>
      <StatusBadge value={reading.value} />
    </div>
  );
}

export default TemperatureCard;