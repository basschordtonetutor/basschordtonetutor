const questionText = document.getElementById("question");
const nextButton = document.getElementById("nextQuestion");
const noteButtons = document.getElementById("noteButtons");
const submitNoteButton = document.getElementById("submitNote");
const submitFretboardButton = document.getElementById("submitFretboard");
const result = document.getElementById("result");

let selectedNotes = [];      // 코드톤 버튼
let fretboardNotes = [];     // 지판 버튼

let currentQuestion = null;
let startDegree = 0;

// ------------------------------
// 음 버튼 생성
// ------------------------------

NOTE_BUTTONS.forEach(function(note){

    const button = document.createElement("button");

    button.textContent = note;

    button.addEventListener("click", function(){

        if(selectedNotes.includes(note)){

            selectedNotes = selectedNotes.filter(function(n){
                return n !== note;
            });

            button.classList.remove("selected");

        }else{

            selectedNotes.push(note);

            button.classList.add("selected");

        }

        console.log("선택한 음 :", selectedNotes);

    });

    noteButtons.appendChild(button);

});

// ------------------------------
// 문제 출제
// ------------------------------

nextButton.addEventListener("click", function(){
    console.log("제출 버튼 눌림");
        console.log("사용자 선택 :", selectedNotes);
    console.log("현재 문제 :", currentQuestion);

    currentQuestion = createQuestion();

startDegree = Math.floor(Math.random() * 4);

const degreeText = [
    "Root",
    "3도",
    "5도",
    "7도"
];

questionText.innerHTML =
    currentQuestion.root +
    currentQuestion.quality +
    "<br><br>" +
    degreeText[startDegree] +
    "부터 시작하는 코드톤은?";

    selectedNotes = [];
    fretboardNotes = [];

    result.textContent = "아직 채점 전";

    const buttons = noteButtons.querySelectorAll("button");
    const fretButtons =
    document.querySelectorAll(".fretButton");

    fretButtons.forEach(function(button){

    button.classList.remove("selected");

});

    buttons.forEach(function(button){
        button.classList.remove("selected");
    });

    console.log("현재 문제 :", currentQuestion);

});

// ------------------------------
// 제출
// ------------------------------
function checkAnswer(answerNotes){

    const correctNotes =
    currentQuestion.notes
        .slice(startDegree)
        .concat(
            currentQuestion.notes.slice(0, startDegree)
        );

    console.log("사용자 :", answerNotes);
    console.log("정답 :", correctNotes);

    let correct = true;

    // 개수 확인
    if(answerNotes.length !== correctNotes.length){

        correct = false;

    }

    // 순서 확인
    for(let i = 0; i < correctNotes.length; i++){

        if(answerNotes[i] !== correctNotes[i]){

            correct = false;
            break;

        }

    }

    if(correct){

        result.textContent = "✅ 정답!";

    }else{

        result.textContent =
        "❌ 오답 (정답 : " +
        correctNotes.join(", ") +
        ")";

    }

}

submitNoteButton.addEventListener("click", function(){

    if(currentQuestion === null){

        result.textContent = "먼저 문제를 출제하세요.";

        return;

    }

    checkAnswer(selectedNotes);

});

submitFretboardButton.addEventListener("click", function(){

    if(currentQuestion === null){

        result.textContent = "먼저 문제를 출제하세요.";

        return;

    }

    checkAnswer(fretboardNotes);

});