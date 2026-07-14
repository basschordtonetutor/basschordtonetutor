const FRETBOARD = [

// 1번줄(G)
[
    "G","G#","A","Bb","B","C","C#","D","Eb","E","F","F#",
    "G","G#","A","Bb","B","C","C#","D","Eb","E"
],

// 2번줄(D)
[
    "D","Eb","E","F","F#","G","G#","A","Bb","B","C","C#",
    "D","Eb","E","F","F#","G","G#","A","Bb","B"
],

// 3번줄(A)
[
    "A","Bb","B","C","C#","D","Eb","E","F","F#","G","G#",
    "A","Bb","B","C","C#","D","Eb","E","F","F#"
],

// 4번줄(E)
[
    "E","F","F#","G","G#","A","Bb","B","C","C#","D","Eb",
    "E","F","F#","G","G#","A","Bb","B","C","C#"
]

];

const fretboard = document.getElementById("fretboard");
const image = document.getElementById("fretboardImage");

// 이미지 크기
const imageWidth = image.clientWidth;
const imageHeight = image.clientHeight;

// 프렛 중앙 위치
const fretRatio = [

    0.0000,
    0.0228,
    0.0674,
    0.1154,
    0.1634,
    0.2115,
    0.2595,
    0.3075,
    0.3556,
    0.4036,
    0.4517,
    0.4966,
    0.5446,
    0.5926,
    0.6376,
    0.6856,
    0.7336,
    0.7817,
    0.8297,
    0.8777,
    0.9258,
    0.9736

];

const stringRatio = [

    0.125,
    0.375,
    0.625,
    0.875

];
// 1프렛 중앙 위치

// 프렛 간격


console.log("가로 :", imageWidth);
console.log("세로 :", imageHeight);

// 프렛과 줄 간격 계산
// 버튼 생성
for(let string = 0; string < 4; string++){

    for(let fret = 0; fret <= 21; fret++){

        const button = document.createElement("button");
        
        button.className = "fretButton";

        /* 몇 번째 버튼인지 보기 위한 표시
        button.textContent = fret;
        */
       
        // 데이터 저장
        button.dataset.string = string;
        button.dataset.fret = fret;

        // 위치 계산
        const x = fretRatio[fret] * imageWidth;
        const y = stringRatio[string] * imageHeight;

        button.style.left = (x - 10) + "px";
        button.style.top = (y - 10) + "px";




        // 클릭 테스트
    button.addEventListener("click", function(){

    const note = FRETBOARD[string][fret];

    if(button.classList.contains("selected")){

        // 선택 해제
        button.classList.remove("selected");

        const index = fretboardNotes.indexOf(note);

        if(index !== -1){

            fretboardNotes.splice(index, 1);

        }

    }else{

        // 선택
        button.classList.add("selected");

        fretboardNotes.push(note);

    }

    console.log("지판 :", fretboardNotes);

});

        fretboard.appendChild(button);

    }

}