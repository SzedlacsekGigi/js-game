
const createBoard = function(content1, content2, content3, content4, time){
    return `
        <div class="row">
            <div id="left-container" class="drag-container">
                <div class="left" id="l1">${content1}</div>
                <div class="left" id="l2">${content2}</div>
                <div class="left" id="l3">${content3}</div>
                <div class="left" id="l4">${content4}</div>
            </div>
            <div id="center">
                <div><span id="time">${time}</span></div>
            </div>
            <div id="right-container" class="drop-container">

            </div>
        </div>`;
};

const cardElementHTML = createBoard(
    'content 1',
    'content 2',
    'bla blu 3',
    'ke ka 4',
    '5:00');

document.querySelector('#container').innerHTML = cardElementHTML;


function startTimer(duration, display) {
    let timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

window.onload = function () {
    let fiveMinutes = 60 * 5,
        display = document.querySelector('#time');
    startTimer(fiveMinutes, display);
};



dragula([document.getElementById('left-container'), document.getElementById('right-container')], {

  accepts: function (el, target) {
    return target !== document.getElementById('left-container')
  }
});


/*function getOrder() {
    const el_one = document.querySelector('#l1');
    const order = el_one.dataset.dataOrder;
    console.log(order);
    const el_two = document.querySelector('#l2');
    console.log(el_two);
    const el_three = document.querySelector('#l3');
    console.log(el_three);
    const  el_four = document.querySelector('#l4');
    console.log(el_four);
} */

function getOrder() {
    let order = document.getElementsByClassName('left');
    let checkThis = (order[0].innerHTML + order[1].innerHTML + order[2].innerHTML + order[3].innerHTML);
    let spacefree = (checkThis.replace(/ /g,''));
    console.log(spacefree);
}
