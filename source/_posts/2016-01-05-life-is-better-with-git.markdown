---
layout: post
title: "Life Is Better With Git"
date: 2016-01-05 21:36:17 -0500
comments: true
categories: [git, productivity]
---
If you've heard of Git, you probably think of it mainly as a tool that allows teams of developers to collaborate on a project. While version control systems like Git are crucial for multi-developer projects, it is still highly valuable even if you're the only one who touches your code. If you're someone who codes regularly (even if the code is only a couple hundred lines long) and you don't use any form of version control software (like Git, Mercurial, or SVN), then this post is for you. My goal with this post is to show you that even if you can survive without Git, life is better with it.

<!--more-->

There's a hell of a lot you can learn about Git if you want, but you don't have to know that much to start speeding up and cleaning up your workflow. The following list of commands covers most of what you'll need to use Git. For almost everything else, a quick Google search turns up a StackOverflow can get a lot of the benefits of Git with just this short list of commands:

- **Just once to set your user name and email for your whole system:**
  - `git config --global user.name "John Doe"`
  - `git config --global user.email johndoe@example.com`
- **Once per repository to initialize:**
  - `git init`
  - `git remote add origin https://github.com/<username>/<reposity_name>.git`
  - `git push -u origin --all`
- **Once every time you want to save the code's current state:**
  - `git add .`
  - `git commit -m "commit message"`
  - `git push origin master`
- **Any time to look at current commit status:**
  - `git status`
- **Any time to look at commit history:**
  - `git log`

##What Does Git Do For You?

Git keeps a *full history* of all the changes you've made to your code in a magic Git **repository**. This is a set of files stored in the `.git` folder in the top directory of the code you want to track. For me, this immediately allowed me to make three big changes to my coding workflow:

1. No more manually backing up my code into an archive folder before making big changes
2. No more commented out chunks of previous code cluttering my files
3. No more copying whole new folders over to remote machines every time I want to update my code changes on them

The primary unit of Git is a **commit**. Any time your project is in a state you'd like to save, you commit those changes into your Git repository. You can **checkout** any of your commits at any time, meaning you load files as they were at the time of the commit into your workspace.

##How Do I Start Using Git?

OK, so you're convinced. Here's how to start experiencing the awesomeness that is Git:

###1. Make Sure Git is Installed

Open a terminal window and type `which git`. (If you're on a Windows system, you'll need to have Cygwin or something to give you a Unix-like terminal, otherwise I can't guarantee that any of this will work for you.) Typing `which git` will return `/usr/local/bin/git` or some other path if it's installed. If it returns nothing, you need to download it. 

To download Git, if you're on a Mac, installing Xcode or just the Xcode command-line tools (type `xcode-select --install` in command line) will do it. However, I'd recommend installing using Homebrew (`brew doctor; brew update; brew install git`). If you don't have Homebrew installed (i.e. `which brew` returns nothing) then go install it. It's awesome for really easily installing and updating command-line tools. To install it, go to the [Homebrew website](http://brew.sh/), copy the install line, paste it into a terminal, press enter, and you're set. If you have Git installed by both Xcode and Homebrew, make sure `/usr/local/bin` comes before `/usr/bin` in your path (i.e. have `export PATH="/usr/local/bin:$PATH"` in your `~/.bash_profile` file) so the Homebrew version is used. Sorry, little bit of a tangent there.

If you're on a Linux system, use `apt-get install git`, or replace `apt-get` with whatever package manager you use (go [here](https://git-scm.com/download/linux) for more specifics). If you don't have root access, instructions can be found [here](http://joemaller.com/908/how-to-install-git-on-a-shared-host/) to install locally.

If you're on Windows, go [here](https://git-scm.com/download/win) and do your thing.

###2. Configure Name and Email

Git attaches your name and email to every commit you make. You just need to configure them once on your computer, and Git will get it right on all of your projects after that. You can change them at any time later on. Type these commands to configure Git:

{% codeblock %}
$ git config --global user.name "Joe Schmoe"
$ git config --global user.email joeschmoe@gmail.com
{% endcodeblock %}

If you're not sure if Git already knows your name and email, just type `git config --global user.name` and `git config --global user.email` and Git will tell you what it thinks they are.

###3. Initialize a Git Repository

First, let's create an awesome project:

{% codeblock %}
$ mkdir awesome-project
$ cd awesome-project
$ echo "This is an awesome project." > README.md
$ echo "print 'Hello, World'" > hello.py
$ ls -a
.         ..        README.md hello.py
{% endcodeblock %}

Now we initialize a Git repository:

{% codeblock %}
$ git init
Initialized empty Git repository in /Users/benlindsay/awesome-project/.git/
$ ls -a
.         ..        .git      README.md hello.py
{% endcodeblock %}

So now you have the magical `.git` folder that keeps track of everything for you. What's the status of our repository?

{% codeblock %}
$ git status  
On branch master 
 
Initial commit 
 
Untracked files: 
  (use "git add <file>..." to include in what will be committed) 
  
        README.md 
        hello.py 
  
nothing added to commit but untracked files present (use "git add" to track) 
{% endcodeblock %}

So Git sees that there are files present that haven't been committed. Next, you need to...

###3. Make Your First Commit

Git uses a 2-step commit process. First, you use `git add` to tell Git what files you want to include in the commit. In Git-speak, this is called **staging** files, or adding files to the **index**. Usually I will just add all files in the project using

{% codeblock %}
$ git add .
{% endcodeblock %}

but you could also pick and choose which files to add. Note that adding is recursive, so if you use `git add .` all subdirectories and contained files will be added. `git add *` on the other hand would just add all the files in the current directory, since that's how Bash interprets `*`

Now what's our status?

{% codeblock %}
$ git status
On branch master

Initial commit

Changes to be committed:
  (use "git rm --cached <file>..." to unstage)

        new file:   README.md
        new file:   hello.py
{% endcodeblock %}

So now we have changes ready to commit. To commit, type `git commit -m "Short explanation of changes you've made"`

{% codeblock %}
$ git commit -m "First commit"
[master (root-commit) 4b7f2db] First commit
 2 files changed, 2 insertions(+)
 create mode 100644 README.md
 create mode 100644 hello.py
{% endcodeblock %}

Finally, our current status is:

{% codeblock %}
$ git status
On branch master
nothing to commit, working directory clean
{% endcodeblock %}

Your typical workflow will just be to type `git add .` then `git commit -m "commit message"` whenever you've made changes to your project that you want to save.

###4. Backup Your Code on [GitHub](https://github.com) or [Bitbucket](https://bitbucket.org)

Git makes it very easy to keep your project backed up on external servers. This could be any server you have SSH access to, but you should use GitHub or Bitbucket since they have really nice user interfaces to view, track, and (if desired) share and collaborate on your code.

GitHub and Bitbucket both have nice interfaces with pretty much the same functionalities. The only major differences that I see are that 1) GitHub is like a social network for coders, and it's the go-to place to share open-source projects, and 2) Bitbucket allows unlimited private repositories for small teams (up to 5 people) while GitHub only allows publicly shared repositories (unless you pay them money). I'll talk about setting up Bitbucket from here on out, because the private repo functionality is nice if you're not ready to share your project with the world. Everything is almost exactly the same for using GitHub, except you'd use `github.com` anywhere you see `bitbucket.org`.

First, you need to set up an account on Bitbucket. It's super easy and free. You just need to enter your name, username, password, email address, and plan (choose "Personal Account"). Confirm the email they send you and you're set.

Next, sign in to Bitbucket, select "Create" in the menu bar, then click on "Create repository" in the drop-down menu.

![Bitbucket Repositories Menu](/images/bitbucket_menu_create_repo.png 'Bitbucket Repositories Menu')

This will bring up a page shown below. For repository name, I usually make it match my project name on my computer, but I put "cool-project" here instead of "awesome-project" just to prove that it doesn't have to match. Leave "This is a private repository" checked if you only want people to be able to see the project if you give them access rights. If you uncheck it, anyone with the URL can see your project. It's not necessary to select the language of your project, but there's no reason not to.

![Bitbucket Create New Repository Page](/images/bitbucket_create_new_repo_page.png 'Bitbucket Create New Repository Page')

After clicking "Create repository", you'll be taken to `bitbucket.org/yourusername/cool-project,` which will look like this:

![Bitbucket Repository Setup Page](/images/bitbucket_repo_setup_page.png 'Bitbucket Repository Setup Page')

If you click "I have an existing project", as I have in the screenshot above, it kindly tells you what to type in your terminal to push your repository up to Bitbucket. Since I'm already in the directory of my project, I'll skip `cd /path/to/my/repo`, and since I haven't defined any version tags (like 2.1.4--I won't cover git tags here), I can skip `git push -u origin --tags`. All I have to type is

{% codeblock %}
$ git remote add origin https://benlindsay@bitbucket.org/benlindsay/cool-project.git
$ git push -u origin --all
Password for 'https://benlindsay@bitbucket.org': 
Counting objects: 4, done.
Delta compression using up to 4 threads.
Compressing objects: 100% (2/2), done.
Writing objects: 100% (4/4), 306 bytes | 0 bytes/s, done.
Total 4 (delta 0), reused 0 (delta 0)
To https://benlindsay@bitbucket.org/benlindsay/cool-project.git
 * [new branch]      master -> master
Branch master set up to track remote branch master from origin.
{% endcodeblock %}

As you can see, Git asked me for my Bitbucket password, then spat out a bunch of stuff basically saying it successfully pushed our project up to Bitbucket. Now, if you refresh your Bitbucket page, it should look like this:

![Bitbucket Repository Page After First Push](/images/bitbucket_repo_after_first_push.png 'Bitbucket Repository Page After First Push')

You'll notice that the contents of `README.md` ("This is an awesome project.") have been displayed on the Overview page. Both Bitbucket and GitHub look for `README.md` in the main directory of your project and display its contents on the main repository page. For info on the user-friendly markdown syntax Bitbucket looks for in `README.md` files, see this [tutorial](https://bitbucket.org/tutorials/markdowndemo/overview).

From this page, you can click on the "Source" link in the sidebar to explore the source files in their current state, or the "Commits" link in the sidebar to see the changes made in any commit.

###5. Syncing Project With Another Machine

So now I have my awesome project on my laptop, and a full backup of my project on Bitbucket. From this setup, it's incredibly easy to create copies of this project anywhere you want and keep each copy of the project up-to-date. This has been incredibly useful for me, since I typically code on one machine, and run production simulations on another.

If you SSH into a different machine and make sure Git is installed and configured as discussed in steps 1 and 2 above, you can do this:

{% codeblock %}
$ mkdir my-projects-dir
$ cd my-projects-dir
$ git clone https://benlindsay@bitbucket.org/benlindsay/cool-project.git 
Cloning into 'cool-project'...
remote: Counting objects: 4, done.
remote: Compressing objects: 100% (2/2), done.
remote: Total 4 (delta 0), reused 0 (delta 0)
Unpacking objects: 100% (4/4), done.
Checking connectivity... done.
$ ls
cool-project/
{% endcodeblock %}

If you left "Private repository" checked in Bitbucket, you'll be asked for your password. The URL you paste after `git clone` can be copied from the top of the Overview page in Bitbucket (you can see it in the image above). The only difference using that URL and the URL in the search bar in your browser is the `username@` before `bitbucket.org`. Without that `username@` part, you'll just be asked for your username when you clone in addition to your password (unless you unchecked "Private repository").

The clone you just created is another full backup with your full project history, just like the one on your laptop and the one on Bitbucket. This means that if you dropped your laptop in a volcano and an asteroid hit the Bitbucket servers but not the machine you SSH'd into, then you haven't lost anything (assuming you didn't have anything else on your laptop).

From here, you can do your coding on your laptop or the remote machine. There's no difference either way. If you do want to switch which machine you code on, just make sure all changes are committed and synced across your laptop, Bitbucket, and your external machine before switching.

Let's make a change on our external machine now.

{% codeblock %}
$ cd cool-project/
$ echo -e "\n**Author:** Ben Lindsay" >> README.md
$ cat README.md
This is an awesome project.

**Author:** Ben Lindsay
{% endcodeblock %}

Now we commit the change:

{% codeblock %}
$ git add .
$ git commit -m "Added author to README.md with some markdown syntax included"
[master 68f9381] Added author to README.md with some markdown syntax included
 1 file changed, 2 insertions(+)
{% endcodeblock %}

And push the commit up to Bitbucket:

{% codeblock %}
$ git push origin master 
Counting objects: 3, done.
Delta compression using up to 4 threads.
Compressing objects: 100% (3/3), done.
Writing objects: 100% (3/3), 367 bytes | 0 bytes/s, done.
Total 3 (delta 0), reused 0 (delta 0)
To https://benlindsay@bitbucket.org/benlindsay/cool-project.git
   4b7f2db..68f9381  master -> master
{% endcodeblock %}

Now to sync the project on your laptop, from within the project directory on the laptop, you just need to type `git pull`:

{% codeblock %}
$ cat README.md
This is an awesome project.
$ git pull
Password for 'https://benlindsay@bitbucket.org': 
remote: Counting objects: 3, done.
remote: Compressing objects: 100% (3/3), done.
remote: Total 3 (delta 0), reused 0 (delta 0)
Unpacking objects: 100% (3/3), done.
From https://bitbucket.org/benlindsay/cool-project
   4b7f2db..68f9381  master     -> origin/master
Updating 4b7f2db..68f9381
Fast-forward
 README.md | 2 ++
 1 file changed, 2 insertions(+)
$ cat README.md
This is an awesome project.

**Author:** Ben Lindsay
{% endcodeblock %}

###6. Next Steps

I'll discuss branching and checking out previous commits another time. These are really cool concepts that further add to what you can do with your code. For now, here's a [great simple reference](http://rogerdudler.github.io/git-guide/) by Roger Dudler, which, as he says, contains "no deep shit". I look back at this all the time.

Good luck! Feel free to leave comments and questions below.
