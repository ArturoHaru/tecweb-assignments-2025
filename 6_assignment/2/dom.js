function ListItem(content, styleClass){
    let element = document.createElement("li")
    element.innerHTML = content
    element.classList.add(styleClass)
    return element
}

function PreOrderVisit(root, list, listCount){
    //se root è testo
    if(root.nodeType === document.TEXT_NODE) {
        //se non vuoto
        if(root.data.trim().length > 0 ){
            let newListElement = new ListItem(root.data,"text")
            list.appendChild(newListElement)
        }else{
            return
        }
    }else{
        //se root è commento
        if(root.nodeType === document.COMMENT_NODE){
            let newListElement = new ListItem(root.data, "comment")
            list.appendChild(newListElement)
        }else{
            //se è elemento
            let newListElement = new ListItem(root.nodeName,"element")
            list.appendChild(newListElement)

            let newList = document.createElement("ul")

            newList.id = listCount++ //prima assegna, poi incrementa
            //chiama ricorsivamente su tutti i figli
            list.appendChild(newList)
            root.childNodes.forEach(element => {
                PreOrderVisit(element, newList, listCount)
            });

        }
    }
}


function renderDOM(elementId, listId) {
    let element = document.getElementById(elementId)
    let list = document.getElementById(listId)

    PreOrderVisit(element,list,0)    
}

