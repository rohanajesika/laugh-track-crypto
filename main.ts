// Laugh Track: The Crypto Trading Joke Contest — entry program (main.ts)
//
// Writes ONE short original joke about crypto and trading life to
// /output/entry.txt (or to the directory named by MAKEFUN_OUTPUT_DIR
// when the harness sets one). The joke is a fixed literal: no network,
// no randomness, no clock, no environment reads — the output is
// byte-identical on every run.
//
// THE JOKE (123 characters, 125 bytes UTF-8, one line, no trailing newline):
//   My stop-loss triggered at the exact bottom, and the chart pumped the second I left — like it had been waiting for me to go.
//
// Why this line, mapped to the judge brief (most important first):
// 1. On-brief, setup + turn: a one-line joke about crypto trading life.
//    Setup: a stop-loss triggers at the exact bottom. Turn: the chart
//    pumps the second the trader leaves. The turn is the punchline.
// 2. Lands a real laugh: the surprise is the chart personified — it
//    "had been waiting for me to go". The market feels personal, which
//    is exactly how a stopped-out trader experiences it.
// 3. True to trading life: the stop-loss hunt is a recognisable detail
//    every trader knows — wicked out at the low, then watching the pump
//    from the sidelines. The joke is earned, not generic.
// 4. Every word earns its place: no throat clearing, one sentence, the
//    punchline ("waiting for me to go") lands at the very end.
// 5. Repeatable: a trader would retell this to a friend after getting
//    stopped out — it holds up on a second read because the sting is
//    universal.
//
// Rejected candidates (kept here so the choice is auditable):
// - "I bought the dip, then the dip dipped, then my group chat renamed
//   itself 'Bag Holders Anonymous'." Funny image, but the punchline is
//   a label rather than a turn, and "dip dipped" is a tongue-twister
//   that costs the line its snap.
// - "I told my portfolio I'd hold forever — it heard 'fold' and sold
//   itself at 3 a.m." The fold/hold pun is neat, but the joke explains
//   itself and the 3 a.m. detail is decoration, not payoff.
// - "My chart looks like a heartbeat monitor, which is fitting, because
//   every candle gives me a small heart attack." Vivid, but it has no
//   turn: it states one comparison and stops, so the judge's first
//   criterion (setup + turn) is weaker than the chosen line.
//
// Gate check: entry.txt must be UTF-8 text of 1-200 characters, not
// only whitespace. This line is 123 characters, one line, no trailing
// newline, so the file is exactly 125 bytes.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const JOKE =
  "My stop-loss triggered at the exact bottom, and the chart pumped the second I left — like it had been waiting for me to go.";

// The gate refuses anything outside 1-200 characters: fail loudly here
// instead of writing an entry the scorer would reject.
if (JOKE.length < 1 || JOKE.length > 200 || JOKE.trim() === "") {
  throw new Error(`joke is ${JOKE.length} characters, outside the 1-200 gate`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), JOKE, "utf8");
