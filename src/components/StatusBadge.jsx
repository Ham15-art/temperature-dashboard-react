function StatusBadge({ value }) {
  let status = "Normal";

  if (value >= 70) {
    status = "Critical";
  } else if (value >= 50) {
    status = "Warning";
  }

  return (
    <p>
      <strong>Status:</strong> {status}
    </p>
  );
}

export default StatusBadge;