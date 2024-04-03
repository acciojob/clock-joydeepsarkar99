let timer = document.querySelector("#timer")

function displayTime() {
    let date = new Date()
    let dateFormat = (date.getMonth() + 1) + "/" + date.getDate() + "/" + date.getFullYear()
    let timeFormat = date.toLocaleString([], {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
    })

    let current = dateFormat + ', ' + timeFormat
    timer.innerText = `${current}`
}

setInterval(displayTime,1000)
