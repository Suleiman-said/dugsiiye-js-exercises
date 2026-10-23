const colorPicker = document.querySelector("#colorPicker")
const colorPreview = document.querySelector("#colorPreview")
const colorHistory = document.querySelector("#colorHistory")
const clearHistory = document.querySelector("#clearHistory")

colorPicker.addEventListener('input', function(){
    const selectColor = colorPicker.value
    colorPreview.style.backgroundColor = selectColor
    addColorHistory(selectColor)
})
const addColorHistory = (color) =>{
    let li = document.createElement('li')
    li.textContent = color
    li.style.color = color
    colorHistory.appendChild(li)
}

clearHistory.addEventListener('click',function(){
    colorHistory.innerHTML = " "
})