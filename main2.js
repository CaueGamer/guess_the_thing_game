player1name = localStorage.getItem("player1name");
player2name = localStorage.getItem("player2name");

document.getElementById("Caue").innerHTML = player1name + " : ";
document.getElementById("Jess").innerHTML = player2name + " : ";

player1score = 0;
player2score = 0;

document.getElementById("points1").innerHTML = player1score;
document.getElementById("points2").innerHTML = player2score;

document.getElementById("playerTurn1").innerHTML = "turno de pergunta - " + player1name;
document.getElementById("playerTurn2").innerHTML = "turno de resposta - " + player2name;

function MandarBalaNaTuaCara()
{
getWord = document.getElementById("mundo").value;
word = getWord.toLowerCase();

charAt1 = word.charAt(1);

lenghtDivide2 = Math.floor(word.length/2);
charAt2 = word.charAt(lenghtDivide2);

lenghtMinus1 = word.length - 1;
charAt3 = word.charAt(lengthMinus1);

removeCharAt1 = word.replace(charAt1, "_");
removeCharAt2 = removeCharAt1.replace(charAt2, "_");
removeCharAt3 = removeCharAt2.replace(charAt3, "_");

questionWord = "<h4 id='wordDisplay'> P. "+removeCharAt3+"</h4>";
input_box = "<br>Resposta : <input type='text' id='inputCheckBox'>";
checkButton = "<br><br><button class='btn btn-info' onclick='check()'>Checar</button>";
row = questionWord + input_box + checkButton ;
document.getElementById("output").innerHTML = row;
document.getElementById("word").value = "";
}

questionTurn = "player1";
answerTurn = "player2";

function check()
{
    getAnswer = document.getElementById("inputCheckBox").value;
    answer = getAnswer.toLowerCase();

if (answer==word) 
{
    if(answerTurn == "player1")
    {
        player1score = player1score +1;
        document.getElementById("points1").innerHTML = player1Score;
    }
    else
    {
        player2score = player2score +1;
        document.getElementById("points2").innerHTML = player2Score;
    }
}
if (questionTurn == "player1") 
{
questionTurn = "player2";
document.getElementById("playerturn1").innerHTML = "Turno de Pergunta: " + player2name;
}
else
{
    questionTurn = "player1";
    document.getElementById("playerturn1").innerHTML = "Turno de Pergunta: " + player1name;    
}
if (answerTurn == "player1") 
{
answerTurn = "player2";
document.getElementById("playertur2").innerHTML = "Turno de Pergunta: " + player2name;
}
else
{
    answerTurn = "player1";
    document.getElementById("playerturn2").innerHTML = "Turno de Resposta: " + player1name;    
}
document.getElementById("output").innerHTML = "";
}