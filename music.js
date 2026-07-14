// ================================
// 문제 DB
// ================================

const QUESTION_DB = [

    { root:"C", quality:"7", notes:["C","E","G","Bb"] },
    { root:"C", quality:"7sus4", notes:["C","F","G","Bb"] },


    // D
    { root:"D", quality:"m7", notes:["D","F","A","C"] },
    { root:"D", quality:"7", notes:["D","F#","A","C"] },

    // Eb
    { root:"Eb", quality:"7", notes:["Eb","G","Bb","Db"] },

    // E
    { root:"E", quality:"7", notes:["E","G#","B","D"] },
    { root:"E", quality:"m7b5", notes:["E","G","Bb","D"] },

    // F
    { root:"F", quality:"Maj7", notes:["F","A","C","E"] },
    { root:"F", quality:"6", notes:["F","A","C","D"] },


    // G
    { root:"G", quality:"m7", notes:["G","Bb","D","F"] },
    { root:"G", quality:"7", notes:["G","B","D","F"] },


    // A
    { root:"A", quality:"m7", notes:["A","C","E","G"] },
    { root:"A", quality:"7", notes:["A","C#","E","G"] },

    // Bb
    { root:"Bb", quality:"m7", notes:["Bb","Db","F","Ab"] },

    // B
    { root:"B", quality:"m7b5", notes:["B","D","F","A"] }

];

// ================================
// 버튼 목록
// ================================

const NOTE_BUTTONS = [

    "C",

    "C#",
    "Db",

    "D",

    "D#",
    "Eb",

    "E",

    "F",

    "F#",
    "Gb",

    "G",

    "G#",
    "Ab",

    "A",

    "A#",
    "Bb",

    "B"

];

// ================================
// 문제 생성
// ================================

function createQuestion(){

    const randomIndex =
        Math.floor(Math.random()*QUESTION_DB.length);

    return QUESTION_DB[randomIndex];

}