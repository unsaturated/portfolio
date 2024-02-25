---
title: DH Bot
subtitle: A native iOS app written in Objective-C and designed in Storyboard UI. Built for the Dreamhost API.
layout: single.njk
image: portfolio-dh-bot.jpg
date: 2023-01-02
tags:
    - portfolio
    - objective-c
    - ios
    - rest
    - open source
metadata:
    'og:title': DH Bot
    'og:type': article
    'og:locale': en_US
    'og:description': A native iOS business app to control & monitor a DreamHost account. Storyboard UI and Objective-C consuming a REST API.
    'og:image': https://matt.unsaturated.com/img/portfolio-dh-bot.jpg
supplementary:
    - text: 12 minute read
      icon: bi bi-clock
    - text: GitHub Repository
      icon: bi bi-github
      link: https://github.com/unsaturated/DHBot
---

## Introduction
DH Bot was an iOS app first released on November 11, 2014. It was built to control the DreamHost API, which had very few app options on the App Store. The final release of the app was March 16, 2015. The DreamHost APIs have since been deprecated and removed from the DreamHost web control panel. Without an API to use the app itself became useless.

The following sections highlight the design, development, and attempts to monetize the app. The goal with DH Bot was not to develop "lean" and hope updates win over customers. Rather, the minimum viable product was very close to the final product. This was my second lesson in app economics—and likely my last.

## Icon
I probably fussed over the details and lived in Illustrator more than I should have. There's no traceable return on icon investment but App Store buyers are visual deciders. If the icon is no good then how can the app be good? My reasoning is that people _do_ judge a book by its cover.

The mascot for DH Bot is called "Treddy". An early version of Treddy had trouble incorporating the 'H' in DreamHost. The idea was there but the execution was way off. The final version achieves the same intent. Some highlights and lowlights were added, gradients adjusted, and it was ready to ship.

<div class="d-flex justify-content-center">
    <figure class="figure">
        {% image "dh-treddy-evolved.jpg",
        "Treddy, less evolved, and the final rendering",
        [372],
        "100vw",
        "figure-img img-fluid"
        %}
        <figcaption class="figure-caption text-center">Treddy, less evolved, and the final rendering</figcaption>
    </figure>
</div>

## Code
Everything in DH Bot is written in Objective-C using Foundation, UIKit, iAd, and StoreKit. Those frameworks along with [RestKit](https://github.com/RestKit/RestKit/) to interact with the DreamHost API create the foundation for DH Bot.

The DH Bot Xcode project uses [CocoaPods](http://cocoapods.org/) to manage dependencies. As of the final version, v1.1.0, there are 8474 lines of code _excluding_ dependencies.

Per my usual practice I document extensively even for my own applications. It's the professional thing to do. The developer you write doc for could be _yourself_. My rule of thumb is 1:2 ratio of doc to code.

<table class="table table-sm">
<thead>
<tr>
<th>Language</th>
<th class="text-right">Files</th>
<th class="text-right">Blank</th>
<th class="text-right">Comment</th>
<th class="text-right">Code</th>
</tr>
</thead>
<tbody>
<tr>
<td>Objective C</td>
<td class="text-right">136</td>
<td class="text-right">2455</td>
<td class="text-right">2245</td>
<td class="text-right">7430</td>
</tr>
<tr>
<td>C/C++ Header</td>
<td class="text-right">138</td>
<td class="text-right">785</td>
<td class="text-right">2501</td>
<td class="text-right">1044</td>
</tr>
<tr>
<td>Sum</td>
<td class="text-right">274</td>
<td class="text-right">3240</td>
<td class="text-right">4746</td>
<td class="text-right">8474</td>
</tr>
</tbody>
</table>

The final version of the app supported most of the DreamHost API.
  * Overall Status (`account-status`)
  * Domain Usage (`account-domain_usage`)
  * User Usage (`account-user_usage`)
  * SSH keys (`account-list_keys`)
  * Lists (`announcement_list-list_lists`)
  * DNS Records (`dns-list_records`)
  * Domains Hosted (`domain-list_domains`)
  * Domain Registered (`domain-list_registrations`)
  * Domain Availability check (`domain-registration_available`)
  * Jabber Users (`jabber-list_users`)
  * Mail Filter list (`mail-list_filters`)
  * MySQL Databases (`mysql-list_dbs`)
  * MySQL Hostnames (`mysql-list_hostnames`)
  * MySQL Users (`mysql-list_users`)
  * VPS Servers (`dreamhost_ps-list_ps`)
  * VPS Reboot (`dreamhost_ps-reboot`)
  * Users (`user-list_users_no_pw`)

## User Interface
Native UI development is crude and severely lagging web development stacks. It's frustrating. Internationalizing is easy for strings in _code_ but I hit some bumps when those strings were in Storyboards. I couldn't do everything in the Storyboard so eventually added custom cells via XIB files.

An elaborate storyboard connects the view-controllers together. You can see how most view-controllers branch from the same area. The flow is generally: [api key] ➞ [list of commands] ➞ [command results] ➞ [result details].

<div class="d-flex justify-content-center">
        <figure class="figure">
            {% image "dhbot-storyboard.jpg",
            "DH Bot Storyboard",
            [418, 837, null],
            "418px, 837px, 100vw",
            "figure-img img-fluid"
            %}
            <figcaption class="figure-caption text-center">DH Bot Storyboard</figcaption>
        </figure>
</div>

 The process to update the translated `.strings` file after changing the base Storyboard is awkward and poorly integrated with Xcode. DH Bot had a rough translation started in French but nothing officially supported in iTunes.

## Onboarding
The onboarding experience can be an interactive tour or a set of slides. Onboarding is another way to bridge the gap between developers and users. I feel it should plainly state:

  * The purpose of the app (its primary function),
  * What's needed (an account, e-mail, etc), and
  * Any costs or expenses associated with use.

In other words: **no surprises**. The app description should include all those points. However, this ignores the expectations of the platform. Users expect to download, install, and run in less than a minute. At best, app descriptions are scanned by the customer. My expectation is that the first paragraph is read and nothing more.

Here's a sample of the onboarding screens from DH Bot. They're displayed when the app is first started and on subsequent updates.

<div class="d-flex justify-content-center">
        <div class="col-sm-4 p-2">
            <figure class="figure">
                {% image "dhbot-onboard1.jpg",
                "Onboarding Slide 1: DH Bot is a DreamHost sidekick. Manage users, domains, databases, check your account balance and more.",
                [320, 640, null],
                "320px, 640px, 100vw",
                "figure-img img-fluid border secondary-border-subtle"
                %}
                <figcaption class="figure-caption text-center">Slide 1 featuring "Treddy"</figcaption>
            </figure>
        </div>
        <div class="col-sm-4 p-2">
            <figure class="figure">
                {% image "dhbot-onboard2.jpg",
                "Onboarding Slide 2: Unofficial app, officially great hosting. You'll need a DreamHost account to get started. They provide great service and DH Bot is the unofficial app that complements it.",
                [320, 640, null],
                "320px, 640px, 100vw",
                "figure-img img-fluid border secondary-border-subtle"
                %}
                <figcaption class="figure-caption text-center">Slide 2 "Unofficial"</figcaption>
            </figure>
        </div>
        <div class="col-md-4 p-2">
            <figure class="figure">
                {% image "dhbot-onboard3.jpg",
                "Onboarding Slide 3: You'll need a DreamHost API key. Create one with the DreamHost web panel. Come back and use it with DH Bot.",
                [320, 640, null],
                "320px, 640px, 100vw",
                "figure-img img-fluid border secondary-border-subtle"
                %}
                <figcaption class="figure-caption text-center">Slide 3 - Get an API key</figcaption>
            </figure>
        </div>
    </div>

<div class="d-flex justify-content-center">
        <div class="col-sm-4 p-2">
            <figure class="figure">
                {% image "dhbot-onboard4.jpg",
                "Onboarding Slide 4: DH Bot securely stores your keys. Your key and command information is stored by DH Bot in local, encrpyted files. All network traffic with DreamHost uses HTTPS.",
                [320, 640, null],
                "320px, 640px, 100vw",
                "figure-img img-fluid border secondary-border-subtle"
                %}
                <figcaption class="figure-caption text-center">Onboarding Slide 4 - Security</figcaption>
            </figure>
        </div>
        <div class="col-sm-4 p-2">
            <figure class="figure">
                {% image "dhbot-onboard5.jpg",
                "Onboarding Slide 5: Ad supported, no in-app purchases. DH Bot is free to use. There's no premium version of the application or locked out features. That's all. You're ready to go!",
                [320, 640, null],
                "320px, 640px, 100vw",
                "figure-img img-fluid border secondary-border-subtle"
                %}
                <figcaption class="figure-caption text-center">Onboarding Slide 6 - Ready</figcaption>
            </figure>
        </div>
</div>


## Monetizing
The store concept of _buy once, update forever_ doesn't align with the goals of an independent developer concerned with cash flow. It's an ongoing effort to support OS updates, new phones, changing APIs, and other forces outside their control. The number of DreamHost customers can only grow at a moderate pace over time, thus, recurring revenue from _existing customers_ is the key.

### Attempt 1: In-App Purchases
Now we come to the point. The developer seeks to make a profit from his hours, days, weeks, and months of labor. Points are the DH Bot currency of commands. To execute an API command you need to spend one or more points. DH Bot setup the following in-app purchases:

  * `  400` points $0.99
  * `  800` points $1.99
  * `1,400` points $2.99
  * `2,200` points $3.99
  * `3,000` points $4.99

Each API command has an associated point value. Most getter commands cost one point but setters are two points or more. Additional points are available via the App Store. Command point values are prominently displayed. Every user starts with free points to try the app.

Despite these efforts it was clear the business model was flawed so after a few months it was abondoned.

### Attempt 2: Ads
Points and in-app purchases were removed. The market pushed DH Bot in a direction I didn't anticipate but one that I now accept as the default: ad-supported or free. Unfortunately, click-through rates are low and the app itself is built to do one or two things quickly.

Ad-supported business models are based upon the [attention economy](https://en.wikipedia.org/wiki/Attention_economy) which yields a completely different product. DH Bot couldn't build a large enough user base. The generated ad revenue had zero financial materiality. The economics of app development are still evolving but it's clear an app like DH Bot was one of many in the [long tail](https://en.wikipedia.org/wiki/Long_tail).

Banner ads and—even worse—interstitial ads already look dated and unsightly. Users expect *integrated* ads that flow through the app, much like social media apps inject ads between updates on your timeline. Whether uses like them is another question.

## Retirement
DH Bot is no longer on the App Store but I occasionally reference its codebase. If I need a reminder how I implemented something say, with StoreKit, then I take a peek at the code *and* comments.

As a longtime DreamHost customer I was writing the app for myself first but hoped others would discover its value. I also discovered the risk in developing a product based upon a service I didn't control. There's no guarantee the terms of that service will remain compatible with your business, or that the service itself won't be shut down.

Plan your apps accordingly.
