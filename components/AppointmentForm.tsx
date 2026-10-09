"use client";

import { useState, type ChangeEvent } from "react";
import { ArrowRight } from "lucide-react";
import { services, wa } from "@/lib/data";
import { WhatsAppIcon } from "./Icon";

/** Builds a WhatsApp message from the form — nothing is sent to any server. */
export function AppointmentForm() {
  const [f, setF] = useState({ name: "", service: "", date: "", time: "", note: "" });
  const set = (k: keyof typeof f) => (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setF((s) => ({ ...s, [k]: e.target.value }));

  const href = wa(
    [
      "Hello Freshsmile Dental Hub, I want to book an appointment.",
      f.name && `Name: ${f.name}`,
      f.service && `Treatment: ${f.service}`,
      f.date && `Preferred date: ${f.date}`,
      f.time && `Preferred time: ${f.time}`,
      f.note && `Note: ${f.note}`,
    ]
      .filter(Boolean)
      .join("\n")
  );

  const input = "mt-2 w-full rounded-2xl border border-ink/15 bg-white px-5 py-4 text-base outline-none transition focus:border-aqua-500 focus:ring-4 focus:ring-aqua-200/60";

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        window.open(href, "_blank", "noopener,noreferrer");
      }}
      className="glass grid gap-6 rounded-[2.5rem] p-8 sm:grid-cols-2 sm:p-12"
    >
      <label className="block text-sm font-bold">
        Your name
        <input className={input} value={f.name} onChange={set("name")} placeholder="e.g. Abidemi" autoComplete="name" />
      </label>
      <label className="block text-sm font-bold">
        Treatment
        <select className={input} value={f.service} onChange={set("service")}>
          <option value="">Not sure yet</option>
          {services.map((s) => (
            <option key={s.slug} value={s.title}>{s.title}</option>
          ))}
        </select>
      </label>
      <label className="block text-sm font-bold">
        Preferred date
        <input type="date" className={input} value={f.date} onChange={set("date")} />
      </label>
      <label className="block text-sm font-bold">
        Preferred time
        <select className={input} value={f.time} onChange={set("time")}>
          <option value="">Any time</option>
          <option>Morning</option>
          <option>Afternoon</option>
          <option>Evening</option>
        </select>
      </label>
      <label className="block text-sm font-bold sm:col-span-2">
        Anything we should know? (optional)
        <textarea className={input} rows={3} value={f.note} onChange={set("note")} placeholder="Pain, nervousness, a child patient, an event coming up…" />
      </label>
      <div className="sm:col-span-2">
        <button type="submit" className="btn-primary w-full !py-5 !text-lg sm:w-auto sm:!px-12">
          <WhatsAppIcon className="h-5 w-5" /> Send Booking On WhatsApp <ArrowRight className="h-4 w-4" />
        </button>
        <p className="mt-4 text-sm text-ink/55">This opens WhatsApp with your details pre-filled — nothing is stored on this website. Appointment times are confirmed by our team.</p>
      </div>
    </form>
  );
}
