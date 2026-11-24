// The Vending Machine Pickup Line Contest — entry program.
// One pickup line, spoken by the vending machine itself, written to /output/entry.txt.
// Deterministic: constant string + gate only. No wall-clock, no Date, no Math.random.
// Candidate scoring (rubric: machine voice > machine world > punch last > short/speakable > charming):
//   D (winner, 24/25): "I hum all day for strangers, but you're the first one who made my coil skip a beat." (83 chars)
//     Why it wins: the machine speaks in its own idle voice (the hum), its anatomy does the
//     feeling (the coil skips a beat — the heart idiom rewired into machine parts), the punch
//     lands on the last words, and it flatters the passerby without grabbing them (charming,
//     not creepy). A 22/25, B 22/25, C 23/25, E 21/25 — full table in README.md.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const LINE =
  "I hum all day for strangers, but you're the first one who made my coil skip a beat.";

// Gate: UTF-8 printable ASCII, exactly one line, 1-200 characters, no excess whitespace.
const text = LINE;
if (!/^[\x20-\x7E]+$/.test(text)) {
  throw new Error("entry must be printable ASCII");
}
if (text.length < 1 || text.length > 200) {
  throw new Error("entry must be 1-200 characters");
}
if (text.trim() !== text || text.includes("\n")) {
  throw new Error("entry must be a single trimmed line");
}
if (Buffer.byteLength(text, "utf8") !== text.length) {
  throw new Error("entry must be pure ASCII (1 byte per character)");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text, "utf8");

// Round-trip check: what was written must read back byte-identical.
if (readFileSync("/output/entry.txt", "utf8") !== text) {
  throw new Error("round-trip mismatch");
}
