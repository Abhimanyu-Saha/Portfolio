---
title: An AI action an agent can actually trust
summary: Support agents type one instruction ("tag this RTO and escalate to L2") and the CRM does it. The hard part wasn't the AI. It was earning trust from people who'd learned not to fully trust automation.
company: LimeChat
role: Senior Product Designer
year: 2026
tags: [AI / LLM UX, B2B SaaS, Interaction design]
status: Draft spec, in review
accent: '#e9e2d8'
order: 2
---

## The problem

Handling a support ticket in our Helpdesk CRM means a run of small, separate actions: pick an assignee from one dropdown, a tag from another, then click escalate or resolve. One decision takes several clicks across several controls.

Automation is meant to shortcut this, and that's where I found the more interesting problem. **Agents and admins were re-applying automated actions by hand, "just as protection".** Automated tag and assignment changes didn't always behave predictably, so people had quietly started checking up on them.

So the friction wasn't only the number of clicks. It was **trust**. Any new shortcut had to clear a higher bar than the one it was replacing.

## My role

Sole designer, from problem framing through competitive research, scoping, flows, states, copy and engineering handoff. I wrote the spec and then reviewed it critically myself twice before it went to stakeholders.

## What the market does, and doesn't

I looked closely at five competitors: Freshdesk, Intercom, Zendesk, Gupshup and Yellow.ai. All five let an **admin** write natural-language automations in advance. **None of the five** lets an agent type a live instruction that runs on the ticket in front of them. That includes the one whose marketing promises "authority to act".

Two lessons came out of it:

- **Match the convention.** Every vendor puts an approval step between the AI and the action. Agents expect "it suggests, I approve", not "I type, it happens".
- **Avoid the failure mode.** The most-cited complaint about one competitor's assistant is being *confidently wrong*. A wrong ticket change is worse than a slow one.

## Key decisions

### 1. Show exactly what will change, before it changes

Before anything runs, the agent sees exactly what will change, field by field, with the old value next to the new one:

> **Tag:** — → RTO · **Status:** Open → Escalated. *Apply this?*

It never just repeats back what the agent typed. Showing exactly what will change addresses the trust problem head-on. It also bridges the "suggest, then approve" habit agents bring with them and the new "type, then execute" interaction.

### 2. Ask, don't guess

If an instruction could mean two things, the system asks a short clarifying question inline: *"Which tag did you mean, RTO or Return Requested?"* If a name or tag doesn't exist, it says so plainly instead of quietly choosing the closest match.

### 3. Start with the two lowest-risk actions

The full vision covers assign, tag, escalate and resolve, across many tickets at once. For V1 I scoped down to **tag and escalate, on one ticket at a time**. Assignment was where the reliability problems lived, and a brand-new, trust-critical feature shouldn't take on old bugs. Assign and resolve come in once engineering confirms that code is stable.

### 4. A prompt can't do anything the agent couldn't already do

Each request is checked against the agent's existing permissions **before** the preview appears. If an agent can't escalate to a restricted queue by clicking, they can't do it by typing either.

### 5. Errors that tell the truth

> *"Couldn't apply this. Nothing was changed. Try again or use the tag/escalate controls."*

The message says what happened, reassures the agent there's no half-finished change, and points to the manual controls, which stay available at all times. It never shows backend error text to the agent.

## The most useful thing I wrote was a finding against my own spec

In my second round of reviewing my own spec, I found a hole in its central argument. V1 was limited to tag and escalate *to avoid* the shaky assignment logic. But I had never checked what "escalate" actually does behind the scenes. **If escalating means routing a ticket to an L2 agent, it probably uses that same assignment logic**, and the "safe" V1 carries exactly the risk it was designed to avoid.

I marked this as the top blocker, ahead of everything else, along with a second one: the confirm step assumes the system can show the result *before* running the action. If it can only report afterwards, the core interaction has to be redesigned around "do it, then offer undo". That would be a different UX, not a copy change.

It would have been easy to leave both as routine open questions. They're not. Either one can change the design.

## How we'll know it worked

- **Adoption:** the share of tag and escalate actions done by prompt instead of through the controls. Tracking for this has to ship with V1, because there's no baseline today.
- **Trust:** fewer agents re-applying changes by hand after automation has run.
- **Safety, the one that can stop the rollout:** how often the prompt does something the agent didn't intend, measured by undos and corrections. The target is effectively zero. Any wrong action in the pilot stops the wider rollout.

## Where it stands

It's a draft spec, now out for review with product, engineering, AI infrastructure and customer success. The two blocking questions go to engineering before any Figma work begins on the preview screen.

## What I'd do differently

I'd have asked engineering what "escalate" actually does on day one. The whole scoping argument depended on one fact I hadn't checked. Catching that in my own review was good; not needing to catch it would have been better.
