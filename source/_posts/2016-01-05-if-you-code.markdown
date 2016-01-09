---
layout: post
title: "If You Code, You Should Use Git"
date: 2016-01-05 21:36:17 -0500
comments: true
categories: git, productivity
---
Computer Science majors are expected to be well versed in version control software (VCS) like Git, Mercurial, or SVN. [Version control](https://en.wikipedia.org/wiki/Version_control), a.k.a. revision control or source control, is essential for any large software projects with multiple contributors. Chemical Engineering Majors like myself, on the other hand, (and many other science and engineering majors I suspect) don't get exposed to the idea of version control because multi-developer programming isn't a fundamental concept in the program. This is unfortunate for those of us who end up doing computational research.

The kind of code I'm using in my research isn't enormous (~3000 lines of code), and I make changes infrequently enough that I can survive without version control. Even for my relatively simple use case, I've found Git to be a very helpful tool. Just adding a few simple commands to your workflow allows you to keep track of code changes and sync code between machines in a very organized and automated way. I highly recommend Git to anyone who works on code that's more than a couple hundred lines long.

Here's why:
<!--more-->
Without any form of VCS, a careful programmer would regularly make copies of the latest stable version of his code so he could revert to it in case later changes broke the code. Maybe he would even keep a file for each version summarizing the most recent changes made to the code. Even with that level of organization, however, he would still probably keep some commented out code blocks in his source code because reverting to previous versions of the code would still be a pain with that setup. So he would eventually end up with a giant folder full of a bunch of copies of the code from different dates, each copy containing more and more commented out remnants of old code.

Git takes care of all of the annoying bookkeeping work for you and makes it easy to look and travel back in time. This removes the need for both the archive folder and the commented out code. Instead, Git keeps track of everything in a Git *repository*, which it places in the `.git` folder in the top directory of whatever code you want to track.
