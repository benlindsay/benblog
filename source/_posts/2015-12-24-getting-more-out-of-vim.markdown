---
layout: post
title: "Getting More Out of Vim"
date: 2015-12-24 08:53:11 -0500
comments: true
published: true
categories: [vim, productivity]
---
For those of you who don't know, Vim is a powerful command-line text editor. It is the improved version of it's predecessor, Vi (in fact, it stands for Vi IMproved). I'm a big fan of Vim for coding and text editing. I started using it a few years ago only because it was the only way I knew how to edit files when SSH-ing onto a remote Linux machine. Now that I've spent time learning how to use it right, I find it faster than any GUI text editor I've used before. There is a somewhat steep learning curve, but if you do a lot of coding or plain-text editing, it's definitely worth investing some time to learn how to use Vim right. Hopefully this post can provide some direction if you are intimidated by Vim like I was when I first started.

<!--more-->

If you're just starting Vim and need some basic directions, I'd look at [this tutorial](http://computers.tutsplus.com/tutorials/vim-for-beginners--cms-21118). A good reference to look back at after going through this tutorial can be found [here](https://simpletutorials.com/c/1238/Simple+Vim+Reference). Even these introductory materials have a *lot* of commands though, so I'll summarize the steps I'd recommend taking to getting more out of Vim.

##1. Install Vim-Pathogen

Before anything else, I want to put in a plug for [Vim-Pathogen](https://github.com/tpope/vim-pathogen). To get the most out of Vim, you might want to add a some plugins for things like file system navigation ([NERD Tree](https://github.com/scrooloose/nerdtree)), auto-closing parentheses and brackets ([Vim-Autoclose](https://github.com/Townk/vim-autoclose)), and writing and compiling LaTeX files ([LaTeX-Box](https://github.com/LaTeX-Box-Team/LaTeX-Box)). Once you install [Tim Pope](https://github.com/tpope)'s [Vim-Pathogen](https://github.com/tpope/vim-pathogen) script, installing any new plugins is super easy.

Setting up Vim-Pathogen itself is pretty easy too. Just follow the instructions on [github.com/tpope/vim-pathogen](https://github.com/tpope/vim-pathogen). At the end of your setup, you will have a `.vim` folder in your home directory organized like this:

```
$ tree ~/.vim
.
├── autoload
│   └── pathogen.vim
└── bundle
```

From there, all you ever need to do to install a plugin is find the plugin repository on GitHub and `git clone` it in your `~/.vim/bundle` folder. For example, to install the NERD Tree plugin, you would:

1. Google something like "vim nerd tree" 
2. Find the link to a GitHub repo ([https://github.com/scrooloose/nerdtree](https://github.com/scrooloose/nerdtree)) 
3. `cd ~/.vim/bundle`
4. `git clone https://github.com/scrooloose/nerdtree`
5. Open Vim and type `:Helptags` to update the help menu in Vim.

And just like that you're all set up with your new plugin. If you ever want to remove or temporarily disable a plugin, just delete the cloned repo (`rm -rf ~/.vim/bundle/nerdtree`) or move it somewhere else (`mv ~/.vim/bundle/nerdtree /any/other/path`).

##2. Practice Navigation

The ability to navigate around Vim without having to leave the keyboard home row is in my opinion its biggest time-saving feature, but it takes a bit of practice to get the hang of it. The resources I listed above are great references to look back on if you forget some commands.

The best thing to start practicing is maneuvering with the `hjkl` keys instead of the arrow keys. It's strange at first, but it becomes second nature soon enough. To make best use of this navigation technique, keep in mind that you want to be in __Normal__ mode instead of __Insert__ mode any time you aren't adding text to your file. Get in the habit of hitting `ESC` or the equivalent `CTRL-C` (I prefer `CTRL-C`) any time you take a break from typing so you don't start adding a bunch of h's, j's, k's , and l's to your file. Here's a silly [game](http://vim-adventures.com) you can play if you want to have fun while practicing Vim navigation.

Here's a short list of the other navigation techniques (all used in __Normal__ mode) I use most frequently:

1. Typing a number before `h`, `j`, `k`, or `l` navigates in that direction that number of times. For example, `10j` moves down 10 lines.
2. `28G` moves to line 28. Have `:set nu` typed somewhere in your `~/.vimrc` file so the line numbers show up when you're in Vim.
3. `gg` or `G` move to the top or bottom of the file, respectively.
4. `/foo` moves to the next place "foo" is found in the document (case sensitive). Typing `n` then moves to the next one and typing `N` moves to the previous one.
5. `0` and `$` move to the beggining and end of the line, respectively.
6. `W` and `B` take you to the beginning of the next WORD and previous WORD, respectivley. In Vim, WORDS are chunks of text separated by white space and words are more like normal words. For example, in a line that looks like `words-making/up.a!big~WORD WORD-2`, typing `W` would take you to the beginning of `WORD-2`, whereas typing `w` or `b`, which navigate between vim words (instead of WORDS), would hit all the `-/.!~` characters in addition to the beginnings of english words.
7. `fh` moves to the next occurrence of the character "h" within the line. `th` does the same thing but places the cursor just before the "h" instead of right on it.
8. `{` and `}` take you to the previous and next paragraph, respectively. `(` and `)` do the same with sentences. This is really nice when typing a lot of text as opposed to code. You can still use them with code, but they're just not as predictable. 

##3. Learn to Speak Vim

What I mean by this is that Vim has a unique command syntax that makes it easy to supercharge your commands. Yan Pritzker has a great post about this [here](http://yanpritzker.com/2011/12/16/learn-to-speak-vim-verbs-nouns-and-modifiers/).

In addition to the `<verb><modifier><text object>` syntax explained in the article, there is also a useful `<verb><navigation command>` syntax that I frequently use. A typical example is something like `d3j`. Here, `d` is the verb for delete, and `3j` tells Vim how far to go, in this case, down 3 lines. So `d3j` deletes the current line and the following 3 lines. You can use any of the navigation commands mentioned above in place of `3j` and any verb in place of `d`. Common verbs are `c` for change (delete specified region and enter insert mode) and `y` for yank (Vim's word for copy, where p or P can be used to paste what you copy).

No go out and practice this stuff, and hopefully you'll see why so many people swear by Vim. If you have thoughts, comments, corrections, or additions you'd like to see, let me know!
