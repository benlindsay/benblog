---
layout: post
title: "Getting More Out of Vim"
date: 2015-12-24 08:53:11 -0500
comments: true
published: true
categories: vim
---
For those of you who don't know, Vim is a powerful command-line text editor. It is the improved version of it's predecessor, Vi (in fact, it stands for Vi IMproved). I'm a big fan of Vim for coding and text editing. I started using it a few years ago only because it was the only way I knew how to edit files when SSH-ing onto a remote Linux machine. Now that I've spent time learning how to use it right, I find it faster than any GUI text editor I've used before. There is a somewhat steep learning curve, but if you do a lot of coding or plain-text editing, it's definitely worth investing some time to learn how to use Vim right. Hopefully this post can provide some direction if you are intimidated by Vim like I was when I first started.

If you're just starting Vim and need some basic directions, I'd look at [this tutorial](http://computers.tutsplus.com/tutorials/vim-for-beginners--cms-21118), although in my opinion you can skip the stuff about relative line numbering. I prefer absolute line numbering. A good reference to look back at after going through this tutorial can be found [here](https://simpletutorials.com/c/1238/Simple+Vim+Reference). Even these introductory materials have a *lot* of commands though, so I'll summarize the steps I'd recommend taking to getting more out of Vim.


##0. Plugins Using Vim-Pathogen

Before anything else, I want to put in a plug for Vim-Pathogen. To get the most out of Vim, you might want to add a some plugins for things like file system navigation ([NERD Tree](https://github.com/scrooloose/nerdtree)), auto-closing parentheses and brackets ([Vim-Autoclose](https://github.com/Townk/vim-autoclose)), and writing and compiling $$\infty$$ files ([LaTeX-Box](https://github.com/LaTeX-Box-Team/LaTeX-Box))
