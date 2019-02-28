
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
                <button onclick="getOrder()">Check it!</button>
            </div>
        </div>`;
const createTable = function(content_1, content_2, content_3, content_4, time) {
    const template = document.querySelector('#table');
    const clone = document.importNode(template.content, true);

    clone.querySelector('#l1').textContent = content_1;
    clone.querySelector('#l2').textContent = content_2;
    clone.querySelector('#l3').textContent = content_3;
    clone.querySelector('#l4').textContent = content_4;
    clone.querySelector('#time').textContent = time;

    return clone;
};

const tableContent  = createTable(
    'content 1',
    'content 2',
    'bla blu 3',
    'ke ka 4',
    '3:00'
);

document.querySelector('#container').appendChild(tableContent);




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


function getOrder() {
    let order = document.getElementsByClassName('left');
    let checkThis = (order[0].innerHTML + order[1].innerHTML + order[2].innerHTML + order[3].innerHTML);
    let spacefree = (checkThis.replace(/ /g,''));
    console.log(spacefree);
}
