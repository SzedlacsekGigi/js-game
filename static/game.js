let snippets = [["num_list = [1, 2, 3, 4]\n" + "new_number = 0",
        "for i in range(len(num_list)):" + "\n" + "new_number += 1",
        "num_list.append(new_number)",
        "return num_list"],
        ["első", "második","harmadik", "negyedik"]];

var round = 0;

/* function loadTask() {
        for (let snippet of snippets){
                let task = snippet.sort();
                document.getElementById("l1").innerHTML = task[0];
                document.getElementById("l2").innerHTML = task[1];
                document.getElementById("l3").innerHTML = task[2];
                document.getElementById("l4").innerHTML = task[3];

        }
        return snippet;
} */


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


function loadGame(round) {
    let taskBase = snippets[round];
    let task = [];
    for (let i = 0; i < taskBase.length; i++) {
        task[i] = taskBase[i];
    }
    let exercise = task.sort();
    document.getElementById("l1").innerHTML = exercise[0];
    document.getElementById("l2").innerHTML = exercise[1];
    document.getElementById("l3").innerHTML = exercise[2];
    document.getElementById("l4").innerHTML = exercise[3];
    return taskBase;
}


loadGame(round);

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
    let taskBase = loadGame(round);
    let correct = taskBase[0] + taskBase[1] + taskBase[2] + taskBase[3];
    let correctSpacefreeSolution = (correct.replace(/ /g,""));
    return correctSpacefreeSolution;
}

function checkPlayersSolution() {
    let SpaceFreeSolution = getOrder();
    let correctSpaceFreeSoltuion = getSolution();
    if (SpaceFreeSolution === correctSpaceFreeSoltuion){
        alert('Good answer');
        round = round + 1;
        loadGame(round)
        return true;
    } else {
        alert('The answer is wrong');
        return false;
    }
}

/*function countRounds() {
    let counter = 5
    if(checkPlayersSolution() == true){
        counter = counter-1;
        return counter;
    } else if(checkPlayersSolution()== false){
        counter = counter;
        return counter;
    }
}*/


document.querySelector('#counter').innerHTML = 5 - round;

