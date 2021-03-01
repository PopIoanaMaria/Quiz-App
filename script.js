const quizData = [
    {
        question: 'Care este cel mai lung fluviu din Europa ?',
        a: 'Volga',
        b: 'Dunarea',
        c: 'Ural',
        d: 'Nistru',
        correct: 'a'
    },
    {
        question: 'Care este cel mai inal munte de pe glob?',
        a: 'Trivor',
        b: 'K2',
        c: 'Everest',
        d: 'Cho Oyu',
        correct: 'c'
    },
    {
        question: 'Cine a scris romanul "Ion" ?',
        a: 'Mihai Eminescu',
        b: 'Ion Creanga',
        c: 'Geoge Calinescu',
        d: 'Liviu Rebreanu',
        correct: 'd'
    },
    {
        question: 'In ce an a intrat Romania in Uniunea Europeana?',
        a: '2000',
        b: '1995',
        c: '2018',
        d: '2007',
        correct: 'd'
    },
    {
        question: 'Cate state are Statele Unite ale Americii?',
        a: '50',
        b: '25',
        c: '80',
        d: '62',
        correct: 'a'
    }
];

const quiz = document.getElementById("quiz");
const questionE1 = document.getElementById('question');
const answerEls = document.querySelectorAll(".answer");

const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');

const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz(){

    const currentQuizData = quizData[currentQuiz];
    questionE1.innerHTML = currentQuizData.question;

    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
   
}

function getSelected(){
    const answerEls = document.querySelectorAll(".answer");

    let answer = undefined;

    answerEls.forEach((answerEl) => {

        if(answerEl.checked){
            answer = answerEl.id;
        }
    });
    return answer;
    }


submitBtn.addEventListener('click', () => {
   
   const answer = getSelected();
   if(answer){
       if(answer === quizData[currentQuiz].correct){
           score++;
       }
       currentQuiz++;
       if(currentQuiz < quizData.length){
          loadQuiz();
       }else{
         alert(`You finish the quiz. Score: ${score}/${quizData.length}`);
        }
    }
});