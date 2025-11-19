// pages/index.js
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>One Up Basketball — Train Smarter</title>
        <meta
          name="description"
          content="AI-powered ball-handling system that turns your goals into hyper-specific workouts."
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
          <a href="#workouts">Workouts</a>
          <a href="#benefits">Benefits</a>
          {/* Add <a href="/progress">My Progress</a> later when wired to real data */}
          <a href="#community" className="btn btn--sm">
            Upload
          </a>
        </nav>
      </header>

      <main className="main" role="main">
        {/* HERO */}
        <section className="hero container">
          <div className="hero__text">
            <p className="pretitle">AI-Enhanced Training</p>
            <h1>
              Smarter Training.<br />
              <span className="accent">Sharper Handles.</span><br />
              <span className="glow">Real Results.</span>
            </h1>
            <p className="lead">
              An AI system that turns your goals into hyper-specific
              ball-handling workouts built for real improvement.
            </p>
            <div className="cta">
              <a className="btn" href="#workouts">
                Workouts
              </a>
              <a className="btn btn--ghost" href="#benefits">
                Read Benefits
              </a>
            </div>
            <p className="tiny">
              AI-customized workouts • Built for real results • Instant access
            </p>
          </div>

          <figure className="hero__media" aria-label="Program preview">
            {/* HERO IMAGE – uses your provided file name from /public/images */}
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
              Hear directly from an Elite Skills Trainer on how the AI program
              works and how to get the most out of it.
            </p>
          </header>

          {/* Centered video */}
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
                Placeholder testimonial video — replace VIDEO_ID_1 with your
                YouTube link.
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
                Placeholder testimonial video — replace VIDEO_ID_2 with your
                YouTube link.
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
                Placeholder testimonial video — replace VIDEO_ID_3 with your
                YouTube link.
              </p>
            </article>
          </div>
        </section>

        {/* WORKOUTS */}
        <section id="workouts" className="container section">
          <header className="section__header">
            <h2>Online Ball-Handling System</h2>
            <p className="muted">
              Ball-handling workouts you need to level up fast.
            </p>
          </header>
          <div className="grid-3">
            <article className="card">
              <h3>30 Minute Workout</h3>
              <p className="muted">
                High-intensity session you can plug in before or after practice
                to sharpen your handle and decision-making.
              </p>
              <a className="btn btn--block" href="#">
                Unlock Workout
              </a>
            </article>
            <article className="card card--primary">
              <h3>7 Day Workout</h3>
              <p className="muted">
                One focused week of AI-guided drills to build confidence with
                the ball under pressure.
              </p>
              <a className="btn btn--block" href="#">
                Start 7-Day Plan
              </a>
            </article>
            <article className="card">
              <h3>4 Week Workout</h3>
              <p className="muted">
                A full month of progressive ball-handling, footwork, and change
                of pace to transform your game.
              </p>
              <a className="btn btn--block" href="#">
                Begin 4-Week System
              </a>
            </article>
          </div>
        </section>

        {/* BENEFITS */}
        <section id="benefits" className="container section features">
          <header className="section__header">
            <h2>Benefits</h2>
            <p className="muted">
              No-Guess Workouts • Trackable Gains • Game-Ready Skills
            </p>
          </header>
          <div className="grid-3">
            <article className="feature card">
              <h3>AI-Tailored Workouts</h3>
              <p>
                Smart, personalized ball-handling video drills built around your
                goals, needs, and challenges.
              </p>
            </article>
            <article className="feature card">
              <h3>Progress That Adapts</h3>
              <p>
                Upload your tracker after each session and let AI monitor your
                improvement—and adjust your plan automatically.
              </p>
            </article>
            <article className="feature card">
              <h3>Guidance Anytime</h3>
              <p>
                Have an Elite Skills Trainer in your pocket who you can message
                directly for questions or feedback.
              </p>
            </article>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section id="how-it-works" className="container section">
          <header className="section__header">
            <h2>How It Works</h2>
            <p className="muted">
              A simple 5-step process so every workout is clear, targeted, and
              backed by data.
            </p>
          </header>
          <div className="grid-3">
            <article className="card">
              <h3>1. Complete Survey</h3>
              <p>
                Tell us your position, current level, strengths, weaknesses, and
                goals so the AI and trainer know exactly where you&apos;re at.
              </p>
            </article>
            <article className="card">
              <h3>2. Receive Specialized Workout</h3>
              <p>
                Get an AI-tailored ball-handling workout that fits your goals,
                schedule, and court access.
              </p>
            </article>
            <article className="card">
              <h3>3. Complete Training</h3>
              <p>
                Follow the video drills, reps, and cues at game speed—no guess
                work, no wasted time.
              </p>
            </article>
            <article className="card">
              <h3>4. Upload Tracker</h3>
              <p>
                After each session, upload your completed tracker so the system
                can see your effort, reps, and results.
              </p>
            </article>
            <article className="card">
              <h3>5. Track Progress</h3>
              <p>
                Watch your trends over time and get updated workouts that match
                how you&apos;re improving.
              </p>
            </article>
          </div>

          {/* BEGIN TODAY BUTTON */}
          <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
            <a className="btn" href="#workouts">
              Begin Today
            </a>
          </div>
        </section>

        {/* COMMUNITY / UPLOAD TRACKER */}
        <section id="community" className="container section contact">
          <header className="section__header">
            <h2>Upload Your Tracker</h2>
            <p className="muted">
              After each workout, upload your completed tracker so we can see
              your progress and refine your plan.
            </p>
          </header>
          <form className="contact-form" action="#" method="post">
            <label htmlFor="name">Name</label>
            <input id="name" name="name" required />

            <label htmlFor="email">Email</label>
            <input id="email" name="email" type="email" required />

            <label htmlFor="workout">Which workout did you complete?</label>
            <input
              id="workout"
              name="workout"
              placeholder="30 Minute, 7 Day, or 4 Week"
              required
            />

            <label htmlFor="file">Upload tracker file</label>
            <input id="file" name="file" type="file" />

            <label htmlFor="notes">Notes (optional)</label>
            <textarea
              id="notes"
              name="notes"
              rows={4}
              placeholder="Anything you want your trainer or AI to know?"
            />

            <button className="btn" type="submit">
              Upload Tracker
            </button>
          </form>
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
                  src="https://www.youtube.com/watch?v=gVC4flFUVb8&t=42s"
                  title="Ball-handling video 1"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
              <p className="muted tiny">
                Placeholder ball-handling video — replace VIDEO_ID_A.
              </p>
            </article>

            <article className="card">
              <div className="video-wrapper">
                <iframe
                  src="https://www.youtube.com/embed/VIDEO_ID_B"
                  title="Ball-handling video 2"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
              <p className="muted tiny">
                Placeholder ball-handling video — replace VIDEO_ID_B.
              </p>
            </article>

            <article className="card">
              <div className="video-wrapper">
                <iframe
                  src="https://www.youtube.com/embed/VIDEO_ID_C"
                  title="Ball-handling video 3"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
              <p className="muted tiny">
                Placeholder ball-handling video — replace VIDEO_ID_C.
              </p>
            </article>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="site-footer container" role="contentinfo">
        <nav aria-label="Footer">
          <a href="#workouts">Workouts</a>
          <a href="#benefits">Benefits</a>
          <a href="#community">Community</a>
        </nav>
        <p className="tiny">
          © <span id="year"></span> One Up Basketball
        </p>
      </footer>

      {/* script: mobile nav, footer year, force light theme */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            // mobile nav toggle
            const btn = document.querySelector('.nav-toggle');
            const nav = document.getElementById('site-nav');
            if (btn && nav) {
              btn.addEventListener('click', () => {
                const expanded = btn.getAttribute('aria-expanded') === 'true';
                btn.setAttribute('aria-expanded', String(!expanded));
                nav.classList.toggle('open');
              });
            }

            // footer year
            const yearEl = document.getElementById('year');
            if (yearEl) {
              yearEl.textContent = new Date().getFullYear();
            }

            // force light theme
            const root = document.documentElement;
            root.setAttribute('data-theme', 'light');
          `,
        }}
      />
    </>
  )
}
