// this page should be used only as a splash page to decide where a user should be navigated to
// when logged in --> to /heists
// when not logged in --> to /login

import { Clock8 } from "lucide-react";

export default function Home() {
  return (
    <div className="center-content">
      <div className="page-content">
        <h1>
          P<Clock8 className="logo" strokeWidth={2.75} />
          cket Heist
        </h1>
        <div>Your colleagues never saw it coming.</div>
        <p>
          Assign covert tasks to your colleagues, track their progress, and
          watch the chaos unfold — all under the guise of the normal workday.
        </p>
        <p>
          Whether you&apos;re swapping someone&apos;s keyboard keys, hiding a
          bluetooth speaker in the ceiling, or orchestrating the perfect fake
          meeting — Pocket Heist keeps your mischief organised and your alibi
          clean.
        </p>
      </div>
    </div>
  );
}
