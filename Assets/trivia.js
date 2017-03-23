var wins = 0;
var losses = 0;



//hide the div with quiz questions until user presses start button.
var hide = $(".quiz").hide();

$(".btn-sample").click(function() {
    hide = $(".quiz").show();
});

//For each question I created a function where I changed changed the html with dom manipulation and creating click events that expire. 
function questionOne() {
    var question1 = ["Which of the following is not one of the four main Hogwart houses?", "Hufflepuff", "Raven Claw", "Gryffindor", "Slythersnake", "4"];
    document.getElementById("mainQuestion").innerHTML = question1[0];
    //buttons
    document.getElementById("questionCounter").innerHTML = "Question: " + 1;
    var button1 = document.getElementById("option1").innerHTML = question1[1];
    var button2 = document.getElementById("option2").innerHTML = question1[2];
    var button3 = document.getElementById("option3").innerHTML = question1[3];
    var button4 = document.getElementById("option4").innerHTML = question1[4];

    $("#option4").one("click", function() {
        wins++;
        document.getElementById("correct").innerHTML = "Correct: " + wins;
        questionTwo();
        count = 31;
    })

    $("#option1, #option2, #option3").one("click", function() {
        questionTwo();
        count = 31;
    })
};
questionOne();


function questionTwo() {
    var question2 = ["Leonardo DiCaprio won an oscar for best actor in what movie?", "The Revenant", "Titanic", "Django Unchained", "The Departed", "1"];
    document.getElementById("mainQuestion").innerHTML = question2[0];
    //buttons
    document.getElementById("questionCounter").innerHTML = "Question: " + 2;
    var button1 = document.getElementById("option1").innerHTML = question2[1];
    var button2 = document.getElementById("option2").innerHTML = question2[2];
    var button3 = document.getElementById("option3").innerHTML = question2[3];
    var button4 = document.getElementById("option4").innerHTML = question2[4];

    $("#option1").one("click", function() {
        wins++;
        document.getElementById("correct").innerHTML = "Correct: " + wins;
        questionThree();
        count = 31;
    })

    $("#option2, #option3, #option4").one("click", function() {
        questionThree();
        count = 31;
    })
};

function questionThree() {
    var question3 = ["Which actor played the character Tyler Durden in Fight Club?", "Ed Norton", "Bruce Willis", "Brad Pitt", "Johnny Depp", "3"];
    document.getElementById("mainQuestion").innerHTML = question3[0];
    //buttons
    document.getElementById("questionCounter").innerHTML = "Question: " + 3;
    var button1 = document.getElementById("option1").innerHTML = question3[1];
    var button2 = document.getElementById("option2").innerHTML = question3[2];
    var button3 = document.getElementById("option3").innerHTML = question3[3];
    var button4 = document.getElementById("option4").innerHTML = question3[4];

    $("#option3").one("click", function() {
        wins++;
        document.getElementById("correct").innerHTML = "Correct: " + wins;
        questionFour();
        count = 31;
    })

    $("#option1, #option2, #option4").one("click", function() {
        questionFour();
        count = 31;
    })
};

function questionFour() {
    var question4 = ["Who directed the epic historical drama Schindler's List in 1993?", "Martin Scorsese", "Steven Spielberg", "James Cameron", "Wes Anderson", "2"];
    document.getElementById("mainQuestion").innerHTML = question4[0];
    //buttons
    document.getElementById("questionCounter").innerHTML = "Question: " + 4;
    var button1 = document.getElementById("option1").innerHTML = question4[1];
    var button2 = document.getElementById("option2").innerHTML = question4[2];
    var button3 = document.getElementById("option3").innerHTML = question4[3];
    var button4 = document.getElementById("option4").innerHTML = question4[4];

    $("#option2").one("click", function() {
        wins++;
        document.getElementById("correct").innerHTML = "Correct: " + wins;
        questionFive();
        count = 31;
    })

    $("#option1, #option3, #option4").one("click", function() {
        questionFive();
        count = 31;
    })
};

function questionFive() {
    var question5 = ["The Pixar hit Toy Story came out in what year?", "1990", "2000", "1992", "1995", "4"];
    document.getElementById("mainQuestion").innerHTML = question5[0];
    //buttons
    document.getElementById("questionCounter").innerHTML = "Question: " + 5;
    var button1 = document.getElementById("option1").innerHTML = question5[1];
    var button2 = document.getElementById("option2").innerHTML = question5[2];
    var button3 = document.getElementById("option3").innerHTML = question5[3];
    var button4 = document.getElementById("option4").innerHTML = question5[4];

    $("#option4").one("click", function() {
        wins++;
        document.getElementById("correct").innerHTML = "Correct: " + wins;
        questionSix();
        count = 31;
    })

    $("#option1, #option2, #option3").one("click", function() {
        questionSix();
        count = 31;
    })
};

function questionSix() {
    var question6 = ["What did the Tinman want in the classic Wizard of Oz?", "Courage", "A heart", "A brain", "Rust free arm", "2"];
    document.getElementById("mainQuestion").innerHTML = question6[0];
    //buttons
    document.getElementById("questionCounter").innerHTML = "Question: " + 6;
    var button1 = document.getElementById("option1").innerHTML = question6[1];
    var button2 = document.getElementById("option2").innerHTML = question6[2];
    var button3 = document.getElementById("option3").innerHTML = question6[3];
    var button4 = document.getElementById("option4").innerHTML = question6[4];

    $("#option2").one("click", function() {
        wins++;
        document.getElementById("correct").innerHTML = "Correct: " + wins;
        questionSeven();
        count = 31;
    })

    $("#option1, #option3, #option4").one("click", function() {
        questionSeven();
        count = 31;
    })
};

function questionSeven() {
    var question7 = ["What is Neo's real name in the Matrix?", "Kevin Torres", "Steve Williams", "Thomas Anderson", "Peter Myers", "3"];
    document.getElementById("mainQuestion").innerHTML = question7[0];
    //buttons
    document.getElementById("questionCounter").innerHTML = "Question: " + 7;
    var button1 = document.getElementById("option1").innerHTML = question7[1];
    var button2 = document.getElementById("option2").innerHTML = question7[2];
    var button3 = document.getElementById("option3").innerHTML = question7[3];
    var button4 = document.getElementById("option4").innerHTML = question7[4];

    $("#option3").one("click", function() {
        wins++;
        document.getElementById("correct").innerHTML = "Correct: " + wins;
        questionEight();
        count = 31;
    })

    $("#option1, #option2, #option4").one("click", function() {
        questionEight();
        count = 31;
    })
};

function questionEight() {
    var question8 = ["What is the name of Yoda's home planet", "Dagobah", "Coruscant", "Tatooine", "Endor", "1"];
    document.getElementById("mainQuestion").innerHTML = question8[0];
    //buttons
    document.getElementById("questionCounter").innerHTML = "Question: " + 8;
    var button1 = document.getElementById("option1").innerHTML = question8[1];
    var button2 = document.getElementById("option2").innerHTML = question8[2];
    var button3 = document.getElementById("option3").innerHTML = question8[3];
    var button4 = document.getElementById("option4").innerHTML = question8[4];

    $("#option1").one("click", function() {
        wins++;
        document.getElementById("correct").innerHTML = "Correct: " + wins;
        questionNine();
        count = 31;
    })

    $("#option2, #option3, #option4").one("click", function() {
        questionNine();
        count = 31;
    })
};

function questionNine() {
    var question9 = ["Which of these isn't a character in Tarantino's Reservoir Dogs?", "Mr.Pink", "Mr.Green", "Mr.Blonde", "Mr.Orange", "2"];
    document.getElementById("mainQuestion").innerHTML = question9[0];
    //buttons
    document.getElementById("questionCounter").innerHTML = "Question: " + 9;
    var button1 = document.getElementById("option1").innerHTML = question9[1];
    var button2 = document.getElementById("option2").innerHTML = question9[2];
    var button3 = document.getElementById("option3").innerHTML = question9[3];
    var button4 = document.getElementById("option4").innerHTML = question9[4];

    $("#option2").one("click", function() {
        wins++;
        document.getElementById("correct").innerHTML = "Correct: " + wins;
        questionTen();
        count = 31;
    })

    $("#option1, #option3, #option4").one("click", function() {
        questionTen();
        count = 31;
    })
};

function questionTen() {
    var question10 = ["What animal was Pumbaa in Lion King?", "Meerkat", "Bull", "Hyena", "Warthog", "4"];
    document.getElementById("mainQuestion").innerHTML = question10[0];
    //buttons
    document.getElementById("questionCounter").innerHTML = "Question: " + 10;
    var button1 = document.getElementById("option1").innerHTML = question10[1];
    var button2 = document.getElementById("option2").innerHTML = question10[2];
    var button3 = document.getElementById("option3").innerHTML = question10[3];
    var button4 = document.getElementById("option4").innerHTML = question10[4];

    $("#option4").one("click", function() {
        wins++;
        document.getElementById("correct").innerHTML = "Correct: " + wins;
        finale();
        count = 99999999999;
    })

    $("#option1, #option2, #option3").one("click", function() {
        finale();
        count = 99999999999;
    })
};

//display gif and option to restart the game by clicking on any button which resets the wins
function finale() {
    var restart = ["Click any of the buttons to restart the game!", "Thank you", "For playing", "My game", "Click me!"];
    document.getElementById("mainQuestion").innerHTML = restart[0];
    //buttons
    document.getElementById("questionCounter").innerHTML = "Question: ";
    var button1 = document.getElementById("option1").innerHTML = restart[1];
    var button2 = document.getElementById("option2").innerHTML = restart[2];
    var button3 = document.getElementById("option3").innerHTML = restart[3];
    var button4 = document.getElementById("option4").innerHTML = restart[4];

    $("#option1, #option2, #option3, #option4").one("click", function() {
        wins = 0;
        questionOne();
        count = 31;
    })
};
//
//timer that counts down 
var count = 35;

var counter = setInterval(timer, 1000);

function timer() {
    count = count - 1;
    if (count <= 0) {
        clearInterval(counter);
        alert("Gotta be faster than that!")
        return;
    }

    $("#Timer").html("Time left: " + count);
}
