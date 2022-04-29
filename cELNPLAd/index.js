// javascript
let myEmojis = ["🤗","🤑","🤭","😁","🎊","🎋","🎍","🎎","🎏"]
const display = document.getElementById("display-emoji")
const addBtnStart = document.getElementById("add-start")
const addBtnEnd = document.getElementById("add-end")
const removeBtnStart = document.getElementById("remove-start")
const removeBtnEnd = document.getElementById("remove-end")
const inputValue = document.getElementById("user-input")

function render(){
    display.innerHTML = "";
    for(let i = 0 ; i < myEmojis.length; i++){
        const emoji = document.createElement('span')
        emoji.textContent = myEmojis[i]
        display.append(emoji)
    }
    
}

addBtnStart.addEventListener("click",function(){
    if (inputValue.value){
        myEmojis.push(inputValue.value)
        inputValue.value = ""
        render()}
        })
addBtnEnd.addEventListener("click",function(){
    if (inputValue.value){
        myEmojis.unshift(inputValue.value)
        inputValue.value = ""
        render()}
        })
        
    removeBtnEnd.addEventListener("click",function(){
    if (myEmojis){
        render()
        myEmojis.shift(myEmojis)
        inputValue.value = ""
        render()}
        })
        
         removeBtnStart.addEventListener("click",function(){
    if (myEmojis){
        render()
        myEmojis.pop(myEmojis)
        render()}
        })