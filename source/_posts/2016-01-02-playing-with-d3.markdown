---
layout: post
title: "Playing With D3"
date: 2016-01-02 22:52:47 -0500
comments: true
categories: 
---

See http://alignedleft.com/tutorials/d3/using-your-data

<script type="text/javascript" src="/javascripts/d3.v3.min.js"></script>
<script type="text/javascript">
    var dataset = [ 5, 10, 15, 20, 25 ];
    
    d3.select("div.entry-content").selectAll("p")
        .data(dataset)
        .enter()
        .append("p")
        .text(function(d) { return d; });
</script>
