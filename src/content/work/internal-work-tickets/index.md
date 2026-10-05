---
title: Handing off work without letting go of the customer
summary: Internal work tickets let support agents pull in finance, ops or logistics on a customer issue, without leaving the CRM, losing ownership, or exposing anything to the customer.
company: LimeChat
role: Senior Product Designer
year: 2026
tags: [B2B SaaS, Enterprise, Systems design]
status: Spec complete, pilot planned
accent: '#dfe8e2'
order: 1
---

## The problem

When a customer's issue needed another team (a refund approval from finance, say), our Helpdesk CRM gave agents two bad options. They could **reassign the whole ticket**, which meant giving up the customer conversation. Or they could **leave the CRM**: call finance, re-explain the case on Slack, park the ticket in "Pending" as a reminder to themselves, and chase until an answer came back by phone.

Either way, the dependency became invisible. Nobody owned it, nothing timed it, and the decision never made it back into the record.

The request came from a flagship enterprise client in financial services, whose cross-team follow-ups ran entirely on calls. Their words: *"the pipeline is broken."* But multi-department dependencies are normal in enterprise support, not one client's quirk, so I scoped this as a capability for the whole enterprise segment.

## My role

I owned the design end to end: problem framing, competitive research, flows, the full screen and state inventory, copy, and the engineering handoff. I worked with a PM, a design peer, the frontend lead and the client's CS owner.

## The insight that shaped everything

On paper, this had one user: the agent. In practice it had two, and **the second one never asked for it**.

The finance or ops person on the receiving end had a perfectly comfortable workflow: someone calls, they answer, done. Our feature asked them to log in to a CRM they'd never used. For them, we weren't improving on the status quo. We were adding friction to it.

Competitors' communities confirmed the risk. The most common failure of this pattern elsewhere wasn't a missing feature. It was internal tickets going into **a black hole**: the receiving team never saw the notification, threads went stale, and everyone drifted back to Slack.

So the real problem wasn't "there's no ticket object". It was "internal teams don't live in the CRM". That reframing decided most of what follows.

> The agent's journey breaks at tracking. The collaborator's journey breaks at receiving. Both have to work, or neither does.

## Key decisions

### 1. The collaborator's side should feel like replying to a message

The receiving side is deliberately stripped down: one ask, a short summary of the context, one comment box and one **Resolve** button. There's no inbox, no queue chrome and no customer composer. A collaborator can finish everything from the email link in a single visit: open, answer, resolve.

### 2. Notifications are on by default and can't be switched off

Every competitor that made notifications optional ended up with the black hole. In V1, notifications are on by default, admins can't disable them, and every email links straight into the ticket. If the login session has expired, the link goes through login and lands on the ticket itself, not the CRM home page.

### 3. A badge, not a status

Agents had been misusing "Pending" to mean "waiting on finance", so supervisors couldn't tell a customer wait from an internal one. The obvious fix was a new ticket status. I rejected it: tying internal work to ticket status is exactly what one competitor's users complain about most.

Instead, the parent ticket gets a separate **badge, shown in both the ticket header and the queue list**. Amber means internal work is in progress. Red means a blocking task is still open, or a deadline has been missed. If a ticket has several internal tasks, the badge shows the most urgent one. Putting the badge in the queue, not just on the ticket, is what makes misusing "Pending" unnecessary.

### 4. "Blocking" is off by default

Agents can mark a task as blocking, meaning the customer can't get an answer until it's done. None of the three major competitors offers this. I set it to off by default: if it were on, every task would be "blocking" and the label would mean nothing.

### 5. Share only what the agent picks

The task is shown to teams that were never meant to see customer data. So the agent chooses which details to include when creating it. The full chat history is never attached automatically, and notification emails carry no customer data at all. This is how the design meets purpose-limitation rules under India's DPDPA 2023 and GDPR.

### 6. A free role for the receiving team

If the receiving team needed paid seats, companies simply wouldn't set them up, and the feature would die exactly where adoption is weakest. I recommended a free **Collaborator** role, limited to internal tasks, with the feature priced at the plan level instead.

### 7. Leaving one question open on purpose

Should an agent be **blocked** from resolving a ticket while blocking internal work is still open? Competitors split three ways on this. Agents want the safeguard; CS worried tickets would get stuck.

I designed both versions: a strong warning the agent can override (with every override logged) and a hard block with a logged escape hatch. The override rate is tracked from day one, so the team can settle the question with real usage data. If agents override more than 70% of the time, the warning isn't doing its job.

## How we'll know it worked

The goal isn't how many internal tickets get created. Tickets that the receiving team ignores would still count, so that number would look good even if the feature failed.

The main measure is the **reassign-and-return rate**: how often a ticket gets handed to another team and then handed back, which is exactly the workaround we're replacing. The target is a 50% drop within 60 days. Alongside it:

- **Response time:** 80% or more of internal tasks get a first reply within the deadline.
- **Dead tasks:** fewer than 10% get no response at all after 72 hours. If the pilot shows more than that, the next priority becomes letting teams reply from Slack or Teams instead of the CRM.
- **Audit trail:** 98% or more of internal tasks are closed with a resolution note.

## Where it stands

The spec is complete and has been reviewed with stakeholders. Rollout is planned in stages: first our own support team, then one department at the client, then wider. Before engineering starts, I committed to three checks: a 15-minute walkthrough with the client's CS owner (*"Would their finance team open this email and act on it?"*), an engineering investigation into notifications on closed tickets, and pulling the current reassignment data to set a baseline.

## What I'd do differently

I'd test the riskiest assumption earlier. The whole design depends on the receiving team actually replying inside LimeChat. That's the assumption I'm least sure of, and so far it's backed only by design reasoning, not user evidence. The 15-minute walkthrough is the cheapest way to test it, and I should have run it before writing the detailed spec, not after.
