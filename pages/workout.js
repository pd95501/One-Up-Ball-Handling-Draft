import Head from 'next/head'
export default function workout() {
  return (
    <>
      <Head>
        <title>One Up Basketball — Free 30-Min Workout Builder</title>
        <meta
          name="description"
          content="Build a free 30-minute AI-powered ball-handling workout based on your goals using Coach Paris' curriculum."
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

      {/* HEADER / NAV */}
      <header className="site-header container" role="banner">
        <a className="logo" href="/">
          One Up Basketball
        </a>

        <button
          className="nav-toggle"
          aria-expanded="false"
          aria-controls="site-nav"
        >
          Menu
        </button>
        <nav id="site-nav" className="site-nav" aria-label="Primary">
          <a href="#workouts">Builder</a>
          <a href="#benefits">Benefits</a>
          <a href="#how-it-works">How It Works</a>
          <a href="#workouts" className="btn btn--sm">
            Build 30-Min Workout
          </a>
        </nav>
      </header>

      <main className="main" role="main">
        {/* HERO */}
        <section className="hero container">
          <div className="hero__text">
            <p className="pretitle">Free AI Ball-Handling Tool</p>
            <h1>
              Smarter Training.<br />
              <span className="accent">Sharper Handles.</span>
              <br />
              <span className="glow">Real Results.</span>
            </h1>
            <p className="lead">
              Use AI plus years of One Up training experience to generate a
              custom 30-minute ball-handling workout based on your goals —
              completely free.
            </p>
            <div className="cta">
              <a className="btn" href="#workouts">
                Build My 30-Min Workout
              </a>
              <a className="btn btn--ghost" href="#how-it-works">
                How It Works
              </a>
            </div>
            <p className="tiny">
              No credit card • No tracker upload • No video links — just clear,
              game-ready drills.
            </p>
          </div>

          <figure className="hero__media" aria-label="Program preview">
            <img
              src="/images/One Up Basketball (AI EDITION) Home Page.v2.png"
              alt="One Up Basketball AI Edition home screen"
              width="640"
              height="400"
            />
            <div className="orb orb--cyan" aria-hidden="true" />
            <div className="orb orb--violet" aria-hidden="true" />
          </figure>
        </section>

        {/* TRAINER EXPLAINER VIDEO */}
        <section
          id="trainer-video"
          className="container section"
          aria-label="Elite Skills Trainer explains the AI program"
        >
          <header className="section__header">
            <h2>Inside the One Up AI Ball-Handling System</h2>
            <p className="muted">
              Hear directly from an Elite Skills Trainer on how this free AI
              builder works and how to get the most out of it.
            </p>
          </header>

          <div className="video-center">
            <div className="video-wrapper">
              <iframe
                src="https://www.youtube.com/embed/EXPLAINER_VIDEO_ID"
                title="Elite Skills Trainer explaining the AI program"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          <p className="tiny muted">
            (Replace EXPLAINER_VIDEO_ID with your YouTube video ID when ready.)
          </p>
        </section>

        {/* TESTIMONIALS */}
        <section
          id="testimonials"
          className="container section"
          aria-label="Testimonials"
        >
          <header className="section__header">
            <h2>Testimonials</h2>
            <p className="muted">
              Hear from athletes using the One Up Basketball system.
            </p>
          </header>

          <div className="grid-3">
            <article className="card">
              <div className="video-wrapper">
                <iframe
                  src="https://www.youtube.com/embed/VIDEO_ID_1"
                  title="Athlete testimonial 1"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
              <p className="muted tiny">
                Placeholder testimonial video — replace VIDEO_ID_1.
              </p>
            </article>

            <article className="card">
              <div className="video-wrapper">
                <iframe
                  src="https://www.youtube.com/embed/VIDEO_ID_2"
                  title="Athlete testimonial 2"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
              <p className="muted tiny">
                Placeholder testimonial video — replace VIDEO_ID_2.
              </p>
            </article>

            <article className="card">
              <div className="video-wrapper">
                <iframe
                  src="https://www.youtube.com/embed/VIDEO_ID_3"
                  title="Athlete testimonial 3"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
              <p className="muted tiny">
                Placeholder testimonial video — replace VIDEO_ID_3.
              </p>
            </article>
          </div>
        </section>

        {/* WORKOUTS – ONLY FREE 30-MIN BUILDER */}
        <section id="workouts" className="container section">
          <header className="section__header">
            <h2>Free 30-Minute Ball-Handling Builder</h2>
            <p className="muted">
              Answer a few questions and let AI design a focused 30-minute
              ball-handling workout built for your game.
            </p>
          </header>
          <div className="grid-3">
            <article className="card card--primary">
              <h3>30-Minute Workout (Free)</h3>
              <p className="muted">
                Get a customized 30-minute ball-handling workout designed using
                AI plus years of One Up training experience. No video links —
                just clear drills, reps, and timing.
              </p>
              <p className="tiny">
                Inspired by the curriculum Coach Paris used to build multiple
                training academies.
              </p>
              <a className="btn btn--block" href="#how-it-works">
                See How to Use It
              </a>
            </article>
          </div>
        </section>

        {/* BENEFITS */}
        <section id="benefits" className="container section features">
          <header className="section__header">
            <h2>Why This Free Builder Works</h2>
            <p className="muted">
              Built from real training data, proven curriculum, and AI that
              adapts to you.
            </p>
          </header>

          <div className="grid-3">
            <article className="feature card">
              <h3>Build Your Own Workout</h3>
              <p>
                Describe your level, position, weaknesses, and goals so every
                workout is tailored specifically to you — for free.
              </p>
            </article>

            <article className="feature card">
              <h3>AI + Years of Experience</h3>
              <p>
                The builder uses AI plus years of ball-handling training
                experience and data to structure efficient, game-focused
                sessions.
              </p>
            </article>

            <article className="feature card">
              <h3>Coach Paris Curriculum</h3>
              <p>
                Workouts are inspired by the same curriculum Coach Paris used to
                build multiple training academies and develop serious players.
              </p>
            </article>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section id="how-it-works" className="container section">
          <header className="section__header">
            <h2>How to Use the Free 30-Min Builder</h2>
            <p className="muted">
              Follow these steps to get the best results from your AI-powered
              workout — no uploads and no videos, just drills.
            </p>
          </header>

          <div className="grid-3">
            <article className="card">
              <h3>1. Copy the Prompt</h3>
              <p>
                Scroll down to the Builder Instructions (coming soon) or your
                Skool interface to copy the AI prompt.
              </p>
            </article>

            <article className="card">
              <h3>2. Fill In Your Details</h3>
              <p>
                Replace the bracketed sections with your age, level, position,
                weaknesses, goals, space, and equipment.
              </p>
            </article>

            <article className="card">
              <h3>3. Paste Into the AI</h3>
              <p>
                Paste the completed prompt into the One Up AI interface and send
                it as a single message.
              </p>
            </article>

            <article className="card">
              <h3>4. Get Your 30-Min Workout</h3>
              <p>
                The AI returns one 30-minute ball-handling workout with clear
                drills, reps, and timing — no video links or extra fluff.
              </p>
            </article>

            <article className="card">
              <h3>5. Train & Repeat</h3>
              <p>
                Run the workout at game speed. When you're ready for a new
                focus, update your details and generate another session.
              </p>
            </article>
          </div>

          <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
            <a className="btn" href="#workouts">
              Begin Today
            </a>
          </div>
        </section>

        {/* MORE BALL-HANDLING VIDEOS */}
        <section
          id="more-videos"
          className="container section"
          aria-label="More ball-handling videos"
        >
          <header className="section__header">
            <h2>More Ball-Handling Videos</h2>
            <p className="muted">
              Extra breakdowns, drills, and demos to keep your handle sharp.
            </p>
          </header>

          <div className="grid-3">
            <article className="card">
              <div className="video-wrapper">
                <iframe
                  src="https://www.youtube.com/embed/5XqHIyfH1QA"
                  title="12 Dribbling Drill Workout For Elite Handles"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
              <p className="muted tiny">
                12 Dribbling Drill Workout For Elite Handles.
              </p>
            </article>

            <article className="card">
              <div className="video-wrapper">
                <iframe
                  src="https://www.youtube.com/embed/gVC4flFUVb8"
                  title="Drag Dribble Move"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
              <p className="muted tiny">
                The Drag Dribble Move For Elite Ball Handling.
              </p>
            </article>

            <article className="card">
              <div className="video-wrapper">
                <iframe
                  src="https://www.youtube.com/embed/xtiLiYK3CcA"
                  title="In & Out Masterclass"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
              <p className="muted tiny">In & Out Masterclass.</p>
            </article>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="site-footer container" role="contentinfo">
        <nav aria-label="Footer">
          <a href="#workouts">Builder</a>
          <a href="#benefits">Benefits</a>
          <a href="#how-it-works">How It Works</a>
        </nav>
        <p className="tiny">
          © <span id="year"></span> One Up Basketball
        </p>
      </footer>

      {/* SCRIPT */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            const btn = document.querySelector('.nav-toggle');
            const nav = document.getElementById('site-nav');
            if (btn && nav) {
              btn.addEventListener('click', () => {
                const expanded = btn.getAttribute('aria-expanded') === 'true';
                btn.setAttribute('aria-expanded', String(!expanded));
                nav.classList.toggle('open');
              });
            }

            const yearEl = document.getElementById('year');
            if (yearEl) {
              yearEl.textContent = new Date().getFullYear();
            }

            const root = document.documentElement;
            root.setAttribute('data-theme', 'light');
          `,
        }}
      />
    </>
  )
}
