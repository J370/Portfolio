---
layout: blog/post
title:  "AOS with lazyload"
author: J370
categories: [Technical]
image: assets/images/posts/aos+lazy.png
featured: true
hidden: true
---
## AOS and Lazyload
While working on [merging my websites]({{ site.baseurl }}/blog/technical/2020/04/30/blogmove/){:target="_blank"}, I started to realise that the Animate On Scroll (AOS) animations were no longer functioning so I went ahead to try and troubleshoot. Having messed around with different values, I started to realise that when I open up inspect element, the AOS worked as if nothing had happened. That was when I came across this [issue](https://github.com/michalsnik/aos/issues/336){:target="_blank"}.

I tried out one of the solutions and saw this:

```
window.addEventListener('load', AOS.refresh);
```

which in essence is quite easy to understand. Add an event listener for load and do a refresh once it is trigerred. However, when it practice, I did not managed to make mine work.

## What is happening?
Lazyload starts breaking quite a bit of things related to anchors as the position changes before and after the images are loaded. As AOS depends on getting the location of the object, the change meant that the animation occurs off screen. In a nutshell, the animation does trigger but not at the desired location. One way to solve this is to refresh when required. Opening up the inspector or resizing the browser does this.

## Solution
So I quickly did a search and filtered results on Github once I knew it was related to lazyload. There are multiple issues when using the search query for [lazy load](//github.com/michalsnik/aos/search?q=lazy+load&unscoped_q=lazy+load&type=Issues){:target="_blank"} and [lazyload](//github.com/michalsnik/aos/search?q=lazyload&unscoped_q=lazyload&type=Issues){:target="_blank"}. Having look through them, I found similar results to refresh through different triggers and found this [answer](//github.com/michalsnik/aos/issues/407) to be the best for my case:

```
document.querySelectorAll('img')
.forEach((img) =>
    img.addEventListener('load', () =>
        AOS.refresh()
    )
);
```

So ultimately, I want to save on computing resources as well and only do a refresh when it is necessary. While some solutions suggest refreshing on scroll as well as eery few seconds, I can see how the site would start lagging. Instead, this solution can help to ensure that only a refresh is called when an image loads up, thus updating the position.

Hope this had helped you!