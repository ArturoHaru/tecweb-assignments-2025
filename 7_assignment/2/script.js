"use strict";


document.getElementById("new_artwork").addEventListener("click", displayPainting)


function Painting(title, author, link){
    this.title = title,
    this.author = author,
    this.link = link
}


async function displayPainting(){
    let painting = await getPainting()

    document.getElementById("artwork_image").src = painting.link
    document.getElementById("artwork_title").innerHTML = painting.title
    document.getElementById("artwork_artist").innerHTML = painting.author
}

async function getPainting() {
    let keywords = document.getElementById("keywords").value
    let request = `https://api.artic.edu/api/v1/artworks/search?limit=100&q=${keywords}`
    let result = await sendRequest(request)

    if(result.data.length == 0){
        return new Painting("","","./img/404.png")
    }
    
    let randomIndex = Math.floor(Math.random()*result.data.length)

    let firstResult = result.data[randomIndex]
    let api_link = firstResult.api_link

    result = await sendRequest(api_link)
    
    let title = result.data.title
    let author = result.data.artist_title
    let image_id = result.data.image_id

    let link = `https://www.artic.edu/iiif/2/${image_id}/full/843,/0/default.jpg`


    return new Painting(title,author,link)
}

async function sendRequest(request){
    let response = await fetch(request)
    let result
    if (response.ok) {
        result = await response.json()
    }else{
        console.log("Error in request")
    }
    return result
}