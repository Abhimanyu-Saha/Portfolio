---
title: One set of rules for every AI moment in the product
summary: An AI layer for our design system, so every AI feature across three products marks its output, accepts corrections and fails in the same way, instead of each team inventing its own.
company: LimeChat
role: Senior Product Designer
year: 2026
tags: [AI / LLM UX, Design systems, Systems design]
status: Spec on hold, pending two open findings
accent: '#e2e4ec'
order: 3
---

## The problem

AI had shipped, or was in spec, across all three of our products: reply suggestions in the Helpdesk CRM, auto-filled custom fields, prompt-to-flow in marketing, and the Agentic Bot on WhatsApp. Each one had separately worked out how to mark AI output, how a user accepts or corrects it, and what happens when it's wrong.

Design System V3 had tokens, type, spacing and elevation, but **nothing about AI**. So every new AI feature paid the same design cost again. The workaround was easy to spot in the spec trail: designers **copied the last AI feature that shipped**, by eye, and changed whatever didn't fit their case. Each surface held together on its own. Across surfaces, they drifted further apart with every release.

The trigger was a push from senior leadership for a coherent AI design direction. No outcome, metric or date came with that push, and I treated that as a risk from day one.

## My role

I authored the spec and own Design System V3, which this layer plugs into. I did the competitive study, defined the interaction patterns, ran the scoring for the key decision, and critiqued my own draft over three versions. My design manager reviews it. Product, frontend and AI/ML reviewers still need to be added.

## Being honest about the evidence

The most important part of this spec is what it **doesn't** claim.

- **The builder-side problem is well evidenced.** The design system files show there's no AI scope at all. Earlier specs each define their own AI marker, and none of them points to a shared pattern.
- **The user-side problem is assumed.** Nobody has checked whether agents or shoppers are actually confused by the inconsistency. I rated severity as *medium*, not high, because no data links AI presentation to CSAT, revenue or churn.
- **The compliance argument doesn't hold.** India's 2026 IT rules require labelling synthetic audio and video, not plain text. Our bot's output is text, so "regulation requires this" wasn't a reason I could honestly give.

> Severity: medium. Claiming high without evidence would be unearned.

## Key decisions

### 1. Sort patterns by how reversible the AI's action is

I didn't organise the language by feature or by model capability. It's organised around one question: **how reversible is what the AI just did?** That produced three patterns plus two modifiers:

- **Suggest / Draft:** the AI offers content the user can take, edit or ignore. The AI marker disappears as soon as the user takes ownership: on accept, or on their first keystroke in a draft.
- **Act:** the AI changes data or sends something. *Authorisation is shown before execution, never after.* A confirmation that arrives after the fact is a notification, not a gate.
- **Recover:** every failure state is designed before build. There's no dead end and no endless spinner. Partial data is shown with a plain caveat.
- **Explain** and **Recover** attach to the other patterns as modifiers rather than standing alone.

### 2. Tokens and components, not a style guide

I scored three options for how AI identity shows up in the product: tokenised identity built into the existing themes, a shared marker only, or no persistent marker at all.

The tokenised option scored **4.60** against **3.85** and **2.95**. The marker-only option fails where the problem actually starts: with nothing to bind to at build time, engineers keep hard-coding, and the copy-the-last-feature habit survives. I wrote a proper rebuttal to the no-marker option instead of dismissing it, because its argument is real: if you mark everything as AI, people learn to ignore the marker. My answer was that the marker isn't decoration. It's also the button that opens the explanation, so it has a job beyond labelling.

It's also reversible. If the marker turns out to be noise, we retune the tokens without rebuilding any components.

### 3. A value gate before any pattern

Before applying a pattern, a team has to pass one check: *if the task is deterministic, if the user already knows the answer, or if being wrong is expensive and hard to spot, don't use AI.* Having a pattern available isn't a reason to use it.

### 4. A disclosure floor brands can't switch off

On WhatsApp we don't control the rendering, so the conversational layer works through copy and message structure. The bot says it's automated once per session. It answers honestly if someone asks whether it's a bot. And **a request for a human is honoured the first time it's asked**, with no clarifying question and no retry loop. The competitive research showed this is exactly where consumer ratings fall apart, even for products that buyers rate highly.

Brands can configure anything above that floor, but not the floor itself.

### 5. Ship it as defaults in code, not a review gate

PMs are measured on shipping speed, and a review gate with no feature attached gets cut. So the language ships as component variants and tokens through the existing Token Studio → Style Dictionary → Mantine pipeline. Following the rules is the path of least resistance, not an extra step.

## Scope

The full version needs the model layer to report confidence and sources, plus a retrofit across three products with no feature attached. That's two dependencies most likely to sink it. The pragmatic v1 is **tokens plus three components** (AI label, AI content container with six states, and an accept/edit/reject/undo action group), launched alongside an already-planned build that needs them anyway. Showing confidence levels waits until the model can supply the data.

I stated the cost plainly: for about two quarters the product gets *more* inconsistent, as new, compliant surfaces sit next to old ones.

## Where it stands

The spec is **on hold, by its own review**. Two blocking findings are open: nobody knows how the sponsor will judge success, and the user-side problem has no evidence yet. The success metric is honestly labelled as a process metric (how many surfaces adopt it), not proof that anything improved for users.

The first two tasks are small: a half-day audit of how today's AI surfaces actually differ, and a 15-minute conversation with the sponsor.

## What I'd do differently

I'd run the audit and the sponsor conversation before writing an eleven-section spec, not list them as the first tasks inside it. Most of the spec's risk sits in two questions that together take less than a day to answer.
