"use strict";var firstElem,secondElem,thirdElem,d=document,firstElemFocus=d.querySelector(".raiz1"),btnCalc=d.getElementById("btnCalc"),resultOne=d.getElementById("result1"),resultTwo=d.getElementById("result2"),btnCanc=d.getElementById("cancel"),form=d.querySelector(".form"),raices=d.querySelector(".raices"),text=d.querySelector(".error"),p=d.createElement("P");p.classList.add("error","none"),form.addEventListener("keyup",(function(e){firstElem=d.getElementById("raiz1").value,secondElem=d.getElementById("raiz2").value,thirdElem=d.getElementById("raiz3").value}));var solucionRC1=function(){return(-secondElem+Math.sqrt(parseInt(secondElem*secondElem)-4*parseInt(firstElem*thirdElem)))/parseInt(2*firstElem)},solucionRC2=function(){return(-secondElem-Math.sqrt(parseInt(secondElem*secondElem)-4*parseInt(firstElem*thirdElem)))/parseInt(2*firstElem)},existeSolucionRC=function(){return solucionRC1()&&solucionRC2()?(raices.insertAdjacentElement("beforebegin",p),p.innerHTML="Las raices de la ecuación son:",p.classList.remove("none"),raices.classList.remove("none"),resultOne.value=solucionRC1().toFixed(1),resultTwo.value=solucionRC2().toFixed(1),1):(p.innerHTML="La ecuación no tiene raices",p.classList.remove("none"),raices.classList.add("none"),0)};btnCalc.addEventListener("click",existeSolucionRC),btnCanc.addEventListener("click",(function(){resultOne.value=" ",resultTwo.value=" ",raices.classList.add("none"),p.classList.add("none"),firstElemFocus.focus(),form.reset()}));