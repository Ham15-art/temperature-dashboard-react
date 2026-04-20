function ReadingsTable({ readings }) {
  return (
    <div className="card">
      <h2>Recent Readings</h2>
      <table>
        <thead>
          <tr>
            <th>Device ID</th>
            <th>Temperature (°C)</th>
            <th>Timestamp</th>
          </tr>
        </thead>
        <tbody>
          {readings.slice(0, 10).map((reading, index) => (
            <tr key={index}>
              <td>{reading.deviceId}</td>
              <td>{reading.value}</td>
              <td>{new Date(reading.timestampUtc).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ReadingsTable;