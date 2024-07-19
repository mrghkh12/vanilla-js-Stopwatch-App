const $ = document

let [soconds, minutes, hours] = [0,0,0];
let timerElem = $.querySelector('.timer')
let ctrlBtns = $.querySelector('.ctrlBtns')
let timeOut = null
let isRun = false

ctrlBtns.addEventListener('click', e => {
    if(e.target.src){
        if(e.target.src.includes('start')){
            stsrtTimer()
        }else if(e.target.src.includes('stop')){
            stopTimer()
        }else if(e.target.src.includes('reset')){
            resetTimer()
        }
    }
})

function stsrtTimer(){
    if(!isRun){
        isRun = true
        timeOut = setInterval(()=>{
            soconds++
            if(soconds == 60) soconds=0 , minutes++;
            if(minutes == 60) minutes=0 , hours++;
    
            let socondsStr = soconds < 10 ? '0' + soconds : soconds
            let minutesStr = minutes < 10 ? '0' + minutes : minutes
            let hoursStr = hours < 10 ? '0' + hours : hours
        
            timerElem.innerHTML = hoursStr + ':' + minutesStr + ':' + socondsStr
        }, 1000)
    }
}

function stopTimer(){
    clearInterval(timeOut)
    isRun = false
}

function resetTimer(){
    [soconds, minutes, hours] = [0,0,0];
    clearInterval(timeOut)
    timerElem.innerHTML = '00:00:00';
    isRun = false
}