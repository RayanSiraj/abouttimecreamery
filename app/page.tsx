import Link from "next/link";
import { CateringPackages } from "@/components/catering-packages";
import { CravingWindow } from "@/components/craving-window";
import { ArrowUpRightIcon } from "@/components/icons";

export default function Home() {
  return (
    <main id="main-content">
      <section className="hero">
        <div className="hero__copy">
          <p className="eyebrow">
            <span>Jacksonville</span>
            <span aria-hidden="true">+</span>
            <span>St Augustine</span>
          </p>
          <h1>
            Two crave-worthy concepts. One unforgettable food truck
            experience.
          </h1>
          <p className="hero__intro">
            Small-batch sweets and loaded comfort food roll together for
            festivals, corporate events, and celebrations.
          </p>
          <div className="button-row">
            <Link className="button button--gold" href="/truck-schedule">
              Find the truck
              <ArrowUpRightIcon className="size-5" />
            </Link>
            <Link className="button button--paper" href="/catering">
              Bring us to your event
            </Link>
          </div>
        </div>
        <CravingWindow />
      </section>

      <section className="menu-section" aria-labelledby="menu-heading">
        <div className="section-heading">
          <p className="utility-label">At the window</p>
          <h2 id="menu-heading">Pick a side. Or don&apos;t.</h2>
          <p>
            Sweet and savory share one counter, so the whole group can order
            what they came hungry for.
          </p>
        </div>
        <div className="dual-menu-board">
          <article className="dual-menu-board__side dual-menu-board__side--sweet">
            <p className="utility-label">Sweet</p>
            <h3>About Time Creamery</h3>
            <ul>
              <li>Ice cream</li>
              <li>Milkshakes</li>
            </ul>
          </article>
          <div className="dual-menu-board__join" aria-hidden="true">
            <span>Two cravings</span>
            <strong>one ride</strong>
          </div>
          <article className="dual-menu-board__side dual-menu-board__side--savory">
            <p className="utility-label">Savory</p>
            <h3>The STUFFED POTATO Truck</h3>
            <p>Loaded baked potatoes, tater tots, and mashed potatoes.</p>
            <p className="dual-menu-board__toppings">
              Toppings include bacon cheeseburger, chicken bacon ranch, chili
              cheese, taco, and BBQ pulled pork.
            </p>
          </article>
          <p className="dual-menu-board__note">
            Current menu images and pricing will be added when supplied by the
            client.
          </p>
        </div>
      </section>

      <section className="origin-section" aria-labelledby="origin-heading">
        <div className="section-heading section-heading--light">
          <p className="utility-label">How we got rolling</p>
          <h2 id="origin-heading">One truck grew to hold both cravings.</h2>
        </div>
        <ol className="origin-path">
          <li>
            <span className="origin-path__step">01</span>
            <div>
              <h3>Small-batch beginnings</h3>
              <p>
                About Time Creamery started by bringing small-batch ice cream
                to local events across North Florida.
              </p>
            </div>
          </li>
          <li>
            <span className="origin-path__step">02</span>
            <div>
              <h3>Something savory</h3>
              <p>
                The Stuffed Potato Truck added a meal with the same comfort and
                creativity as the desserts.
              </p>
            </div>
          </li>
          <li>
            <span className="origin-path__step">03</span>
            <div>
              <h3>Two cravings, one ride</h3>
              <p>
                Now both concepts roll together for festivals, corporate
                events, and celebrations of all kinds.
              </p>
            </div>
          </li>
        </ol>
        <Link className="text-link text-link--light" href="/about">
          Meet Cristie and Keith
          <ArrowUpRightIcon className="size-5" />
        </Link>
      </section>

      <section className="catering-section" aria-labelledby="catering-heading">
        <div className="section-heading">
          <p className="utility-label">Bring the truck</p>
          <h2 id="catering-heading">Let&apos;s Cater Your Next Event</h2>
          <p>
            Choose the package that fits your crowd, then tell us where and
            when to pull up.
          </p>
        </div>
        <CateringPackages />
        <div className="catering-section__action">
          <Link className="button button--gold" href="/catering">
            See catering details
            <ArrowUpRightIcon className="size-5" />
          </Link>
        </div>
      </section>

      <section className="event-banner" aria-labelledby="event-heading">
        <div>
          <p className="utility-label">Built for a crowd</p>
          <h2 id="event-heading">
            Festivals <span>/</span> Corporate events <span>/</span>{" "}
            Celebrations
          </h2>
        </div>
        <Link className="button button--paper" href="/contact">
          Request a date
          <ArrowUpRightIcon className="size-5" />
        </Link>
      </section>

      <section className="home-contact" aria-labelledby="home-contact-heading">
        <p className="utility-label">Catch us or call us in</p>
        <h2 id="home-contact-heading">Your next craving has a route.</h2>
        <div className="home-contact__links">
          <Link href="/truck-schedule">
            <span>Find the next public stop</span>
            <ArrowUpRightIcon className="size-6" />
          </Link>
          <Link href="/contact">
            <span>Plan your event</span>
            <ArrowUpRightIcon className="size-6" />
          </Link>
        </div>
      </section>
    </main>
  );
}
