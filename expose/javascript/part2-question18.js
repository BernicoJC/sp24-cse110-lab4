function tellTime(){
    let d = new Date();
    let time = d.toLocaleDateString();
    console.log(time);
}

setInterval(tellTime, 1000); // func, delay -- delay is in milliseconds 