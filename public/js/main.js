var zone = document.getElementById("section-click")
var rectangle = document.getElementById("rendu-rectangle")
var mesBoutons = zone.getElementsByTagName("button")

// var buttonArray = Array.from(mesBoutons)

// buttonArray.forEach(element => {
    
//     element.addEventListener("click", ()=> fct_btn(elem))
// });

// function fct_btn(index) {
//     let jawastyle = window.getComputedStyle(index).backgroundColor
// }
function whiteColor() {
   
    rectangle.style.backgroundColor = window.getComputedStyle(mesBoutons[0]).backgroundColor
}
mesBoutons[0].addEventListener("click",whiteColor)

function redColor(params) {
    
    rectangle.style.backgroundColor = window.getComputedStyle(mesBoutons[1]).backgroundColor
}
mesBoutons[1].addEventListener("click",redColor)

function greenColor(params) {

    rectangle.style.backgroundColor = window.getComputedStyle(mesBoutons[2]).backgroundColor
}
mesBoutons[2].addEventListener("click", greenColor)

function blueColor(params) {
   
    rectangle.style.backgroundColor = window.getComputedStyle(mesBoutons[3]).backgroundColor
}
mesBoutons[3].addEventListener("click",blueColor)

function border(params) {
    
    rectangle.style.border = window.getComputedStyle(mesBoutons[4]).border
}
mesBoutons[4].addEventListener("click", border)

function dashBorder(params) {

    rectangle.style.border = window.getComputedStyle(mesBoutons[5]).border
}
mesBoutons[5].addEventListener("click",dashBorder)

function dotBorder(params) {
    
    rectangle.style.border = window.getComputedStyle(mesBoutons[6]).border
}
mesBoutons[6].addEventListener("click",dotBorder)

function border1(params) {
  
    rectangle.style.borderTop = window.getComputedStyle(mesBoutons[7]).borderTop
}
mesBoutons[7].addEventListener("click",border1)
function border2(params) {
  
    rectangle.style.borderTop = window.getComputedStyle(mesBoutons[8]).borderTop
}
mesBoutons[8].addEventListener("click",border2)
function border3(params) {
  
    rectangle.style.borderTop = window.getComputedStyle(mesBoutons[9]).borderTop
}
mesBoutons[9].addEventListener("click",border3)

//Suite exo

var zone2 = document.getElementById("section-change")
var mesInputs = zone2.getElementsByTagName("input")

function color(params) {  
    rectangle.style.backgroundColor = mesInputs[0].value
}
mesInputs[0].addEventListener("input",color)

function changeBorder(params) {
    rectangle.style.borderWidth = mesInputs[1].value +"px"
};
mesInputs[1].addEventListener("change", changeBorder)


function changeBorder1(params) {
    rectangle.style.borderTopWidth = mesInputs[2].value +"px"
};
mesInputs[2].addEventListener("change", changeBorder1)

function changeBorder2(params) {
    rectangle.style.borderRightWidth = mesInputs[3].value +"px"
};
mesInputs[3].addEventListener("change", changeBorder2)

function changeBorder3(params) {
    rectangle.style.borderBottomWidth = mesInputs[4].value +"px"
};
mesInputs[4].addEventListener("change", changeBorder3)

function changeBorder4(params) {
    rectangle.style.borderLeftWidth = mesInputs[5].value +"px"
};
mesInputs[5].addEventListener("change", changeBorder4)

function changeRadius(params) {
    rectangle.style.borderRadius = mesInputs[6].value+ "px"
}
mesInputs[6].addEventListener("change",changeRadius)

function changeRadius1(params) {
    rectangle.style.borderTopLeftRadius = mesInputs[7].value+ "px"
}
mesInputs[7].addEventListener("change",changeRadius1)

function changeRadius2(params) {
    rectangle.style.borderTopRightRadius = mesInputs[8].value+ "px"
}
mesInputs[8].addEventListener("change",changeRadius2)

function changeRadius3(params) {
    rectangle.style.borderBottomRightRadius = mesInputs[9].value+ "px"
}
mesInputs[9].addEventListener("change",changeRadius3)

function changeRadius4(params) {
    rectangle.style.borderBottomLeftRadius = mesInputs[10].value+ "px"
}
mesInputs[10].addEventListener("change",changeRadius4)
