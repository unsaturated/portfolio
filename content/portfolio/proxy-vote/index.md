---
title: Proxy Vote
subtitle: WordPress plug-in to create voting events and collect proxies so you can reach quorum at meetings.
layout: single.njk
image: portfolio-proxy-vote.jpg
date: 2023-02-01
tags:
    - portfolio
    - php
    - voting
    - open source
metadata:
    'og:title': Proxy Vote
    'og:type': article
    'og:locale': en_US
    'og:description': WordPress plug-in to create voting events and collect proxies so you can reach quorum at meetings.
    'og:image': https://matt.unsaturated.com/img/portfolio-proxy-vote.jpg
supplementary:
    - text: 6 minute read
      icon: bi bi-clock
    - text: GitHub Repository
      icon: bi bi-github
      link: https://github.com/unsaturated/ProxyVote
---

## The Story
I developed this WordPress plugin while managing my neighborhood homeowner association (HOA). It was always difficult for our annual board meetings to achieve quorum. People skipped the meeting and didn't bother to mail us their proxy vote. 

The process is simple. The voter goes to a website, enters his unique key, his name, the proxy's name, then submits the information. The first version I deployed helped our HOA achieve quorum. 

<div class="container">
    <div class="d-flex justify-content-center">
        <figure class="figure">
            {% image "proxy-event-posted.jpg",
            "Proxy event in WordPress 4.8",
            [464, 929, null],
            "464px, 929px, 100vw",
            "figure-img img-fluid"
            %}
            <figcaption class="figure-caption text-center">Proxy event in WordPress 4.8</figcaption>
        </figure>
    </div>
</div>

A few years later I moved to a new home, stopped maintaining the website, and the plugin itself was disused. 

I originally developed this in the v2.3 era of WordPress—in late 2007. I started a container to see if WordPress v4.8 would still load, create the DB tables, and run it correctly. To my shock and amusement *it actually worked*. I didn't change a single line of code. 

This is decade old software and it still runs. If you're wondering why web security is such a burning hot topic, this is just one example. If old, unmaintained software still runs then what does that say about the infrastructure that loads the plugin?

## Features
 
  * Works on WordPress v4.8 down to v2.5
  * Manages multiple, simultaneous events
  * Descriptions can contain HTML
  * Handouts are printable on individual pages
  * Results are optimized for printing
  * Insert a proxy on a page or post with a shortcode like `[proxy123]`
  * Information & error messages can be translated
  * IP address of proxy sender is recorded
  * Events can be exported to an XML file

## Add an Event

Provide the title, description, expiration time, and the number of voters. 

<div class="container">
    <div class="d-flex justify-content-center">
        <figure class="figure">
            {% image "proxy-event-add.jpg",
            "Adding a proxy event",
            [532, null],
            "532px, 100vw",
            "figure-img img-fluid"
            %}
            <figcaption class="figure-caption text-center">Adding a proxy event</figcaption>
        </figure>
    </div>
</div>

Setting up your event only takes a few lines of HTML and the shortcodes:
```html
<h2>Annual Meeting Proxy Vote</h2>
<p>
    To achieve a quorum at our annual meeting 
    we only ask for a few moments of your time. 
    This year we've made the process super easy. 
    Please follow these directions<:
</p>
<ol>
    <li>Go to our HOA website</li>
    <li>Look for post "Proxy Vote"</li>
    <li>Submit before: <b>[expires]</b></li>
    <li>Enter code: <code>[key]</code><li>
    <li>Enter your name</li>
    <li>Enter your proxy's name</li>
</ol>
<p>
    Again, <i>thank you</i> for your support. 
    This will help our meeting proceed  
    smoothly and without delay.
</p>
<p>
    Sincerely,<br/>
    Matthew Crumley<br/>
    Board President
</p>
```

## Post, Print, and Export
After creating the proxy event you need to insert the shortcode into a post or a page. You can add any text before or after the form itself. Give your voters a simple reminder of what's required. Keep the message short and simple.

<div class="container">
    <div class="d-flex justify-content-center">
        <figure class="figure">
            {% image "proxy-event-shortcode.jpg",
            "Write a post or page and use a shortcode",
            [532, null],
            "532px, 100vw",
            "figure-img img-fluid"
            %}
            <figcaption class="figure-caption text-center">Write a post or page and use a shortcode</figcaption>
        </figure>
    </div>
</div>

Your browser's print menu will show a preview of the proxy handouts. These are intended for distribution because each page has a unique proxy key. Check out an [example PDF](./proxy-event-handouts.pdf).

Once your proxy collection is complete you might want to organize the data differently. Proxy Vote wasn't designed to analyze or format data. Export your event to an XML file and open it in your favorite spreadsheet application.

## Code and Coda
The first time I used PHP was in college. It was a senior design project in which I built a web-enabled horse feeder. Since then I haven't had use for PHP professionally aside from scattered WordPress templates and this plugin.

The total line count for Proxy Vote: 
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
            <td>PHP</td>
            <td class="text-right">2</td>
            <td class="text-right">185</td>
            <td class="text-right">169</td>
            <td class="text-right">911</td>
        </tr>
    </tbody>
</table>

<div class="alert alert-warning" role="alert">
  <i class="bi-exclamation-circle"></i> Weigh the risks carefully before you stray too far from a stock installation of WordPress.
</div>

I wrote this plugin before I became security-conscious. The [OWASP Top 10](https://www.owasp.org/index.php/Category:OWASP_Top_Ten_Project) applies here but I wasn't aware such guidelines existed in 2007. Training to do penetration testing opened my eyes even wider. There are numerous exploits in the Metasploit Framework targeting WordPress plugins. If a plugin doesn't sanitize input then it's game over from a security standpoint. 
