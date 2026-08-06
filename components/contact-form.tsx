"use client";

import { FormEvent, useState } from "react";

type FormErrors = Partial<
  Record<"name" | "email" | "eventType" | "details", string>
>;

type FormStatus =
  | { kind: "idle"; message: "" }
  | { kind: "success" | "error"; message: string };

const initialStatus: FormStatus = { kind: "idle", message: "" };

export function ContactForm() {
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<FormStatus>(initialStatus);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const eventType = String(data.get("eventType") ?? "").trim();
    const details = String(data.get("details") ?? "").trim();
    const nextErrors: FormErrors = {};

    if (!name) {
      nextErrors.name = "Please enter your name.";
    }

    if (!email) {
      nextErrors.email = "Please enter your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      nextErrors.email = "Please enter a valid email address.";
    }

    if (!eventType) {
      nextErrors.eventType = "Please choose an event type.";
    }

    if (!details) {
      nextErrors.details = "Please tell us a few details about your event.";
    }

    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setStatus({
        kind: "error",
        message: "Please fix the highlighted fields and try again.",
      });
      return;
    }

    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${String(data.get("phone") ?? "").trim() || "Not provided"}`,
      `Event type: ${eventType}`,
      `Preferred date: ${String(data.get("date") ?? "").trim() || "Not provided"}`,
      `Location: ${String(data.get("location") ?? "").trim() || "Not provided"}`,
      `Estimated guest count: ${String(data.get("guests") ?? "").trim() || "Not provided"}`,
      "",
      "Event details:",
      details,
    ].join("\n");
    const mailto = new URL("mailto:Abouttimecreamery@gmail.com");
    mailto.searchParams.set("subject", `Food truck event request from ${name}`);
    mailto.searchParams.set("body", body);

    try {
      setStatus({
        kind: "success",
        message:
          "Your email app is opening with the event details filled in. Review the message, then send it.",
      });
      window.location.href = mailto.toString();
    } catch {
      setStatus({
        kind: "error",
        message:
          "We could not open your email app. Please email Abouttimecreamery@gmail.com directly.",
      });
    }
  }

  return (
    <form className="contact-form" noValidate onSubmit={handleSubmit}>
      <div className="contact-form__grid">
        <div className="form-field">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "name-error" : undefined}
          />
          {errors.name ? (
            <p className="form-error" id="name-error">
              {errors.name}
            </p>
          ) : null}
        </div>

        <div className="form-field">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
          />
          {errors.email ? (
            <p className="form-error" id="email-error">
              {errors.email}
            </p>
          ) : null}
        </div>

        <div className="form-field">
          <label htmlFor="phone">Phone (optional)</label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
          />
        </div>

        <div className="form-field">
          <label htmlFor="eventType">Event type</label>
          <select
            id="eventType"
            name="eventType"
            defaultValue=""
            aria-invalid={Boolean(errors.eventType)}
            aria-describedby={errors.eventType ? "event-type-error" : undefined}
          >
            <option value="" disabled>
              Choose one
            </option>
            <option value="Festival">Festival</option>
            <option value="Corporate event">Corporate event</option>
            <option value="Celebration">Celebration</option>
            <option value="Other">Other</option>
          </select>
          {errors.eventType ? (
            <p className="form-error" id="event-type-error">
              {errors.eventType}
            </p>
          ) : null}
        </div>

        <div className="form-field">
          <label htmlFor="date">Preferred date (optional)</label>
          <input id="date" name="date" type="date" />
        </div>

        <div className="form-field">
          <label htmlFor="guests">Estimated guest count (optional)</label>
          <input id="guests" name="guests" type="number" min="1" inputMode="numeric" />
        </div>

        <div className="form-field form-field--wide">
          <label htmlFor="location">Event location (optional)</label>
          <input
            id="location"
            name="location"
            type="text"
            autoComplete="street-address"
          />
        </div>

        <div className="form-field form-field--wide">
          <label htmlFor="details">Event details</label>
          <textarea
            id="details"
            name="details"
            rows={6}
            aria-invalid={Boolean(errors.details)}
            aria-describedby={errors.details ? "details-error" : undefined}
          />
          {errors.details ? (
            <p className="form-error" id="details-error">
              {errors.details}
            </p>
          ) : null}
        </div>
      </div>

      <div className="contact-form__submit">
        <button className="button button--gold" type="submit">
          Prepare email
        </button>
        <p className="contact-form__help">
          This opens your email app so you can review the request before
          sending.
        </p>
      </div>

      {status.kind !== "idle" ? (
        <p
          className={`form-status form-status--${status.kind}`}
          role={status.kind === "error" ? "alert" : "status"}
          aria-live="polite"
        >
          {status.message}
        </p>
      ) : null}
    </form>
  );
}
