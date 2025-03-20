const startBtn = document.querySelector('.startbtn');
const popupInfo = document.querySelector('.popup-info');
const exitBtn=document.querySelector('.exit-btn');
const main=document.querySelector('.main');
const continueBtn=document.querySelector('.continue-btn');
const newPage=document.querySelector('.category');
const quizSection=document.querySelector('.quiz-section');
const quizBox=document.querySelector('.quiz-box');
const home=document.querySelector('.active');


startBtn.onclick = () => {
    popupInfo.classList.add('active');
   main.classList.add('active');
}
exitBtn.onclick = () => {
    popupInfo.classList.remove('active');
    main.classList.remove('active');
}

continueBtn.onclick = () => {
    newPage.classList.add('active');
    popupInfo.classList.remove('active');
    main.classList.remove('active'); 
    
}
home.onclick = () =>{
window.location.href = "QUIZ.html";
}
// let questioncount=0;

// const nextBtn=document.querySelector('.next-button');

// nextBtn.onclick = () => {
//    questioncount++;
//    showQuestion(questioncount);
// }
// function showQuestion(index) {
//     const questionText = document.querySelector('.question-text');
//     questionText.textcontent = `${questions[index].numb}. ${questions[index].question}`;
// }


