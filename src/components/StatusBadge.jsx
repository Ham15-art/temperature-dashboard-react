function StatusBadge({ value = 0 }) {
  let label = "Normal";
  let color = "green";

  if (value >= 70) {
    label = "Critical";
    color = "red";
  } else if (value >= 40) {
    label = "Warning";
    color = "orange"
  }

  return (
    <p>
      <strong>Status:</strong> {""}
      <span
        style={{
          color: color,
          fontWeight: "bold",
          padding: "2px 8px",
          borderRadius: "6px",
          backgroundColor: "#f5f5f5",
        }}
      >
        {label}
      </span>
    </p>
  );
}

export default StatusBadge;