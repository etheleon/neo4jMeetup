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

---
## Outline

1. Edit YAML front matter
2. Write using R Markdown
3. Use an empty line followed by three dashes to separate slides!

---

## Why use NEO4J

---

## Why cypher

---

## Cypher

---

## Using RNeo4j


```r
devtools::install_github("nicolewhite/RNeo4j")
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


