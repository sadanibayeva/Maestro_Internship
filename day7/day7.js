document.querySelector(".div button").addEventListener("click", function(){
        let soz=document.getElementsByClassName("yaz")[0].value
        let derece=document.getElementsByClassName("inputt")[0].value

    let k=document.createElement("div")
    k.classList.add("div1")
    let k1=document.createElement("div")
    k1.classList.add("soz")
    let list=document.createElement("input")
    let txt=document.createTextNode(soz)
    let list1=document.createElement("h6")
    let txt1=document.createTextNode(derece)
    list.classList.add("newinput")
    list.value=soz
    list.readOnly=true
    list1.appendChild(txt1)
    k1.appendChild(list)
    k1.appendChild(list1)

    let k2=document.createElement("div")
    k2.classList.add("isare")
    let ico=document.createElement("i")
    k2.appendChild(ico)
    ico.classList.add('fa-solid')
    ico.classList.add('fa-pen')
    let ico1=document.createElement("i")
    k2.appendChild(ico1)
    ico1.classList.add('fa-regular')
    ico1.classList.add('fa-trash-can')

    k.appendChild(k1)
    k.appendChild(k2)
    let secondpart = document.getElementById('secondpart');
    secondpart.appendChild(k)
    

        ico.addEventListener("click",()=>{
            if(list.readOnly){
                list.readOnly=false
            }else{
                list.readOnly=true
            }
        })
    // ico.addEventListener("click",()=>{
    //     if(list.contentEditable=="false"){    
    //         list.contentEditable="true"
    //     }else{
    //        list.contentEditable="false"
    //     }
    // })

    ico1.addEventListener("click", function(){
        ico1.parentNode.parentNode.remove()
    })
});