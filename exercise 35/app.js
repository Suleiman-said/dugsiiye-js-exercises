
function changeImage(){
    const imgEl = document.querySelector("#img")
    const url = prompt("enter your image url")
    const borderColor = prompt("enter your desired border color")
    const width = prompt("please enter width")
    const height = prompt("please enter height")
    const borderRadius = prompt("please enter border radius")

    imgEl.setAttribute('src', url)
    imgEl.style.border = `2px solid ${borderColor}`
    imgEl.style.width = `${width}px`
    imgEl.style.height = `${height}px`
    imgEl.style.borderRadius = `${borderRadius}px`
    imgEl.style.padding = "10px"
    imgEl.style.backgroundColor = "#cfc2dc"
}
changeImage()