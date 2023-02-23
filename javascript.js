function timedate(){
    // console.log("hello")
    let time_zone = new Date();
    let h =time_zone.getHours();
    let m =time_zone.getMinutes();
    let s =time_zone.getSeconds();
    let pm = "AM";
    if(h === 0){
        h =  12 ;
    }

    if(h > 12){
        h = h - 12 ;
        pm = "PM";
    }

    h = (h < 10) ? `0${h}` : h ;
    s = (s < 10) ? `0${s}` : s ;
    m = (m < 10) ? `0${m}` : m ;
    let time = `${h}:${m}:${s} ${pm}`;
    console.log(time)    
    t=document.querySelector(".clock").innerText=time;

}

setInterval(timedate , 1000)