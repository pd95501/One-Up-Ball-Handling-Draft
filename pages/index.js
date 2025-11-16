// pages/index.js
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>One Up Basketball — Train Smarter</title>
        <meta
          name="description"
          content="Online basketball training systems, drills, and workouts."
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="/styles.css" />
      </Head>

      <header className="site-header container" role="banner">
        <a className="logo" href="/">
          One Up Basketball Training
        </a>

        {/* Theme switcher */}
        <div className="theme-switch">
          <button data-theme-btn="light" className="chip">
            Light
          </button>
          <button data-theme-btn="orange" className="chip">
            Orange
          </button>
          <button data-theme-btn="dark" className="chip">
            Dark
          </button>
        </div>

        <button
          className="nav-toggle"
          aria-expanded="false"
          aria-controls="site-nav"
        >
          Menu
        </button>
        <nav id="site-nav" className="site-nav" aria-label="Primary">
          <a href="#programs">Workouts</a>
          <a href="#features">Benefits</a>
          <a href="#contact" className="btn btn--sm">
            Contact Us
          </a>
        </nav>
      </header>

      <main className="main" role="main">
        {/* HERO */}
        <section className="hero container">
          <div className="hero__text">
            <p className="pretitle">AI-Enhanced Training</p>
            <h1>
              <span className="accent">Train smarter.</span> Shoot better.{' '}
              <span className="glow">Score more.</span>
            </h1>
            <p className="lead">
              A modern system for players who want real in-game results—built on
              drills, data, and consistent coaching.
            </p>
            <div className="cta">
              <a className="btn" href="#programs">
                Explore Programs
              </a>
              <a className="btn btn--ghost" href="#articles">
                Read Articles
              </a>
            </div>
            <p className="tiny">
              Free preview • Mobile-friendly workouts • No credit card
            </p>
          </div>

          <figure className="hero__media" aria-label="Program preview">
            {/* Replace with your imagery when ready */}
            <img
              src="/images/One Up Basketball (AI EDITION) Home Page.v2.png"
              alt="Training program preview"
              width="640"
              height="400"
            />
            <div className="orb orb--cyan" aria-hidden="true" />
            <div className="orb orb--violet" aria-hidden="true" />
          </figure>
        </section>

        {/* TRUST */}
        <section className="container brands" aria-label="Trusted by">
          <p className="tiny">Trusted by players at</p>
          <ul>
            <li>High School Programs</li>
            <li>AAU Teams</li>
            <li>College Recruits</li>
            <li>Coaches</li>
          </ul>
        </section>

        {/* PROGRAMS */}
        <section id="programs" className="container section">
          <header className="section__header">
            <h2>Online Training Systems</h2>
            <p className="muted">
              Structured, progressive plans you can start today.
            </p>
          </header>
          <div className="grid-3">
            <article className="card">
              <h3>27-Day Shooting System</h3>
              <p className="muted">
                Daily reps, form fixes, and tracking to increase your % from
                anywhere on the floor.
              </p>
              <a className="btn btn--block" href="#">
                Start Shooting
              </a>
            </article>
            <article className="card card--primary">
              <h3>Scoring System</h3>
              <p className="muted">
                Footwork, finishing, and reads to create separation and convert
                at the rim.
              </p>
              <a className="btn btn--block" href="#">
                Start Scoring
              </a>
            </article>
            <article className="card">
              <h3>Handles &amp; First Step</h3>
              <p className="muted">
                Ball control, change of pace, and explosive first move.
              </p>
              <a className="btn btn--block" href="#">
                Improve Handles
              </a>
            </article>
          </div>
        </section>

        {/* FEATURES */}
        <section id="features" className="container section features">
          <header className="section__header">
            <h2>Why players level up</h2>
            <p className="muted">
              Short sessions • measurable progress • game-ready habits
            </p>
          </header>
          <div className="grid-3">
            <article className="feature">
              <div className="feature__icon" aria-hidden="true">
                🏀
              </div>
              <h3>Game-speed drills</h3>
              <p>
                Built to transfer—footwork, timing, and reads that show up on
                game night.
              </p>
            </article>
            <article className="feature">
              <div className="feature__icon" aria-hidden="true">
                📈
              </div>
              <h3>Track your reps</h3>
              <p>
                Simple tracking so you can see makes, attempts, and streaks
                improve.
              </p>
            </article>
            <article className="feature">
              <div className="feature__icon" aria-hidden="true">
                🎧
              </div>
              <h3>Coach in your pocket</h3>
              <p>
                Clear videos and cues—no fluff. Train anywhere with your phone.
              </p>
            </article>
          </div>
        </section>

        {/* ARTICLES (placeholder) */}
        <section id="articles" className="container section">
          <header className="section__header">
            <h2>Latest Articles</h2>
            <p className="muted">
              Drills, workouts, and tips from our coaches.
            </p>
          </header>
          <div className="grid-3">
            <article className="post">
              <div className="post__thumb"></div>
              <h3>Form Fixes: Elbow In, Wrist Snap</h3>
              <p className="muted">
                3 quick cues that change your arc and accuracy.
              </p>
              <a className="btn btn--sm" href="#">
                Read
              </a>
            </article>
            <article className="post">
              <div className="post__thumb"></div>
              <h3>2-Dribble Pull-Up Timing</h3>
              <p className="muted">
                Footwork sequence for balance and rise.
              </p>
              <a className="btn btn--sm" href="#">
                Read
              </a>
            </article>
            <article className="post">
              <div className="post__thumb"></div>
              <h3>Beat The Hedge</h3>
              <p className="muted">
                Simple reads to punish hard hedges and switches.
              </p>
              <a className="btn btn--sm" href="#">
                Read
              </a>
            </article>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="container section contact">
          <header className="section__header">
            <h2>Get in touch</h2>
            <p className="muted">We usually reply within one business day.</p>
          </header>
          <form className="contact-form" action="#" method="post">
            <label htmlFor="name">Name</label>
            <input id="name" name="name" required />
            <label htmlFor="email">Email</label>
            <input id="email" name="email" type="email" required />
            <label htmlFor="msg">Message</label>
            <textarea id="msg" name="message" rows="5" required />
            <button className="btn" type="submit">
              Send
            </button>
          </form>
        </section>
      </main>

      <footer className="site-footer container" role="contentinfo">
        <nav aria-label="Footer">
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
          <a href="#contact">Contact</a>
        </nav>
        <p className="tiny">
          © <span id="year"></span> One Up Basketball
        </p>
      </footer>

      {/* tiny script for menu + theme toggle */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            // mobile nav
            const btn = document.querySelector('.nav-toggle');
            const nav = document.getElementById('site-nav');
            btn?.addEventListener('click', () => {
              const expanded = btn.getAttribute('aria-expanded') === 'true';
              btn.setAttribute('aria-expanded', String(!expanded));
              nav.classList.toggle('open');
            });

            // footer year
            const yearEl = document.getElementById('year');
            if (yearEl) {
              yearEl.textContent = new Date().getFullYear();
            }

            // theme init
            const root = document.documentElement;
            const saved = localStorage.getItem('theme') || 'light';
            root.setAttribute('data-theme', saved);

            // theme switcher buttons
            document.querySelectorAll('[data-theme-btn]').forEach(el => {
              el.addEventListener('click', () => {
                const t = el.getAttribute('data-theme-btn');
                root.setAttribute('data-theme', t);
                localStorage.setItem('theme', t);
              });
            });
          `,
        }}
      />
    </>
  )
}
