const $ = document

let [soconds, minutes, hours] = [0,0,0];
let timerElem = $.querySelector('.timer')
let ctrlBtns = $.querySelector('.ctrlBtns')
let timeOut = null

ctrlBtns.addEventListener('click', e => {
    if(e.target.src){
        if(e.target.src.includes('start')){
            stsrtTimer()
        }else if(e.target.src.includes('stop')){
            console.log('stop');
        }else if(e.target.src.includes('reset')){
            console.log('reset');
        }
    }
})

function stsrtTimer(){
    if(soconds === 0){
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