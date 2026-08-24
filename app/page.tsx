"use client";

import { useState } from "react";

const METRICS = [["Targets", "6", "sample scope"], ["Up", "5", "responding"], ["Down", "1", "needs a look"], ["Avg uptime", "99.2%", "sample window"]];
const ROWS = [{ name: "bookchaowalit.com", value: "200 · 120ms", status: "up", note: "responded" }, { name: "api.example", value: "timeout", status: "down", note: "no response" }];

export default function Home() {
  const [range, setRange] = useState("7d");
  return <main className="signal-room">
    <header className="signal-bar"><div className="signal-mark">B/09</div><div className="signal-name"><strong>SIGNAL WATCH</strong><span>ENDPOINT STATUS / SAMPLE BOARD</span></div><div className="signal-state"><i /> SAMPLE DATA · READ ONLY</div></header>
    <section className="signal-hero"><div><p className="signal-kicker">BOOKCHAOWALIT / OBSERVATORY LOG</p><h1>Watch the<br /><em>signal.</em></h1><p className="hero-copy">A quiet readout for whether a few important endpoints answer when called.</p></div><div className="beacon" aria-label="Sample beacon"><span className="beacon-beam" /><div className="beacon-tower"><i /><i /><i /></div><small>NOT LIVE<br />DEMO ONLY</small></div></section>
    <section className="signal-console" aria-label="Uptime monitor sample"><div className="console-top"><div><span className="signal-kicker">WATCH WINDOW</span><h2>How the line looked.</h2></div><div className="range-tabs" role="group" aria-label="Sample range">{["24h", "7d", "30d"].map((option) => <button key={option} className={range === option ? "active" : ""} onClick={() => setRange(option)}>{option}</button>)}</div></div>
      <div className="metric-row">{METRICS.map(([label, value, note]) => <div className="metric-cell" key={label}><span>{label}</span><strong>{value}</strong><small>{note} · {range}</small></div>)}</div>
      <div className="log-heading"><span>ENDPOINT LOG</span><span>{range} / SYNTHETIC CHECKS</span></div>
      <div className="endpoint-log">{ROWS.map((row, index) => <div className="endpoint-row" key={row.name}><span className="endpoint-number">{String(index + 1).padStart(2, "0")}</span><div className="endpoint-name"><strong>{row.name}</strong><span>{row.note}</span></div><b className="endpoint-value">{row.value}</b><span className={`endpoint-status ${row.status}`}>{row.status}</span></div>)}</div>
      <p className="honesty-note"><i /> The monitor is a visual sample only. No remote check is running behind this screen.</p>
    </section>
    <footer className="signal-footer"><span>BOOKCHAOWALIT / UPTIME MONITOR</span><span>SAMPLE METRICS · NO ALERT CHANNEL</span></footer>
  </main>;
}
