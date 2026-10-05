---
title: Getting agents to tag tickets without asking them to try harder
summary: AI-suggested tags in the Helpdesk CRM, placed at the three moments an agent is most likely to skip tagging, so brands get usable data on what their customers are actually contacting them about.
company: LimeChat
role: Product Designer
year: 2024
tags: [AI / LLM UX, B2B SaaS, Interaction design]
status: Shipped
accent: '#e6ece0'
order: 4
---

## The problem

Tags are how a brand finds out what's going wrong with its product. If tickets aren't tagged, a brand can't see that half this week's complaints are about late deliveries.

Agents weren't tagging consistently, and the reason wasn't laziness. The tag list was **huge**:

- **New agents** faced a learning curve just to know which tag fits which case, so they often skipped it.
- **Experienced agents** knew the tags, but going through a long list for every ticket, with a queue waiting, was slow enough that it got dropped.

The hypothesis: most support tickets fall into a handful of recurring categories, so a model could learn to predict the right tags and suggest them while the agent works.

## My role

I owned the design: framing the problem, mapping where in the agent's workflow a nudge would land, the interaction model, wireframes and the final prototype.

## The insight

Better tag suggestions alone wouldn't fix this. Tagging gets skipped at specific **moments**, so the question was *where* to put the suggestion, not just *what* to suggest. I identified three:

1. **Right after the AI summary is generated.** The agent has just read a condensed version of the conversation, so it's the moment they best understand what the ticket is about.
2. **Right after the ticket is resolved.** This is the last chance before the data is lost. The nudge only appears if **no tags were added**. Agents who already tagged never see it.
3. **Always available.** An AI tags button sits in the conversation and customer tag sections of the right-hand panel, for agents who want suggestions at any time.

## Key decisions

### 1. One modal, three entry points

All three moments open **the same modal**. Agents learn it once and it works the same way everywhere. Suggested conversation tags and customer tags are listed following the brand's own tag hierarchy, so suggestions look like the structure agents already know.

### 2. The agent stays in charge, with a fast path when the AI is right

The agent ticks the suggestions that apply and clicks **Apply selected**. When the suggestions are clearly right, **Apply all** does it in one click. Nothing is applied without the agent's action. The AI suggests; the agent decides.

### 3. Nudge only when it matters

The after-resolve prompt is conditional on purpose. A prompt that fires on every ticket teaches people to dismiss it without reading. Firing only when tags are missing keeps it rare enough to be noticed.

> Maximum effect with minimum interruption. That was the whole design goal in one line.

## Outcome

The feature shipped in the Helpdesk CRM.

## What I'd do differently

I'd define the success measure before designing, not after. The spec never set a baseline tagging rate or a target, so I can say the feature shipped but not how much it moved tag coverage. "Share of resolved tickets with at least one tag" would have been easy to track from day one.
