let item2= document.getElementById("item2")
  item2.addEventListener('click',()=>{

    alert(item2.parentNode.textContent)
    let prev= item2.previousElementSibling
    let next = item2.nextElementSibling;

    if(prev) console.log("Previous Sibling:", prev.textContent)
    if(next) console.log("Next Sibling:", next.textContent)
    })