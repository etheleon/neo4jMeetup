---
title       : Modelling graph data in Neo4j and visualising in R
subtitle    : Using SHINY, HTMLWIDGETS, IGRAPH
author      : Wesley GOI
job         : Graph Enthusiast
framework   : io2012        # {io2012, html5slides, shower, dzslides, ...}
highlighter : highlight.js  # {highlight.js, prettify, highlight}
hitheme     : tomorrow      # 
widgets     : []            # {mathjax, quiz, bootstrap}
mode        : selfcontained # {standalone, draft}
knit        : slidify::knit2slides
---

<style>
.title-slide {
    background-color: #FFF
}
</style>

## Background

* Neo4j is a noSQL database which models its data as a graph
* latest version is 2.3.1

---
## Outline

1. Using RNeo4j to connect with a hosted graphDB via Neo4j's REST API
2. Executing cypher queries
3. Using `IGRAPH` to plot and visualise data locally.
4. Using `SHINY` and a `HTMLTOOLS` package `SIGMA` to interactively visualise graph data in a dashboard

---

## Why use NEO4J

REASON: THE CYPHER QUERY LANGUAGE

---

## Why cypher

comparison with IGRAPH Rcode


```r
someCODE
```

```
## Error in eval(expr, envir, enclos): object 'someCODE' not found
```

---

## Using RNeo4j


```r
devtools::install_github("nicolewhite/RNeo4j")
```

```
## Error in download(dest, src, auth): client error: (401) Unauthorized
```

```r
library(RNeo4j)
```

## Connecting to DB





```r
graph <- startGraph("http://metamaps.scelse.nus.edu.sg:7474/db/data/",
            user = cred$user,
            pass = cred$pass)
```

To disable authentication, change `dbms.security.auth_enabled` to `false` in `conf/neo4j-server.properties`.

```
dbms.security.auth_enabled=false
```


