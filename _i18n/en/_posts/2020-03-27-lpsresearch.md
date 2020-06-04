---
layout: blog/post
title: "How is the Lego Part Sorter market"
author: J370
tags: [Lego Part Sorter]
categories: [ School ]
---
## TL;DR
Looking into current solutions and problems faced.

## A dream
I am sure that at some point in time, everyone who had played with Lego would have thought of the possibility of not having to dig through a mountain of parts just to find one part nor the time-consuming task of having to sort out the Lego parts. We have had all been there at some point in time. For me, being in the robotics Co-Cirriculum Activity(CCA), this dreaded task of sorting parts always come right before school ends at the end of the year.

### The solution
I remembered a point where Lego constructions were quite popular within our club and how our YouTube recommendations are always filled with suggestions for Lego builds. The first sorting machine looked something similar to [this](https://www.youtube.com/watch?v=nlCSlJuD65A){:target="_blank"}. Nothing too difficult but at that time, I was very inspired by it and whenever it comes the time to sort the parts, it always floats in my mind of how I could have been working on something else. I mean, the machine only sorts a specific category of parts namely the beams. There are some other variations like [this one](https://www.youtube.com/watch?v=fM9qGZCc4DY){:target="_blank"} but regardless of its complexity, it just sorts beams and axels. Then we started seeing crazier builds like [this one](https://www.youtube.com/watch?v=m7Gs6-6p7qw){:target="_blank"} which does raise the question of how big is too big for our general purpose.

### Never getting it done
Regardless of how many years we thought of building it while doing the task of sorting the parts, we've never gotten past the stage of just dreaming up the concepts. As such, I took this opportunity during my internship to start on it.

## 7 years in the making
From when we dreamed it up till now, this simple task of sorting Lego parts has seemed to change throughout time. Now, from single category sorting machines, we are starting to see multiple categories being able to be sorted. I mean, if your system can only target less than 10% of the Lego sets, the effort placed in is not so worth it. We are starting to see experties starting to shift from hardware to software with systems utilising AI as the core of their project. As such, I am using this post as a documentation of the research that I had found with regard to current solutions. It also provides me a way to index such wonderful solutions and ideas that could be beneficial later down in my own adventure.

## Successful Examples
### [Daniel West](https://towardsdatascience.com/@JustASquid){:target="_blank"}
First and foremost, the top and latest search results that gets back is one from Daniel West. He had written two blog posts on it. One is on the [sorter itself](https://towardsdatascience.com/a-high-speed-computer-vision-pipeline-for-the-universal-lego-sorting-machine-253f5a690ef4){:target="_blank"} while the other is on getting the [required data](https://towardsdatascience.com/how-i-created-over-100-000-labeled-lego-training-images-ec74191bb4ef){:target="_blank"} which I think would be beneficial on my own journey. One thing that did catch my eye was the prediction being done on the Raspberry Pi itself. From my experience, this had always been an issue due to the lack of memory on the Raspberry Pi. I would definitely have a look at this tatic when time permits.

Also, I must comment on the information given regarding the multiple trials and errors that he performed. I would greatly thank him for providing such invaluable information which could further save me from trouble.

### [Jaques Mattheij](https://jacquesmattheij.com/){:target="_blank"}
One thing I must say first, I am glad he separated his progress into two parts. [One](https://jacquesmattheij.com/sorting-two-metric-tons-of-lego/){:target="_blank"} for the build process with a quick introduction to the software and the [other](https://jacquesmattheij.com/sorting-lego-the-software-side/){:target="_blank"} on an in depth look into the software. It does provide ease when doing the various portions individually.

One thing unique about his concept is the use of air nozzles. While he did mention it worked well, the chances I get to use them are next to zero. Firstly, there's just too many nozzles that I would need to sort all my parts. Secondly, some of my parts are way heavier than the bricks which he is mainly using to sort. But most importantly, I am not very experienced in such a setup and it does state that he needed a reserve tank. I might consider this in the future, just not at the top of my to do.

### [Paco Garcia](https://medium.com/@pacogarcia3){:target="_blank"}
Something that would be in common would be the utilising of a Raspberry Pi Cam as its main camera. One thing I did not like so much however was the speed. Nonetheless, I felt it was a great implementation with simple concepts that were effective in doing the seperation to be feeded into the scanning.

He has [5 medium posts](https://medium.com/@pacogarcia3){:target="_blank"} documenting the various techniques he has chosen to help accomplish this task. Something similar which catched my eye was just using the Raspberry Pi to do the prediction! Had I been cheated in the past, I feel like I should really test this out. And it's not just 1 but 4 cameras constantly feeding images back to the Raspberry Pi.

## That's all folks
I think these are wonderful examples. I will definitely update the list whenever I am free.