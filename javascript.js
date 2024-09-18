const arr = ["Rock", "Paper", "Scissor"];

var wins = 0;
var losses = 0;
var ties = 0;

function random(mn, mx) {
    return Math.random() * (mx - mn) + mn;
}

function GFG_Fun() {
    return arr[(Math.floor(random(1, 4))) - 1];
}

let computer = GFG_Fun();

function inp()
{
    var x;
    var rock = document.getElementById('input1');
    if(rock.checked)
    {
        x = document.getElementById('input1').value;
        rock.checked = false;
    }
    var paper = document.getElementById('input2');
    if(paper.checked)
    {
        x = document.getElementById('input2').value;
        paper.checked = false;
    }
    let scissor = document.getElementById('input3');
    if(scissor.checked)
    {
        x = document.getElementById('input3').value;
        scissor.checked = false;
    }
    evaluate(x);
}

function evaluate(user) {
    document.getElementById("demo").innerHTML ="";
    if(wins+losses+ties>=5)
    {
        wins=0;
        losses=0;
        ties=0;
        document.getElementById("demo").innerHTML ="Starting new game.";
    }
    if (user == "Rock") {
        if (computer == "Rock") {
            ties++;
        }
        else if (computer == "Paper") {
            losses++;
        }
        else {
            wins++;
        }
    }
    else if (user == "Paper") {
        if (computer == "Rock") {
            wins++;
        }
        else if (computer == "Paper") {
            ties++;
        }
        else {
            losses++;
        }
    }
    else {
        if (computer == "Rock") {
            losses++;
        }
        else if (computer == "Paper") {
            wins++;
        }
        else {
            ties++;
        }
    }
    console.log(computer);
    console.log(user);
    console.log(wins + losses + ties)
    // document.getElementById("output").innerHTML = "YOU  " + wins + ":" + losses +" Computer";
    document.getElementById("demo1").innerHTML ="Computer chooses " + computer;
    document.getElementById("demo2").innerHTML ="Wins: " + wins + " Losses: " + losses + " Ties: " + ties;
    computer = GFG_Fun();
}



