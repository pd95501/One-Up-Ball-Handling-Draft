// pages/colors.js
export default function Colors() {
  return (
    <div style={{
      minHeight: '100vh',
      margin: 0,
      background: '#F5F7FA',
      fontFamily: 'system-ui, -apple-system, Segoe UI, Roboto, Arial',
      color: '#1C1F27',
      padding: '24px'
    }}>
      <h1>OneUp Colors — Light Theme</h1>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
        gap: 12,
        marginTop: 12
      }}>
        {[
          ['Background', '#F5F7FA'],
          ['Panel', '#FFFFFF'],
          ['Text', '#1C1F27'],
          ['Muted', '#6B7280'],
          ['Primary (Orange)', '#F47C3C'],
          ['Glow (Cyan)', '#00C4FF'],
          ['Border', '#E5E7EB'],
        ].map(([label, hex]) => (
          <div key={label} style={{border:'1px solid #E5E7EB', borderRadius:12, padding:12}}>
            <div style={{height:56, border:'1px solid #E5E7EB', borderRadius:10, background:hex}} />
            <div style={{marginTop:8, fontWeight:700}}>{label}</div>
            <code style={{color:'#6B7280'}}>{hex}</code>
          </div>
        ))}
      </div>

      <div style={{marginTop:16, display:'flex', gap:12, flexWrap:'wrap'}}>
        <a href="#" style={{
          display:'inline-flex', alignItems:'center', justifyContent:'center',
          padding:'12px 16px', borderRadius:10, color:'#fff',
          background:'linear-gradient(90deg, #F47C3C, #FF9A4F)',
          textDecoration:'none', fontWeight:800, boxShadow:'0 8px 24px rgba(244,124,60,.25)'
        }}>Primary CTA</a>

        <a href="#" style={{
          display:'inline-flex', alignItems:'center', justifyContent:'center',
          padding:'12px 16px', borderRadius:10, textDecoration:'none',
          color:'#1C1F27', background:'#fff', border:'1px solid #E5E7EB',
          boxShadow:'0 8px 24px rgba(0,196,255,.18)'
        }}>Ghost CTA</a>
      </div>
    </div>
  );
}
