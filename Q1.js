
// for loop:

var fav=  [{
    "food" : "briyani", 
    "sport"   : "cricket",
    "color" : "black",
    },
{
    "food" : "parota", 
    "sport"   : "kabbadi",
    "color" : "blue",
  
}];

for(var i = 0; i < fav.length; i++) {
    var obj = fav[i];

    console.log(obj.food);
    console.log(obj.sport);
    console.log(obj.color);

}


// for each:

var fav=  [{
    "food" : "briyani", 
    "sport"   : "cricket",
    "color" : "black",
    },
{
    "food" : "parota", 
    "sport"   : "kabbadi",
    "color" : "blue",
  
}];

fav.forEach(function(obj) { console.log(obj.sport); });



// for in:

var fav=  [{
    "food" : "briyani", 
    "sport"   : "cricket",
    "color" : "black",
    },
{
    "food" : "parota", 
    "sport"   : "kabbadi",
    "color" : "blue",
  
}];

for (var key in fav) {
if (fav.hasOwnProperty(key)) {
  console.log(fav[key].color);
  
 
}
}

// for of:

var fav=  [{
    "food" : "briyani", 
    "sport"   : "cricket",
    "color" : "black",
    },
{
    "food" : "parota", 
    "sport"   : "kabbadi",
    "color" : "blue",
  
}];

let text = "";
for (let x of fav[key].food) {
 text += x; 
}
 console.log(text);
