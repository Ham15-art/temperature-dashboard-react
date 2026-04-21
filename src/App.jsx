import { useEffect, useState } from "react";
import { getAllReadings, getLatestReading } from "./services/telemetryApi";
import TemperatureCard from "./components/TemperatureCard";
import TemperatureChart from "./components/TemperatureChart";
import ReadingsTable from "./components/ReadingsTable";
import "./App.css";

function App() {
  const [latestReading, setLatestReading] = useState(null);
  const [readings, setReadings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadDashboardData = async (isinitialload=false) => {
      try {
        if (isinitialload) setLoading(true);

        const [latest, all] = await Promise.all([
          getLatestReading(),
          getAllReadings(),
        ]);

        setLatestReading(latest);
        setReadings(all);
      } catch (err) {
        console.error(err);
        setError("Failed to load telemetry data.");
      } finally {
        if (isinitialload) setLoading(false);
      }
    };

    loadDashboardData(true);

    //Auto-refresh every 3 seconds
    const interval = setInterval(() => {
      loadDashboardData(false);
    }, 3000);

    //Cleanup
    return () => clearInterval(interval);
  }, []);

  if (loading) return <p>Loading dashboard...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="dashboard">
      <h1>Temperature Monitoring Dashboard</h1>
      <h2>Industrial telemetry visualization for device temperature data</h2>

      <TemperatureCard reading={latestReading} />
      <TemperatureChart readings={readings} />
      <ReadingsTable readings={readings} />
    </div>
  );
}

export default App;