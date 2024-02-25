---
title: Elevator CEO
subtitle: A native iOS game written in Objective-C using the open source Cocos2D engine; translated to 8 languages.
layout: single.njk
image: portfolio-elevator-ceo.jpg
date: 2023-01-03
tags:
    - portfolio
    - objective-c
    - ios
    - open source
metadata:
    'og:title': Elevator CEO
    'og:type': article
    'og:locale': en_US
    'og:description': A native iOS game written in Objective-C using the open source Cocos2D engine.
    'og:image': https://matt.unsaturated.com/img/portfolio-elevator-ceo.jpg
supplementary:
    - text: 12 minute read
      icon: bi bi-clock
    - text: GitHub Repository
      icon: bi bi-github
      link: https://github.com/unsaturated/ElevatorCEO
---

## Introduction
Elevator CEO was an iOS game first published to the App Store on October 1, 2012. The last release of the game was published on January 9, 2015. Although it was downloaded thousands of times, I decided to cancel my App Developer membership, thereby ending its tenure on the App Store on April 28, 2016.

This was the first game I designed and coded. The initial time investment did not pay off. However, the value of the lessons learned in design, development, and getting schooled in app store economics are incalculable. The journey from sketchbook drawings to final release are detailed below.

## Game Summary
*From the App Store description…*

Take your career to the next level with the Elevator CEO. Transfer all the passengers from your blue elevator using the green elevators. You have limited synergy to move up and down. Be careful and choose the right combination of green elevators. The CEO arrives in a red elevator but can only bring one person up to the next level. Your career depends on it so make your move! Look for the treasure chests to get a mystery prize. Sometimes getting to the next level means taking risks.

  * Game Center integration with leader boards
  * There's no time limit
  * Use the in-game tutorial for help
  * The top three scores are recorded offline
  * Controls can be switched to the left or right side
  * Tested and developed for iOS 7
  * Free to play!
  * Remove advertisements with in-app purchase

Think you know everything about the Elevator CEO? Maybe you should try to decode his secret message on the home screen. Good luck!

  * **Simple Controls.** Controls placed in the best location mean your thumbs don't cover the action.
  * **International.** Game text in English, Spanish, French, Dutch, German, Simplified Chinese, Italian, or Danish.
  * **All Thumbs.** Left and right thumbs are invited to play. Switching control sides is easy.

<div class="d-flex justify-content-center">
        <div class="col-sm-4 p-2">
            <figure class="figure">
                {% image "0-home.jpg",
                "Home screen and menu",
                [320, 640, null],
                "320px, 640px, 100vw",
                "figure-img img-fluid border secondary-border-subtle"
                %}
                <figcaption class="figure-caption text-center">Home screen and menu</figcaption>
            </figure>
        </div>
        <div class="col-sm-4 p-2">
            <figure class="figure">
                {% image "3-treasure.jpg",
                "Game area for left-handed players",
                [320, 640, null],
                "320px, 640px, 100vw",
                "figure-img img-fluid border secondary-border-subtle"
                %}
                <figcaption class="figure-caption text-center">Game area for left-handed players</figcaption>
            </figure>
        </div>
        <div class="col-sm-4 p-2">
            <figure class="figure">
                {% image "4-scores.jpg",
                "Top 3 scores",
                [320, 640, null],
                "320px, 640px, 100vw",
                "figure-img img-fluid border secondary-border-subtle"
                %}
                <figcaption class="figure-caption text-center">Top 3 scores</figcaption>
            </figure>
        </div>
    </div>

## Sketches
I started sketching game ideas in May 2010. Several weeks later I had over 60 pages of various drawings, notes, and flow charts. I only used a pen and grid paper. The ideas eventually converged around an elevator-based game.

<div class="d-flex justify-content-center">
  <div class="col-sm-2"></div>
  <div class="col-sm-4 p-2">
    <figure class="figure">
        {% image "sketch-board-1.jpg",
        "Earliest sketches of play area",
        [320, 640, null],
        "320px, 640px, 100vw",
        "figure-img img-fluid border secondary-border-subtle"
        %}
        <figcaption class="figure-caption text-center">Earliest sketches of play area</figcaption>
    </figure>
  </div>
  <div class="col-sm-4 p-2">
    <figure class="figure">
        {% image "sketch-controls-1.jpg",
        "Evolution of vertical controls",
        [320, 640, null],
        "320px, 640px, 100vw",
        "figure-img img-fluid border secondary-border-subtle"
        %}
        <figcaption class="figure-caption text-center">Evolution of vertical controls</figcaption>
    </figure>
  </div>
  <div class="col-sm-2"></div>
</div>

All of the game graphics were created in Illustrator. Most of my inspiration came from [Small World](http://www.lostgarden.com/2009/03/dancs-miraculously-flexible-game.html) graphics by Daniel Cook. Although I never throw out sketches I'm exactly the opposite with Illustrator. I'll clone a layer, refine it, and delete the old layer if its replacement is better.

<div class="d-flex justify-content-center">
    <div class="col-sm-6 p-2">
    <figure>
        {% image "controls-evolution.jpg",
        "Evolution of game control graphics",
        [439, 879, null],
        "439px, 879px, 100vw",
        "figure-img img-fluid"
        %}
        <figcaption class="figure-caption text-center">Evolution of game control graphics</figcaption>
    </figure>
    </div>
</div>

<div class="d-flex justify-content-center">
    <figure>
        <video controls class="ratio ratio-16x9 p-3">
        <source src="elevatorceo-vid.mp4" 
            type="video/mp4" 
            alt="Screencast from iOS 5 simulator"
            />
        </video>
        <figcaption class="figure-caption text-center">This video shows an early version running on the iOS 5 simulator.</figcaption>
    </figure>
</div>

A few tips from my experience:
 * Mock up a screen and download it to your device to ensure controls are appropriate for a touch interface.
 * Create frames and swipe from one image to the next if primitive animations are needed.
 * Good artists copy, great artists steal. If you're not good enough to create something from nothing then _start with something_.

## Code
The MacBook Pro I used to develop Elevator CEO was only the second Apple product I had owned, after the iPod Touch. As a longtime Windows user pretty much everything contributed to the learning curve: OS X, Objective-C, Xcode. I had to also learn the gaming engine, Cocos2D for iPhone.

At v2.1 the game reached almost 8000 lines.

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
<td class="text-right">44</td>
<td class="text-right">1754</td>
<td class="text-right">1209</td>
<td class="text-right">6908</td>
</tr>
<tr>
<td>C/C++ Header</td>
<td class="text-right">51</td>
<td class="text-right">622</td>
<td class="text-right">1656</td>
<td class="text-right">1081</td>
</tr>
<tr>
<td>Sum</td>
<td class="text-right">95</td>
<td class="text-right">2376</td>
<td class="text-right">2865</td>
<td class="text-right">7989</td>
</tr>
</tbody>
</table>

## Icon
An icon doesn't define the app but it does declare it. That first impression matters, so I spent several days working on it. I took one of the game elevators and extruded on the selected axis to create a 3D version. There were no early versions. I just landed on this design and liked it.

<div class="d-flex justify-content-center">
    <div class="col-sm-4">
    <figure class="figure">
        {% image "iTunesArtwork.jpg",
        "The Elevator CEO icon",
        [256, 512],
        "256px, 512px",
        "figure-img img-fluid"
        %}
        <figcaption class="figure-caption text-center">The Elevator CEO icon</figcaption>
    </figure>
    </div>
</div>

## Languages
My wife's native language is Dutch (Flemish) so I thought it would be interesting to translate the game. Eventually, I decided to support all three official languages of Belgium so I added French and German translations. We live in Florida so Spanish seemed like a natural fit.

Elevator CEO v1.0 included five languages: English, German, Spanish, French, and Dutch. I also localized date and numeric displays.

<div class="d-flex justify-content-center">
    <figure class="figure">
        {% image "ceo-translations.jpg",
        "'Play', translated into the first set of languages",
        [320],
        "320px",
        "figure-img img-fluid"
        %}
        <figcaption class="figure-caption text-center">"Play" translated into the first set of languages</figcaption>
    </figure>
</div>

Elevator CEO v1.3 added language support for Simplified Chinese. Unlike western languages, the character set for Chinese is vast and has thousands of different glyphs. It wasn't until I started to internationalize the game that I began to appreciate the importance of a game's typeface. Extended character sets are critical and [League Gothic](http://www.theleagueofmoveabletype.com/league-gothic) seemed to excel in that area, though, not specifically for eastern languages.

<div class="d-flex justify-content-center">
    <figure class="figure">
        {% image "zh-ElevatorCEO.jpg",
        "Game tip displayed in simplified Chinese",
        [320, 640, null],
        "320px, 640px, 100vw",
        "figure-img img-fluid"
        %}
        <figcaption class="figure-caption text-center">Game tip displayed in simplified Chinese</figcaption>
    </figure>
</div>

Supporting eight languages became an unwelcome burden when it was time to publish an update. Especially when those updates impacted the graphics. Each country-specific App Store has translations for:
 - app description
 - app update summary
 - screenshots x 6

Thus, a single update meant capturing 48 new screen shots. My advice about internationalizing is to wait until the app finds its target audience and *then* determine if it's worth the effort.

## Monetizing v1.0: $0.99
In 2012 consumer willingness to _pay upfront_ for games was still palpable. Elevator CEO's first week sales at the Tier 1 price of $0.99 USD were encouraging! However, that excitement turned to disillusionment within a couple weeks.

The trend of monetizing casual games was towards freemium, play-to-win, and ad-supported. Elevator CEO wasn't designed to extract dollars, nor was its code ready to support ads.

None of the features in the four updates between v1.0 and v2.0 had a noticable effect on game sales. I was hopeful that game translations would have an impact but country-specific sales in those areas hardly changed. I threw some money at Google Ads to see if search traffic would translate into downloads or even conversions. Nothing seemed to move the needle.

## Monetizing v2.0: Ads
Version 2.0 was my pivot to an ad-supported revenue at a new price tier (free). Downloads increased but the ad views and clicks weren't enough. The blight of advertising was something I truly wanted to avoid. This attempt to monetize included banner ads, interstitial ads, and an option to *remove* ads permanently.

### Banner ads
Larger displays such as iPhone 5, iPhone 5s and 5th generation iPod touch had the lower area of the screen reserved for banners. If a banner can't be retrieved from iAd then the banner slides out of view. If the customer had an iPhone 4, 4s or 4th generation iPod Touch then they played ad-free.

<div class="row justify-content-center">
    <div class="col-sm-6">
    <figure class="figure">
        {% image "elevatorceo-ads.jpg",
        "Ad placement on large displays",
        [320, 640, null],
        "320px, 640px, 100vw",
        "figure-img img-fluid"
        %}
        <figcaption class="figure-caption text-center">Ad placement on large displays</figcaption>
    </figure>
    </div>
</div>

### Interstitial ads
Full-screen or interstitial ads were available for iPad running iOS 6, but this feature of iAd was introduced for *all* devices supporting iOS 7. These ads are only displayed between levels in the game and only at the second level and higher. If the interstitial can't be retrieved from iAd then nothing is displayed and the game continues.

### Pay to remove ads
It's possible no one would pay to remove ads but not providing the option seemed cynical. Adding this non-feature meant learning StoreKit. To the user it was two buttons: "Remove Ads" and "Restore Purchase". My assumption was correct about users not spending $0.99 to remove ads, so the effort was only valuable as a learning experience.

## Release Summary
The Elevator CEO feature list is modest. The goal wasn't to deliver incrementally with bespoke levels. It was to offer something original and fun that was basically complete. Behind every indie game that balances on the knife edge of revenue and creativity there's something special. I appreciate the effort it takes.

<dl class="row">

  <dt class="col-sm-3">Version 2.1</dt>
  <dd class="col-sm-9 list-unstyled">
    <li>- Added translations for Danish</li>
    <li>- Added a reminder to review the game</li>
    <li>- Updates for iOS 8</li>
    <li>- Fewer interstitial advertisements</li>
  </dd>

  <dt class="col-sm-3">Version 2.0</dt>
  <dd class="col-sm-9 list-unstyled">
    <li>- Added translations for Italian</li>
    <li>- Updates and bug fixes for iOS 7</li>
    <li>- Integrated ads for iPhone 5, none for smaller screens</li>
    <li>- In-app purchase to remove ads</li>
  </dd>

  <dt class="col-sm-3">Version 1.4</dt>
  <dd class="col-sm-9 list-unstyled">
    <li>- Added Game Center support</li>
    <li>- Changed minimum OS to iOS 6</li>
  </dd>

  <dt class="col-sm-3">Version 1.3</dt>
  <dd class="col-sm-9 list-unstyled">
    <li>- Added translations for Chinese (Simplified)</li>
  </dd>

  <dt class="col-sm-3">Version 1.2</dt>
  <dd class="col-sm-9 list-unstyled">
    <li>- New startup graphic</li>
    <li>- Expanded displays for iPhone 5</li>
    <li>- Improved consistency of typography</li>
  </dd>

  <dt class="col-sm-3">Version 1.1</dt>
  <dd class="col-sm-9 list-unstyled">
    <li>- Added graphics for iPhone 5</li>
  </dd>

  <dt class="col-sm-3">Version 1.0</dt>
  <dd class="col-sm-9 list-unstyled">
    <li>- Initial release</li>
    <li>- Translations for English, Spanish, Dutch, French, and German</li>
  </dd>
</dl>
