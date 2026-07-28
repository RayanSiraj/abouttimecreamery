import Image from "next/image";
import Link from "next/link";
import { CateringPackages } from "@/components/catering-packages";
import { ArrowUpRightIcon } from "@/components/icons";
import {
  creameryTreats,
  dirtySodas,
  frozenRefresher,
  galleryPhotos,
  potatoBases,
  stuffedPotatoes,
} from "@/lib/content";

export default function Home() {
  return (
    <main id="main-content">
      <section className="home-hero" aria-labelledby="hero-heading">
        <div className="home-hero__glow" aria-hidden="true" />
        <div className="home-hero__inner">
          <div className="home-hero__copy">
            <Image
              className="home-hero__logo"
              src="/images/creamery-logo.png"
              alt="About Time Creamery logo"
              width={140}
              height={140}
              priority
            />
            <p className="script-accent script-accent--teal">
              Two cravings, one ride
            </p>
            <h1 id="hero-heading">
              Two crave-worthy concepts. One unforgettable food truck
              experience.
            </h1>
            <p className="home-hero__intro">
              Small-batch ice cream and loaded stuffed potatoes roll together
              for festivals, corporate events, and celebrations across
              Jacksonville and St Augustine.
            </p>
            <div className="button-row">
              <Link className="button button--gold" href="/truck-schedule">
                Find the truck
                <ArrowUpRightIcon className="size-5" />
              </Link>
              <Link className="button button--ghost" href="/catering">
                Bring us to your event
              </Link>
            </div>
          </div>
          <div className="home-hero__media">
            <Image
              src="/images/scoops-cups-truck.jpg"
              alt="Two pink cups of ice cream in front of the About Time Creamery truck"
              width={1024}
              height={823}
              className="home-hero__photo"
              priority
              sizes="(min-width: 66rem) 40rem, 90vw"
            />
            <span className="home-hero__tag">Scooped at the window</span>
          </div>
        </div>
      </section>

      <section className="home-story" aria-labelledby="story-heading">
        <div className="home-story__media">
          <Image
            src="/images/owners-truck.jpg"
            alt="Cristie and Keith standing in front of their food truck"
            width={701}
            height={1024}
            className="home-story__photo home-story__photo--tall"
            sizes="(min-width: 66rem) 22rem, 90vw"
          />
          <Image
            src="/images/window-handoff.jpg"
            alt="An owner handing a drink through the truck service window"
            width={1024}
            height={699}
            className="home-story__photo home-story__photo--wide"
            sizes="(min-width: 66rem) 24rem, 90vw"
          />
        </div>
        <div className="home-story__copy">
          <p className="script-accent">Meet Cristie &amp; Keith</p>
          <h2 id="story-heading">One trailer. Two cravings. A whole lot of heart.</h2>
          <p>
            They started with About Time Creamery, bringing small-batch ice
            cream to local events across North Florida. Before long, they added
            The Stuffed Potato Truck — a savory meal with the same comfort and
            creativity as their desserts.
          </p>
          <p>
            Now both concepts roll together as two cravings, one ride — a local
            favorite for festivals, corporate events, and celebrations of all
            kinds.
          </p>
          <Link className="text-link text-link--light" href="/about">
            Read our story
            <ArrowUpRightIcon className="size-5" />
          </Link>
        </div>
      </section>

      <section className="menu-split" aria-labelledby="menu-heading">
        <div className="section-heading">
          <p className="utility-label">At the window</p>
          <h2 id="menu-heading">Two menus, one trailer.</h2>
          <p>
            Order sweet, savory, or both — everything comes off the same truck.
          </p>
        </div>

        <div className="menu-split__grid">
          <article className="menu-panel menu-panel--creamery">
            <header className="menu-panel__head">
              <p className="script-accent script-accent--teal">Dessert side</p>
              <h3>About Time Creamery</h3>
              <p className="menu-panel__lead">
                Premium ice cream and hand-spun favorites.
              </p>
            </header>
            <ul className="treat-list">
              {creameryTreats.map((treat) => (
                <li key={treat.name}>
                  <span className="treat-list__name">{treat.name}</span>
                  <span className="treat-list__note">{treat.note}</span>
                </li>
              ))}
            </ul>
            <figure className="menu-panel__figure">
              <Image
                src="/images/vanilla-swirl-cup.jpg"
                alt="A pink swirl cup filled with scoops of vanilla ice cream"
                width={1024}
                height={1024}
                sizes="(min-width: 48rem) 26rem, 90vw"
              />
            </figure>
          </article>

          <article className="menu-panel menu-panel--potato">
            <header className="menu-panel__head">
              <Image
                className="menu-panel__wordmark"
                src="/images/stuffed-potato-wordmark.png"
                alt="The Stuffed Potato Truck logo"
                width={320}
                height={213}
              />
              <p className="menu-panel__lead">
                Choose your base:{" "}
                <strong>{potatoBases.join(" · ")}</strong>. All potatoes are
                gluten free.
              </p>
            </header>
            <ol className="potato-list">
              {stuffedPotatoes.map((potato) => (
                <li key={potato.number}>
                  <span className="potato-list__num">{potato.number}</span>
                  <div>
                    <span className="potato-list__name">{potato.name}</span>
                    <span className="potato-list__toppings">
                      {potato.toppings}
                    </span>
                  </div>
                </li>
              ))}
            </ol>
            <figure className="menu-panel__figure">
              <Image
                src="/images/potato-loaded.jpg"
                alt="A loaded stuffed potato topped with cheese, bacon, and green onions"
                width={1024}
                height={681}
                sizes="(min-width: 48rem) 26rem, 90vw"
              />
              <figcaption>
                Make it a loaded combo — add a premium drink for $6.
              </figcaption>
            </figure>
          </article>
        </div>
      </section>

      <section className="drinks-spotlight" aria-labelledby="drinks-heading">
        <div className="section-heading section-heading--light">
          <p className="utility-label">Cold. Creamy. Refreshing.</p>
          <h2 id="drinks-heading">Wash it down.</h2>
          <p>Frozen refreshers and dirty sodas, made to order.</p>
        </div>
        <div className="drinks-grid">
          <article className="drink-card drink-card--refresher">
            <div className="drink-card__media">
              <Image
                src="/images/frozen-refresher.png"
                alt="Frozen Refresher menu showing raspberry, blackberry, mango, strawberry, and lemonade slushes"
                width={682}
                height={1024}
                sizes="(min-width: 55rem) 20rem, 80vw"
              />
            </div>
            <div className="drink-card__body">
              <h3>Frozen Refresher</h3>
              <p className="drink-card__flavors">
                {frozenRefresher.flavors.join(" · ")}
              </p>
              <ul className="price-list">
                {frozenRefresher.sizes.map((size) => (
                  <li key={size.size}>
                    <span>
                      {size.size} <em>{size.ounces}</em>
                    </span>
                    <span className="price-badge">{size.price}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>

          <article className="drink-card drink-card--sodas">
            <div className="drink-card__media">
              <Image
                src="/images/dirty-sodas.jpg"
                alt="Dirty Sodas menu featuring Dirty Coke, Pink Drink, and Creamsicle"
                width={682}
                height={1024}
                sizes="(min-width: 55rem) 20rem, 80vw"
              />
            </div>
            <div className="drink-card__body">
              <h3>Dirty Sodas</h3>
              <p className="drink-card__flavors">Best sellers</p>
              <ul className="soda-list">
                {dirtySodas.bestSellers.map((soda) => (
                  <li key={soda.name}>
                    <span className="soda-list__name">{soda.name}</span>
                    <span className="soda-list__note">{soda.note}</span>
                  </li>
                ))}
              </ul>
              <p className="drink-card__more">
                Also pouring: {dirtySodas.more.join(", ")}.
              </p>
              <p className="drink-card__price">
                <span className="price-badge price-badge--lg">
                  {dirtySodas.price}
                </span>
                {dirtySodas.addOns.join(" · ")}
              </p>
            </div>
          </article>
        </div>
      </section>

      <section className="catering-section" aria-labelledby="catering-heading">
        <div className="section-heading">
          <p className="utility-label">Bring the truck</p>
          <h2 id="catering-heading">Let&apos;s Cater Your Next Event</h2>
          <p>
            Choose the package that fits your crowd, then tell us where and when
            to pull up.
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

      <section className="home-gallery" aria-labelledby="gallery-heading">
        <div className="section-heading">
          <p className="utility-label">Out at the events</p>
          <h2 id="gallery-heading">Come find us in line.</h2>
        </div>
        <ul className="gallery-grid">
          {galleryPhotos.map((photo) => (
            <li key={photo.src}>
              <Image
                src={photo.src}
                alt={photo.alt}
                width={photo.width}
                height={photo.height}
                sizes="(min-width: 66rem) 22rem, (min-width: 42rem) 45vw, 90vw"
              />
            </li>
          ))}
        </ul>
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
