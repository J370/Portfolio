---
layout: post
title:  "Reddit's database logic"
author: J370
categories: [Technical]
image: https://redditupvoted.files.wordpress.com/2015/10/reddit_icon_twitter_fb.png
---
Sorry for this random post but I do hope that this blog can provide information on some fustrating bugs and issues. Didn't faced any but I did have some interesting Ah Ha moments on reddit today.

## Background
I used to have a reddit account to check on various Linux happenings but decided to delete it after not using it for a while.

## Trying to create an account
So today; I was like; "Why don't I create a reddit account?".

![AccountExists]({{ site.baseurl }}/assets/images/posts/Technical/reddit.png)
When I keyed in the username however, an error occured. It's quite self explainatory, there is an account which had been deleted which goes by this name...

And then it hit me that I had used my old account with the same name. The thing is that it will be great if I used that username.

It seems that quite a lot of people shared the same sentiments as me. There's a [post](https://www.reddit.com/r/mildlyinfuriating/comments/5h7nkb/this_username_is_taken_by_adeleted_account/?utm_source=share&utm_medium=web2x){:target="_blank"} where it rightfully belongs to in r/mildlyinfurating.  It also has quite a bit of upvotes (12.1k).


## Obvious reasons
As it turns out, the database keeps the usernames of every registered redditor.

On one hand, this makes sense

<a class="embedly-card" href="https://www.reddit.com/r/mildlyinfuriating/comments/5h7nkb/this_username_is_taken_by_adeleted_account/day41c2">Card</a>

Additionally, with reddit keeping all their old posts, the integrity of the database must be kept.

But then on the other, it really is mildly infurating that I could not use the username. And to me, this point outweighs all the other logical reasons😠. I just want to use the username😆, maybe I should have had known about this before deleting my account.

### No choices
After spending the next 10 minutes going over this issue and trying to bypass this problem(and the other 10 minutes thinking of a new username that I liked), I threw the white flag and settled on the username J370s(S for Singapore)

![Mynewusername]({{ site.baseurl }}/assets/images/posts/Technical/redditprofile.png)

My new username page, though I am still slightly unhappy over it.

## The discussion
So in conclusion, what do you all think of how reddit's or other website's database should be structured?

<script async src="//embed.redditmedia.com/widgets/platform.js" charset="UTF-8"></script>