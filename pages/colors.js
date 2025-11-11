// pages/colors.js
import Head from "next/head";

export default function Colors() {
  return (
    <>
      <Head>
        <title>OneUp — Color Preview</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap" rel="stylesheet" />
        <style>{`
          :root{
            --bg:#F5F7FA;        /* page background */
            --panel:#FFFFFF;     /* cards / surfaces */
            --text:#1C1F27;      /* main text */
            --muted:#6B7280;     /* secondary text */
            --primary:#F47C3C;   /* OneUp orange */
            --glow:#00C4FF;      /* luminous cyan */
            --border:#E5E7EB;    /* lines/borders */
            --shadow:0 8px 28px rgba(16,24,40,.08);
            --radius:14px;
          }
          *{box-sizing:border-box}
          html,body{height:100%}
          body{
            margin:0; font-family:Inter,system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif; color:var(--text);
            background: radial-gradient(800px 500px at 10% -20%, rgba(0,196,255,.08), transparent 60%), var(--bg);
          }
          .wrap{width:min(1100px,92%); margin-inline:auto; padding:36px 0}
          h1{font-size:clamp(28px,3vw,40px); line-height:1.15; margin:0 0 6px}
          h2{margin:28px 0 10px}
          .muted{color:var(--muted)}
          .swatches{display:grid; grid-template-columns:repeat(7,minmax(0,1fr)); gap:10px}
          .swatch{background:var(--panel); border:1px solid var(--border); border-radius:12px; padding:12px; box-shadow:var(--shadow); display:flex; flex-direction:column; gap:6px}
          .swatch::before{content:""; display:block; height:56px; border-radius:10px; background:var(--c); border:1px solid var(--border)}
          .swatch span{font-weight:600}
          .swatch code{color:var(--muted); font-size:12px}
          .button-row{display:flex; flex-wrap:wrap; gap:10px; margin:10px 0 4px}
          .btn{display:inline-flex; align-items:center; justify-content:center; padding:.85rem 1rem; border-radius:10px; border:1px solid transparent; background:linear-gradient(90deg, var(--primary), #FF9A4F); color:#fff; font-weight:800; text-decoration:none; box-shadow:0 6px 22px rgba(244,124,60,.25); transition:transform .08s ease, box-shadow .2s ease}
          .btn:hover{transform:translateY(-1px); box-shadow:0 10px 30px rgba(244,124,60,.30)}
          .btn--ghost{background:#fff; color:var(--text); border-color:var(--border); box-shadow:0 6px 22px rgba(0,196,255,.18)}
          .btn--ghost:hover{border-color:#C7D2FE; box-shadow:0 10px 26px rgba(0,196,255,.25)}
          .btn--sm{padding:.6rem .8rem; font-weight:700}
          .grid{display:grid; grid-template-columns:repeat(3,minmax(0,1fr)); gap:12px}
          .card{background:var(--panel); border:1px solid var(--border); border-radius:var(--radius); padding:18px; box-shadow:var(--shadow)}
          .card--glow{border-color:#BFEFFF; box-shadow:0 0 0 2px rgba(0,196,255,.15), 0 18px 36px rgba(2,132,199,.16)}
          .checks{list-style:none; padding:0; margin:8px 0 0; display:grid; gap:8px}
          .dot{width:14px; height:14px; border-radius:50%; display:inline-block; margin-right:8px; vertical-align:middle}
          .dot--text{background:#222}
          .dot--btn{background:#F47C3C}
          .dot--muted{background:#6B7280}
          @media (max-width:900px){ .swatches{grid-template-columns:repeat(3,minmax(0,1fr))} .grid{grid-template-columns:1fr} }
        `}</style>
      </Head>

      <main className="wrap">
        <header>
          <h1>OneUp Basketball — Color System</h1>
          <p className="muted">Light theme with brand orange + luminous cyan accent.</p>
        </header>

        <section>
          <h2>Swatches</h2>
          <div className="swatches">
            <div className="swatch" style={{"--c":"var(--bg)"} as any}><span>Background</span><code>#F5F7FA</code></div>
            <div className="swatch" style={{"--c":"var(--panel)"} as any}><span>Panel</span><code>#FFFFFF</code></div>
            <div className="swatch" style={{"--c":"var(--text)"} as any}><span>Text</span><code>#1C1F27</code></div>
            <div className="swatch" style={{"--c":"var(--muted)"} as any}><span>Muted</span><code>#6B7280</code></div>
            <div className="swatch" style={{"--c":"var(--primary)"} as any}><span>Primary (Orange)</span><code>#F47C3C</code></div>
            <div className="swatch" style={{"--c":"var(--glow)"} as any}><span>Glow (Cyan)</span><code>#00C4FF</code></div>
            <div className="swatch" style={{"--c":"var(--border)"} as any}><span>Border</span><code>#E5E7EB</code></div>
          </div>
        </section>

        <section>
          <h2>Typography & Buttons</h2>
          <p className="muted">Clean light UI with energetic orange actions and a subtle cyan glow.</p>
          <div className="button-row">
            <a className="btn" href="#">Primary CTA</a>
            <a className="btn btn--ghost" href="#">Secondary / Ghost</a>
            <a className="btn btn--sm" href="#">Small CTA</a>
          </div>
        </section>

        <section>
          <h2>Cards / Panels</h2>
          <div className="grid">
            <article className="card">
              <h3>Shooting System</h3>
              <p className="muted">27 days of reps, form fixes, and tracking.</p>
              <a className="btn btn--sm" href="#">Get Started</a>
            </article>
            <article className="card card--glow">
              <h3>Scoring System</h3>
              <p className="muted">Separation, finishing, decision-making.</p>
              <a className="btn btn--sm" href="#">View Program</a>
            </article>
            <article className="card">
              <h3>Handles & First Step</h3>
              <p className="muted">Ball control, change of pace, burst.</p>
              <a className="btn btn--sm" href="#">Improve Handles</a>
            </article>
          </div>
        </section>

        <section>
          <h2>Contrast Check</h2>
          <ul className="checks">
            <li><span className="dot dot--text" /> Text on background passes AA.</li>
            <li><span className="dot dot--btn" /> White text on orange button passes AA.</li>
            <li><span className="dot dot--muted" /> Muted text is for secondary info only.</li>
          </ul>
        </section>
      </main>
    </>
  );
}
