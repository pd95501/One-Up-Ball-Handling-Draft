// pages/colors.js
export default function Colors() {
  return (
    <div
      style={{
        minHeight: '100vh',
        padding: '24px',
        background: '#F5F7FA',
        color: '#1C1F27',
        fontFamily: 'system-ui, -apple-system, Segoe UI, Roboto, Arial',
      }}
    >
      <h1>/colors route — sanity check</h1>
      <p>If you can read this, the route works.</p>

      <div style={{ display: 'grid', gap: 12, gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', marginTop: 12 }}>
        {[
          ['Background', '#F5F7FA'],
          ['Panel', '#FFFFFF'],
          ['Primary (Orange)', '#F47C3C'],
          ['Glow (Cyan)', '#00C4FF'],
          ['Text', '#1C1F27'],
          ['Muted', '#6B7280'],
        ].map(([label, hex]) => (
          <div key={label} style={{ border: '1px solid #E5E7EB', borderRadius: 10, padding: 12 }}>
            <div style={{ height: 56, borderRadius: 8, border: '1px solid #E5E7EB', background: hex }} />
            <div style={{ marginTop: 8, fontWeight: 700 }}>{label}</div>
            <code style={{ color: '#6B7280' }}>{hex}</code>
          </div>
        ))}
      </div>
    </div>
  );
}
