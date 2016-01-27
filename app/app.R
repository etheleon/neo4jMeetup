library(dplyr)
library(igraph)
library(visNetwork)
library(shiny)

#Simple interactive visualisation with visNetwork
set.seed(1000)
g = erdos.renyi.game(100, 1/100, directed=TRUE)
V(g)$name = 1:vcount(g)
nodes = igraph::as_data_frame(g, what="vertices") %>% setNames("id")
edges = igraph::as_data_frame(g, "edges") %>% setNames(c("from", "to"))

shinyApp(
ui=         mainPanel(
                   visNetworkOutput("network")
                   ),
server=         function(input, output){
             output$network <- renderVisNetwork({visNetwork(nodes, edges)})
         }
         )
