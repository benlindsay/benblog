---
layout: post
title: "Playing With D3"
date: 2016-01-02 22:52:47 -0500
comments: true
categories: 
---

<script type="text/javascript" src="/javascripts/d3.v3.min.js"></script>
<script type="text/javascript">
    //See http://alignedleft.com/tutorials/d3/using-your-data
    var dataset = [ 5, 10, 15, 20, 25 ];
    
    d3.select("div.entry-content").selectAll("p")
        .data(dataset)
        .enter()
        .append("p")
        .text(function(d) {
            var val = 2 + parseInt(d, 10)
            return "I can count up to " + val;
        });
</script>
