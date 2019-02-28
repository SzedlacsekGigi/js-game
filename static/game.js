
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
                <button onclick="checkPlayersSolution()">Check it!</button>
                <button onclick="getTime()">Get Exact Time</button>
            </div>
        </div>`;
};

const cardElementHTML = createBoard(
    'content 1',
    'content 2',
    'bla blu 3',
    'ke ka 4',
    '03:00');

document.querySelector('#container').innerHTML = cardElementHTML;


function startTimer(duration, display) {
    let timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

       /* if (--timer < 0) {
            timer = duration;
        }*/
        if (--timer == 0, 0, 0){
            return alert('You run out of time!')
        }
    }, 1000);
}

window.onload = function () {
    let threeMinutes = 60 * 3,
        display = document.querySelector('#time');
    startTimer(threeMinutes, display);
};



dragula([document.getElementById('left-container'), document.getElementById('right-container')], {

  accepts: function (el, target) {
    return target !== document.getElementById('left-container')
  }
});


function getOrder() {
    let order = document.getElementsByClassName('left');
    let checkThis = (order[0].innerHTML + order[1].innerHTML + order[2].innerHTML + order[3].innerHTML);
    let SpacefreeSolution = (checkThis.replace(/ /g,''));
    return SpacefreeSolution;
}

function getTime() {
    let getExactTime = document.getElementById('time');
    console.log(getExactTime.textContent);
}

function getSolution() {
    let correct = snippets.id1 + snippets.id2 + snippets.id3 + snippets.id4;
    let correctSpacefreeSolution = (correct.replace(/ /g,""));
    return correctSpacefreeSolution;
}

function checkPlayersSolution() {
    SpaceFreeSolution = getOrder();
    correctSpaceFreeSoltuion = getSolution();
    if (SpaceFreeSolution == correctSpaceFreeSoltuion){
        alert('Good answer')
    } else {
        alert('The answer is wrong')
    }
}