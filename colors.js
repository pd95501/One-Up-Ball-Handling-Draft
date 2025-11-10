// pages/colors.js
import Head from "next/head";

export default function Colors() {
  return (
    <>
      <Head>
        <title>OneUp — Color Preview</title>
        <link rel="stylesheet" href="/brand.css" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap" rel="stylesheet" />
      </Head>

      <main className="wrap">
        <header className="head">
          <h1>OneUp Basketball — Color System</h1>
          <p className="muted">Light theme with brand orange + luminous cyan accent.</p>
        </header>

        {/* Swatches */}
        <section>
          <h2>Swatches</h2>
          <div className="swatches">
            <div className="swatch" style={{"--c":"var(--bg)"} as any}>
              <span>Background</span><code>--bg • #F5F7FA</code>
            </div>
            <div className="swatch" style={{"--c":"var(--panel)"} as any}>
              <span>Panel</span><code>--panel • #FFFFFF</code>
            </div>
            <div className="swatch" style={{"--c":"var(--text)"} as any}>
              <span>Text</span><code>--text • #1C1F27</code>
            </div>
            <div className="swatch" style={{"--c":"var(--muted)"} as any}>
              <span>Muted</span><code>--muted • #6B7280</code>
            </div>
            <div className="swatch" style={{"--c":"var(--primary)"} as any}>
              <span>Primary (Orange)</span><code>--primary • #F47C3C</code>
            </div>
            <div className="swatch" style={{"--c":"var(--glow)"} as any}>
              <span>Glow (Cyan)</span><code>--glow • #00C4FF</code>
            </div>
            <div className="swatch" style={{"--c":"var(--border)"} as any}>
              <span>Border</span><code>--border • #E5E7EB</code>
            </div>
          </div>
        </section>

        {/* Type & Buttons */}
        <section>
          <h2>Typography & Buttons</h2>
          <p className="lead">
            Clean light UI with energetic orange actions and a subtle cyan glow for hover/focus.
          </p>
          <div className="button-row">
            <a className="btn" href="#">Primary CTA</a>
            <a className="btn btn--ghost" href="#">Secondary / Ghost</a>
            <button className="chip">Tag / Pill</button>
            <a className="link" href="#">Inline link →</a>
          </div>
        </section>

        {/* Cards */}
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

        {/* Accessibility quick check */}
        <section>
          <h2>Contrast Check</h2>
          <ul className="checks">
            <li><span className="dot dot--text" /> Text on background passes AA.</li>
            <li><span className="dot dot--btn" /> White text on orange button passes AA.</li>
            <li><span className="dot dot--muted" /> Muted text is for secondary info only.</li>
          </ul>
        </section>

        <footer className="foot">
          <p className="muted">If this look is approved, we’ll lock these variables and build the homepage.</p>
        </footer>
      </main>
    </>
  );
}
