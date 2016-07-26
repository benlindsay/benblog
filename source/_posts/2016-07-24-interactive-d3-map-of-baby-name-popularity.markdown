---
layout: post
title: "Interactive D3 Map of Baby Name Popularity"
date: 2016-07-24 21:53:58 -0400
comments: true
categories: [d3,python,pandas,data visualization]
---

I just added [a project page](/projects/baby-name-map) with an interactive US map that lets you track the popularity any of the top 1000 baby names as a function of location and time. I made this for 2 reasons:

1. My wife and I recently had a baby, so I've been interested in baby name trends and wanted an interactive way to visualize them.
2. I wanted to learn how to use D3, and Mike Bostock's [Quantile Chloropleth](https://bl.ocks.org/mbostock/8ca036b3505121279daf) example caught my eye.

<!--more-->

I'll split my discussion of this little side project into 3 parts: the data prep part, the D3 part, and the playing with the map part.

## The Data Prep Part

I wanted the map to respond quickly to moving the slider for any given name, but I didn't want the browser to have to load in too much data at a time, so I decided to make a separate file for each name which contained all the data relevant to that name. The raw data, which I downloaded from [Kaggle](https://www.kaggle.com/kaggle/us-baby-names), ([data download link here](https://www.kaggle.com/kaggle/us-baby-names/downloads/us-baby-names-release-2015-12-18-00-53-48.zip)) needed to be processed a bit before my map could use it. An IPython Notebook using the *pandas* Python module was a great tool for this purpose. You can see my Notebook [here](https://github.com/benlindsay/baby-name-map-preprocess/blob/master/preprocess.ipynb) on GitHub. (I'm pretty excited that GitHub now [renders the contents of IPython Notebooks](http://blog.jupyter.org/2015/05/07/rendering-notebooks-on-github/) by the way.)

I've been using Python (mostly *numpy*) for data analysis for a couple years now, but this was my first real introduction to *pandas*. I found the [`DataFrame.pivot_table()`](http://pandas.pydata.org/pandas-docs/stable/generated/pandas.DataFrame.pivot_table.html) function particularly useful in this project. It allowed me to very easily create a dataframe with states as the rows and years as the columns out of a dataframe with a different row for each name.

## The D3 Part

Creating the map using [D3](https://d3js.org/) actually wasn't too difficult. It was mostly a matter of following along with Mike Bostock's [choropleth example](https://bl.ocks.org/mbostock/4060606). Scott Murray's [D3 Tutorials](http://alignedleft.com/tutorials/d3) were also incredibly useful. I highly recommend them for anyone interested in checking out D3. The Javascript code used to generate the map can be seen [here](https://github.com/benlindsay/baby-name-map-preprocess/blob/master/choro.js).

## The Playing With the Map Part

The gender neutral names make the most interesting visualizations, so I looked through [FiveThirtyEight](http://fivethirtyeight.com/)'s list of the [most popular gender neutral names](http://fivethirtyeight.com/features/there-are-922-unisex-names-in-america-is-yours-one-of-them/).

Casey, the most popular one, is interesting because of how clean the male/female split was at some points. Here's what it looked like in 1980:

![Casey in 1980](/images/Casey_1980.png 'Casey in 1980')

Another interesting one was Jaime. Here's the map for Jaime in 1975:

![Jaime in 1975](/images/Jaime_1975.png 'Jaime in 1975')

Just one year later, when [The Bionic Woman](http://www.imdb.com/title/tt0073965/) aired on TV, everyone must have loved Jaime, the female cyborg spy because suddenly Jaime's popularity among babies skyrocketed. Here's the map for 1976:

![Jaime in 1976](/images/Jaime_1976.png 'Jaime in 1976')

If you see anything interesting with other names, go ahead and post below.
