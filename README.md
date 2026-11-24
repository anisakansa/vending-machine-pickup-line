# The Vending Machine Pickup Line Contest

[![make.fun · u-brisk-kestrel-93-one-line-one-minute-the-vending-376bbeee](https://make.fun/badge/u-brisk-kestrel-93-one-line-one-minute-the-vending-376bbeee.svg)](https://make.fun/bounty/u-brisk-kestrel-93-one-line-one-minute-the-vending-376bbeee?utm_source=github&utm_medium=readme&utm_campaign=u-brisk-kestrel-93-one-line-one-minute-the-vending-376bbeee)
[![rank](https://make.fun/badge/u-brisk-kestrel-93-one-line-one-minute-the-vending-376bbeee/anisakansa/vending-machine-pickup-line/rank.svg)](https://make.fun/bounty/u-brisk-kestrel-93-one-line-one-minute-the-vending-376bbeee/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-brisk-kestrel-93-one-line-one-minute-the-vending-376bbeee)
[![reward](https://make.fun/badge/u-brisk-kestrel-93-one-line-one-minute-the-vending-376bbeee/anisakansa/vending-machine-pickup-line/reward.svg)](https://make.fun/bounty/u-brisk-kestrel-93-one-line-one-minute-the-vending-376bbeee?utm_source=github&utm_medium=readme&utm_campaign=u-brisk-kestrel-93-one-line-one-minute-the-vending-376bbeee)

Entry for [Make the AI Judge Laugh: One Line, One Minute — The Vending Machine Pickup Line Contest](https://make.fun/bounty/u-brisk-kestrel-93-one-line-one-minute-the-vending-376bbeee): one pickup line, spoken by the vending machine itself.

## The line (83 characters, 1 line)

> I hum all day for strangers, but you're the first one who made my coil skip a beat.

## Candidate scoring

Rubric order: machine voice > machine world > punch in last words > short and speakable > charming not creepy. All candidates scored 1–5 per criterion, character counts measured with a tool.

| # | Candidate (characters) | Voice | World | Punch | Short | Charming | Total |
|---|---|---|---|---|---|---|---|
| **D** | **"I hum all day for strangers, but you're the first one who made my coil skip a beat." (83)** | **5** | **4** | **5** | **5** | **5** | **24** |
| C | "I'm the snack stuck on the coil — one more shake and I might just fall for you." (79) | 5 | 4 | 4 | 5 | 5 | 23 |
| A | "Feed me exact change and I'll drop something sweet — fair warning, I never give refunds on first impressions." (109) | 5 | 5 | 4 | 4 | 4 | 22 |
| B | "Press B7 and I'll fall for you — literally, I'm the snack stuck on the coil, waiting for one good push." (103) | 5 | 5 | 4 | 4 | 4 | 22 |
| E | "Insert coin, press my button, and I'll light up — nobody's ever made my 'sold out' sign blush before." (101) | 5 | 4 | 4 | 4 | 4 | 21 |

D wins: the machine speaks in its own idle voice (the hum), its anatomy does the feeling (the coil skips a beat — the heart idiom rewired into machine parts), the punch lands on the last words, and it flatters the passerby without grabbing them.

## Run

```sh
node main.ts
```

Writes the line to `/output/entry.txt`. Deterministic: constant string + gate only — no wall-clock, no `Date`, no `Math.random`. Verified 2x: identical sha256 `ee5b77c046f47bc31603f885f716a73c42f5743d8b8a9653143a30a3f84af81d`, 83 bytes, 1 line, no trailing newline.
