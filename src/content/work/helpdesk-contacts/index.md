---
title: A contact list you can read without clicking into it
summary: A redesign of the Helpdesk CRM's Contacts section, so agents and admins can find a customer and see their history in one click instead of three.
company: LimeChat
role: Product Designer
year: 2023
tags: [B2B SaaS, Interaction design, UX revamp]
status: Shipped
accent: '#e4e8ea'
order: 6
---

## The problem

Contacts is where a brand keeps every customer who has ever reached out: who they are, and every ticket they've raised. It's used for looking up a customer during a conversation, and for segmenting and targeting.

The old screen made both jobs harder than they needed to be:

1. **Details were hidden** until you clicked into a contact.
2. **Search took two steps:** find the contact, then open it to see anything useful.
3. **No filtering.**
4. **The edit form was too long**, a single long modal.
5. **Ticket history was thin.** "See more tickets" appeared after just one ticket.

## My role

I was the designer on this, working with the PM, as part of the wider Helpdesk revamp. I owned the layout, the right-hand panel behaviour, the table and the edit flow.

## Key decisions

### 1. Make the side panel permanent

Previously the right-hand panel appeared only after you clicked a contact. I made it **always present**, so selecting a row immediately shows that contact's details. That turned search-then-open into a single step.

### 2. Put the last three tickets in the panel

The panel shows contact details and the contact's **last three tickets**, and expands to show more of either. Three tickets is usually enough to recognise a repeat issue without leaving the page, and it fixes the "see more after one" problem.

### 3. A table that matches the rest of the revamp

The contacts table was rebuilt in the new revamp style, with sorting by name and by ticket count. Sorting by ticket count gives admins a quick way to find their most active customers.

### 4. Editing borrows a pattern people already know

The edit form was rebuilt to match the onboarding modal agents had already seen, instead of a one-off long form.

## Outcome

Shipped as part of the Helpdesk revamp, consistent with the other screens redesigned in the same effort.

## What I'd do differently

Filtering was one of the five problems I listed, and the final design added sorting but not a real filter. I'd either have scoped it in or explicitly marked it as deferred, so it didn't quietly drop out. I'd also have set a simple measure, such as clicks to view a contact's history, to show the before and after.
