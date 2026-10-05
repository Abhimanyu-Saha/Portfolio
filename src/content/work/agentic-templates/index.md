---
title: Starting an AI agent from a template, not a blank page
summary: Templates for agents and tasks in our Agentic Studio, so a CSM or brand can launch a working AI agent without an engineer building it from scratch.
company: LimeChat
role: Senior Product Designer (co-designer)
year: 2026
tags: [AI / LLM UX, B2B SaaS, Systems design]
status: Final UI designed, spec in progress
accent: '#ece6dc'
order: 5
---

## The problem

Every new AI agent on our platform was built by hand. For each use case, engineering wrote the persona, wired up the tools, and set the guardrails from scratch. That caused four problems:

- **Slow delivery.** A new agent took engineering time, so new use cases waited in a queue.
- **Inconsistent behaviour.** Each agent was built a bit differently, so tone and safety rules varied from one to the next.
- **Expensive upgrades.** A platform improvement had to be applied to every custom agent by hand.
- **Blocked non-engineers.** CSMs and brands couldn't try out or launch an agent themselves. They had to file a request and wait.

Templates fix this by packaging an agent's persona, tool access, memory and guardrails into a reusable starting point anyone can deploy and adjust.

## My role

I co-designed this with my design manager, working with a PM and the frontend lead. Together we covered the flows, wireframes and final UI for where templates appear: when creating an agent, and when adding a task to an agent.

## Key decisions

### 1. Templates live where creation already happens

There's no separate template gallery to discover. Templates appear **at the moment of creation**: clicking *+ Add Agent* on the Agentic Studio home page opens a template modal, and *+ Tasks* inside an agent does the same for tasks and their flows. Someone who wants a template doesn't have to know a templates section exists.

### 2. Two levels: agents and tasks

A brand often wants most of a standard agent but not all of it. So templates work at two levels: a full **agent** (such as a sales agent), and individual **tasks** with their flows, which can be added to any agent. That lets a team start from a standard agent and swap one task, instead of choosing between all or nothing.

### 3. Cards that show what you're getting before you commit

Template cards show what each agent or task does, with more detail on hover, so the choice is made in the modal, not after creating something and opening it up to find out. The designs also cover the inactive agent state for an empty workspace, so a new account's first screen points straight to a template.

## How we'll know it worked

The goals we agreed were:

- **Time to value:** a new agent configured and deployed in minutes, not days.
- **No engineering needed:** a CSM or brand launches a complete agent with no engineering help.
- **Reuse:** most new deployments start from a template, not a custom build.

Baselines and tracking haven't been defined yet. They're the next step in the spec.

## What I'd do differently

I'd write down the success metrics and the competitive scan before the screens. The spec went from problem to UI quickly, and the measurement plan is still marked "to add". That makes it hard to show the impact later.
