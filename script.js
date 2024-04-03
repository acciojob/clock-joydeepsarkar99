let timer = document.querySelector("#timer")

setInterval(()=>{
    let date = new Date()
    let timeFormat = date.toLocaleString()
    timer.innerText = `${timeFormat}`
},1000)
