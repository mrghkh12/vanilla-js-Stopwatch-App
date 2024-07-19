const $ = document

let [soconds, minutes, hours] = [0,0,0];
let timerElem = $.querySelector('.timer')
let ctrlBtns = $.querySelector('.ctrlBtns')

ctrlBtns.addEventListener('click', e => {
    if(e.target.src){
        if(e.target.src.includes('start')){
            console.log('start');
        }else if(e.target.src.includes('stop')){
            console.log('stop');
        }else if(e.target.src.includes('reset')){
            console.log('reset');
        }
    }
})