// pages/progress.js
import Head from 'next/head'

export default function Progress() {
  // For now this is DUMMY data so you can see the layout.
  // Later this can be replaced with real data from trackers.
  const athleteName = 'Sample Athlete'
  const totalWorkouts = 4
  const completedWorkouts = [
    {
      id: 1,
      date: '2025-11-01',
      type: '30 Minute Workout',
      focus: 'Ball control, change of pace',
      selfRating: 4,
      notes: 'Felt more comfortable changing direction at speed.',
    },
    {
      id: 2,
      date: '2025-11-03',
      type: '7 Day Workout - Day 2',
      focus: 'Weak-hand control',
      selfRating: 3,
      notes: 'Left hand still shaky, but improving.',
    },
    {
      id: 3,
      date: '2025-11-06',
      type: '4 Week Workout - Week 1, Day 1',
      focus: 'Footwork and timing',
      selfRating: 5,
      notes: 'Great energy, drills felt smooth.',
    },
    {
      id: 4,
      date: '2025-11-09',
      type: '30 Minute Workout',
      focus: 'Game-speed combos',
      selfRating: 4,
      notes: 'Better pace, less wasted dribbles.',
    },
  ]

  const avgRating =
    completedWorkouts.reduce((sum, w) => sum + w.selfRating, 0) /
    completedWorkouts.length

  return (
    <>
      <Head>
        <title>My Progress — One Up Basketball</title>
        <meta
          name="description"
          content="View your workout history and ball-handling progress."
        />
        <link rel="stylesheet" href="/styles.css" />
      </Head>

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
          <a href="/">Home</a>
          <a href="/#workouts">Workouts</a>
          <a href="/#benefits">Benefits</a>
          <a href="/#articles">Articles</a>
          <a href="/#community" className="btn btn--sm">
            Community
          </a>
        </nav>
      </header>

      <main className="main" role="main">
        <section className="container section">
          <header className="section__header">
            <h1>My Progress</h1>
            <p className="muted">
              This is an example view of how athletes will see their ball-handling
              progress after submitting trackers.
            </p>
          </header>

          {/* SUMMARY CARDS */}
          <div className="progress-summary">
            <article className="card">
              <h3>Athlete</h3>
              <p className="progress-value">{athleteName}</p>
              <p className="tiny muted">
                In the real system, this would show the logged-in athlete.
              </p>
            </article>

            <article className="card">
              <h3>Workouts Completed</h3>
              <p className="progress-value">{totalWorkouts}</p>
              <p className="tiny muted">
                Number of trackers uploaded for this athlete.
              </p>
            </article>

            <article className="card">
              <h3>Average Self-Rating</h3>
              <p className="progress-value">
                {avgRating.toFixed(1)} / 5
              </p>
              <p className="tiny muted">
                Based on the self-rating they give after each workout.
              </p>
            </article>
          </div>
        </section>

        {/* WORKOUT HISTORY LIST */}
        <section className="container section">
          <header className="section__header">
            <h2>Workout History</h2>
            <p className="muted">
              Once athletes have 4+ trackers, each workout appears here with date,
              focus, and notes.
            </p>
          </header>

          <div className="progress-list">
            {completedWorkouts.map((w) => (
              <article key={w.id} className="card progress-item">
                <div className="progress-item__top">
                  <div>
                    <p className="tiny muted">
                      {new Date(w.date).toLocaleDateString()}
                    </p>
                    <h3>{w.type}</h3>
                  </div>
                  <span className="progress-tag">
                    Self-rating: {w.selfRating}/5
                  </span>
                </div>
                <p className="tiny muted">Focus: {w.focus}</p>
                <p className="progress-notes">{w.notes}</p>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer className="site-footer container" role="contentinfo">
        <nav aria-label="Footer">
          <a href="/#workouts">Workouts</a>
          <a href="/#benefits">Benefits</a>
          <a href="/#community">Community</a>
        </nav>
        <p className="tiny">
          © <span id="year"></span> One Up Basketball
        </p>
      </footer>

      {/* reuse same small script for mobile nav + footer year */}
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
