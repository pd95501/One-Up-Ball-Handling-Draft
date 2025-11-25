// pages/index.js
import Head from 'next/head'

export default function Workout() {
  return (
    <>
      <Head>
        <title>One Up Basketball — Free 10-Min Workout Builder</title>
        <meta
          name="description"
          content="Build a free 10-minute AI-powered ball-handling workout based on your goals using an Elite Skills Trainer's' curriculum."
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
            Build 10-Min Workout
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
              Gain access to 20+ years of One Up training experience with our new One Up AI Ball Handling program that generates custom 10-minute ball-handling workouts based on your goals — completely free.
            </p>
            <div className="cta">
              <a className="btn" href="#workouts">
                Build My 10-Min Workout
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
              Hear directly from an Elite Skills Trainer on how this free One Up
              AI Ball Handling program works and how to get the most out of it.
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

        {/* WORKOUTS – ONLY FREE 10-MIN BUILDER (CENTERED) */}
        <section id="workouts" className="container section">
          <header className="section__header">
            <h2>Free 10-Minute Ball-Handling Builder</h2>
            <p className="muted">
              Answer a few questions and let the One Up AI Ball Handling program
              design a focused 10-minute ball-handling workout built for your
              game.
            </p>
          </header>

          <div className="builder-center">
            <article className="card card--primary builder-card">
              <h3>10-Minute Workout (Free)</h3>
              <p className="muted">
                Get a customized 10-minute ball-handling workout generated by
                the One Up AI Ball Handling program and shaped by over 20 years
                of One Up training experience. No video links — just clear
                drills, reps, and timing.
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
              Powered by over 20 years of One Up Basketball training experience
              and the proven curriculum used in our academies worldwide.
            </p>
          </header>

          <div className="grid-3">
            <article className="feature card">
              <h3>Build Your Own Workout</h3>
              <p>
                Describe your level, position, weaknesses, and goals so every
                workout is tailored specifically to you — built using the same
                foundation behind 20+ years of One Up training philosophy.
              </p>
            </article>

            <article className="feature card">
              <h3>Built on 20+ Years of Training</h3>
              <p>
                Your custom 10-minute session is generated using the proven
                ball-handling methods developed by One Up over the last two
                decades — now delivered instantly through our One Up AI Ball
                Handling program.
              </p>
            </article>

            <article className="feature card">
              <h3>Coach Paris Curriculum</h3>
              <p>
                Every workout is modeled after the same curriculum Coach Paris
                used to build multiple One Up academies, training thousands of
                athletes with a system now enhanced through our AI-powered
                delivery.
              </p>
            </article>
          </div>
        </section>

        {/* HOW IT WORKS – 3 STEPS */}
        <section id="how-it-works" className="container section">
          <header className="section__header">
            <h2>How to Use the Free 10-Min Builder</h2>
            <p className="muted">
              Three simple steps to turn your info into a focused 10-minute
              ball-handling session.
            </p>
          </header>

          <div className="grid-3">
            <article className="card">
              <h3>1. Copy the Builder Prompt</h3>
              <p>
                Grab the One Up AI builder prompt (from this page or your One Up
                AI interface) and copy it into your chat.
              </p>
            </article>

            <article className="card">
              <h3>2. Add Your Details</h3>
              <p>
                Fill in your age, level, position, weaknesses, goals, space, and
                equipment so the workout is built around your real situation.
              </p>
            </article>

            <article className="card">
              <h3>3. Generate &amp; Train</h3>
              <p>
                Send the prompt to the AI, get your 10-minute workout, then run
                it at game speed. Repeat whenever you&apos;re ready for a new
                focus.
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
              <p className="muted tiny">In &amp; Out Masterclass.</p>
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
