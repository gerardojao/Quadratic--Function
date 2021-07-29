let d = document,
firstElem,secondElem,thirdElem,
firstElemFocus=d.querySelector(".raiz1"),

btnCalc = d.getElementById("btnCalc"),
resultOne = d.getElementById("result1"),
resultTwo = d.getElementById("result2"),

btnCanc = d.getElementById("cancel"),
form = d.querySelector(".form"),
raices=d.querySelector(".raices"),
text = d.querySelector(".error")

let p = d.createElement("P")
p.classList.add("error","none")


form.addEventListener("keyup",e=>{
   firstElem = d.getElementById("raiz1").value,
    secondElem = d.getElementById("raiz2").value,
    thirdElem = d.getElementById("raiz3").value

}) 

const solucionRC1 = ()=>{
    return (-secondElem + Math.sqrt(parseInt(secondElem*secondElem) -4*parseInt(firstElem*thirdElem))) / parseInt(2*firstElem)
     
}

const solucionRC2 = ()=>{
    return (-secondElem - Math.sqrt(parseInt(secondElem*secondElem) -4*parseInt(firstElem*thirdElem))) / parseInt(2*firstElem)

}


const existeSolucionRC = ()=>{
   
    if(solucionRC1() && solucionRC2()) {
        raices.insertAdjacentElement("beforebegin",p)
        p.innerHTML="Las raices de la ecuación son:"
        p.classList.remove("none")
        raices.classList.remove("none")
        resultOne.value = solucionRC1().toFixed(1)
        resultTwo.value = solucionRC2().toFixed(1) 
       return 1
    }else {
        p.innerHTML="La ecuación no tiene raices"
        p.classList.remove("none")
        raices.classList.add("none")
       return 0 
    } 
   }




btnCalc.addEventListener("click",existeSolucionRC)     

btnCanc.addEventListener("click",()=>{
   
    resultOne.value=" "
    resultTwo.value=" "
    
    raices.classList.add("none")
    p.classList.add("none")
    firstElemFocus.focus()
    
    form.reset()

   
    
})

