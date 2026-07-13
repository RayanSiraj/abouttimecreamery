"use client";

import { type KeyboardEvent, useState } from "react";

type Craving = "sweet" | "savory";

const cravings = {
  sweet: {
    kicker: "The original concept",
    title: "About Time Creamery",
    description: "Ice cream and milkshakes.",
  },
  savory: {
    kicker: "The savory concept",
    title: "The STUFFED POTATO Truck",
    description: "Loaded baked potatoes, tater tots, and mashed potato bowls.",
  },
} satisfies Record<
  Craving,
  { kicker: string; title: string; description: string }
>;

export function CravingWindow() {
  const [activeCraving, setActiveCraving] = useState<Craving>("sweet");
  const active = cravings[activeCraving];

  function selectCraving(craving: Craving) {
    setActiveCraving(craving);
    document.getElementById(`${craving}-tab`)?.focus();
  }

  function handleTabKeyDown(
    event: KeyboardEvent<HTMLButtonElement>,
    craving: Craving,
  ) {
    if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
      event.preventDefault();
      selectCraving(craving === "sweet" ? "savory" : "sweet");
    } else if (event.key === "Home") {
      event.preventDefault();
      selectCraving("sweet");
    } else if (event.key === "End") {
      event.preventDefault();
      selectCraving("savory");
    }
  }

  return (
    <div className={`craving-window craving-window--${activeCraving}`}>
      <div className="craving-window__awning" aria-hidden="true">
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>
      <div className="craving-window__brand-row">
        <span>About Time Creamery</span>
        <span>The STUFFED POTATO Truck</span>
      </div>
      <div className="crossover-art">
        <svg
          viewBox="0 0 760 260"
          role="img"
          aria-labelledby="crossover-title crossover-description"
        >
          <title id="crossover-title">The Craving Crossover Window</title>
          <desc id="crossover-description">
            Strawberry ice cream melts from the sweet side of a food truck
            window and becomes steam rising from a stuffed potato on the savory
            side.
          </desc>
          <rect
            className="crossover-art__hatch"
            x="18"
            y="16"
            width="724"
            height="224"
            rx="24"
          />
          <path
            className="crossover-art__counter"
            d="M18 196h724v44H18z"
          />
          <g className="crossover-art__sweet">
            <path
              d="M126 160c-18-8-29-25-29-45 0-32 26-58 58-58 31 0 57 26 57 58 0 21-11 39-29 49l-11 45h-36l-10-49Z"
              fill="var(--strawberry-scoop)"
            />
            <path
              d="m137 165 17 44 18-44"
              fill="var(--vanilla-custard)"
              stroke="var(--truck-night)"
              strokeLinejoin="round"
              strokeWidth="8"
            />
            <path
              d="M116 113c14 5 26 3 36-7 12 9 25 11 40 5"
              fill="none"
              stroke="var(--paper-white)"
              strokeLinecap="round"
              strokeWidth="8"
            />
          </g>
          <path
            className="crossover-art__line"
            d="M198 134c63 2 76 44 139 43 61-1 79-45 134-45 40 0 60 23 93 24"
            fill="none"
            stroke="url(#crossover-gradient)"
            strokeLinecap="round"
            strokeWidth="16"
          />
          <g className="crossover-art__savory">
            <path
              d="M561 161c4-36 32-64 69-64 37 0 65 28 69 64-19 27-43 41-70 41-28 0-50-14-68-41Z"
              fill="var(--potato-gold)"
              stroke="var(--truck-night)"
              strokeLinejoin="round"
              strokeWidth="8"
            />
            <path
              d="M594 120c18 12 48 13 70 0-5 25-18 40-35 40-18 0-30-15-35-40Z"
              fill="var(--paper-white)"
            />
            <path
              d="M610 130c5 6 11 10 19 12m16-14-8 13"
              fill="none"
              stroke="var(--chive-green)"
              strokeLinecap="round"
              strokeWidth="7"
            />
            <path
              className="crossover-art__steam"
              d="M606 94c-17-19 18-25 1-46m39 48c17-19-17-27 1-48"
              fill="none"
              stroke="var(--chive-green)"
              strokeLinecap="round"
              strokeWidth="8"
            />
          </g>
          <defs>
            <linearGradient
              id="crossover-gradient"
              x1="198"
              y1="0"
              x2="564"
              y2="0"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="var(--strawberry-scoop)" />
              <stop offset=".5" stopColor="var(--creamery-blue)" />
              <stop offset="1" stopColor="var(--chive-green)" />
            </linearGradient>
          </defs>
        </svg>
        <p className="crossover-art__line-copy">
          Two cravings
          <strong>one ride</strong>
        </p>
      </div>
      <div className="craving-switcher">
        <div
          className="craving-switcher__tabs"
          role="tablist"
          aria-label="Choose a craving"
        >
          <button
            id="sweet-tab"
            type="button"
            role="tab"
            aria-selected={activeCraving === "sweet"}
            aria-controls="craving-panel"
            tabIndex={activeCraving === "sweet" ? 0 : -1}
            onClick={() => setActiveCraving("sweet")}
            onKeyDown={(event) => handleTabKeyDown(event, "sweet")}
          >
            Sweet
          </button>
          <button
            id="savory-tab"
            type="button"
            role="tab"
            aria-selected={activeCraving === "savory"}
            aria-controls="craving-panel"
            tabIndex={activeCraving === "savory" ? 0 : -1}
            onClick={() => setActiveCraving("savory")}
            onKeyDown={(event) => handleTabKeyDown(event, "savory")}
          >
            Savory
          </button>
        </div>
        <div
          className="craving-switcher__panel"
          id="craving-panel"
          role="tabpanel"
          aria-labelledby={`${activeCraving}-tab`}
          aria-live="polite"
        >
          <p className="utility-label">{active.kicker}</p>
          <h2>{active.title}</h2>
          <p>{active.description}</p>
        </div>
      </div>
      <div className="craving-window__wheels" aria-hidden="true">
        <span />
        <span />
      </div>
    </div>
  );
}
