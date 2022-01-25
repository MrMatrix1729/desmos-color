# Desmos Color
Whenever you create a graph in desmos using multiple equation, they all have different random color. This is kind of frustating.

This program will help you change to colors of consecutive equation in desmos.

## How to do it?
There are two ways to do it-
```
javascript: var urlArray = window.location.pathname.split('/'); var url = window.location.hostname + "/" + urlArray[1] if (url == "www.desmos.com/calculator"){state = Calc.getState(); var i; var min = prompt("minimum number"); var max = prompt("maximum number"); var color = prompt ("color"); for (i = min-1; i < max; i++){state.expressions.list[i].color = "#"+color;} Calc.setState(state); } else{ alert("This does not seem to be desmos!");}  
```
