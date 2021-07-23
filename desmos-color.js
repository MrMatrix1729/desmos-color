var urlArray = window.location.pathname.split('/');          //splits the url path after '.com/' into an array
var url = window.location.hostname + "/" + urlArray[1]       //stores www.desmos.com/calculator in var 'url'
if (url == "www.desmos.com/calculator")                      //check for if the website is desmos
{
	state = Calc.getState();                                 //desmos api to get state
															 
	var i;                                                    
															  
	var min = prompt("minimum number");                      //to get the start point of eq to color 
	var max = prompt("maximum number");                      //to get the end point of eq to color 
	var color = prompt ("color");                            //to get the the hex code of color 
															  
	for (i = min-1; i < max; i++)                            //loop to color the eq from min to max
	{                                                         
		state.expressions.list[i].color = "#"+color;          
	}                                                         
															  
	Calc.setState(state);                                    //desmos api to save the state  
}                                                             
															  
else                                                         //if website is not desmos 
{                                                            
	alert("This does not seem to be desmos!");               //check for if the website is desmos
}   
