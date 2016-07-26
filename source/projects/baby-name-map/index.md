---
layout: page
title: "Baby Names Through Time: An Interactive D3 Visualization Tool"
comments: false
sharing: true
footer: true
---

<link href="/projects/baby-name-map/baby-name-map.css" rel="stylesheet" type="text/css">
<script src="/javascripts/libs/d3.v3.min.js"></script>
<script src="/javascripts/libs/queue.v1.min.js"></script>
<script src="/javascripts/libs/topojson.v1.min.js"></script>
<script src="/javascripts/libs/jquery.min.js"></script>
<div id="mapNameContainer" style="display: table; margin: 0 auto;">
  Choose a name:
  <select id="dropdown" name="Options:" onchange="changeName(this.value)">
  </select>
</div>
<div id="mapContainer"></div>
<div id="yearContainer" style="display: table; margin: 0 auto;">
  <div id="yearTextContainer" style="display: table; margin: 0 auto;">
    <p id="yearText">Year: 1910</p>
  </div>
  <input id="yearSlider" type="range" min="1910" max="2014" step="1" value="1910"
    oninput="changeYear(this.value)" onchange="changeYear(this.value)"
    onload="changeYear(this.value)"/>
</div>
<script src="/projects/baby-name-map/baby-name-map.js"></script>

## Using and Understanding this Map

To use the map above, select a name from the dropdown list (you should be able to type a name if you don't want to scroll), then drag the slider to move in time between the years 1910 and 2014. The color hue (pink vs. blue) in each state tells you whether the name was more popular for baby girls or boys. The color tone (dark pink vs. light pink) corresponds to the name's popularity among babies of that gender. "Popularity" is measured by the percentage of babies of either gender given that name.

For ideas on where to start, try out some of the more popular gender neutral names described in a [FiveThirtyEight article](http://fivethirtyeight.com/features/there-are-922-unisex-names-in-america-is-yours-one-of-them/) such as Casey, Riley, Jessie, or Jackie. Or look at Jaime (also in that list) and see the popularity skyrocket in 1976, which turns out to be when [The Bionic Woman](http://www.imdb.com/title/tt0073965/) aired on TV, portraying the adventures of a female cyborg spy named Jaime Sommers.

More info in my [blog post](/blog/2016/07/interactive-d3-map-of-baby-name-popularity) about this.
