const container = document.querySelector('.container')
const text = document.querySelector('#text')

const time =7500
const time2 =(time/5)

textslider()
function textslider(){
    text.innerHTML = 'Hello Abiy How Are You !'
    setTimeout(() => {
        text.innerText ='I am fine how about you  linda!'
        setTimeout(() => {
            text.innerText ='I am so good !'
            setTimeout(() => {
                text.innerText = 'I will tell you something today '
                setTimeout(() => {
                    text.innerText = 'Ok Call Me When You Finish Your Job'
                }, time2);
            }, time2);
        }, time2);
    }, time2);
}

setInterval(textslider,time)