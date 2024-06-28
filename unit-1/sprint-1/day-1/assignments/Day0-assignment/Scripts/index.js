// Define variables for DOM elements
const questionElement = document.getElementById('question');
const answersElement = document.getElementById('options');
const timerElement = document.getElementById('time-left');
const scoreElement = document.getElementById('current-score');
const nextButton = document.getElementById('next-button');

// Define the quiz data
const quizData = [
    {
        question: 'What is the capital of France?',
        answers: ['Paris', 'London', 'Berlin', 'Madrid'],
        correctAnswer: 'Paris',
    },
    {
        question: 'Which planet is known as the Red Planet?',
        answers: ['Earth', 'Mars', 'Venus', 'Jupiter'],
        correctAnswer: 'Mars',
    },
    {
        question: 'What is 1+1?',
        answers: ['2', '1', '3', '4'],
        correctAnswer: '2',
    }    
];

// Initialize variables for quiz state
let currentQuestionIndex = 0;
let score = 0;
let timeLeft = 60;
let timer;

// Function to load a question
function loadQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    answersElement.innerHTML = '';
    
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement('button');
        button.textContent = answer;
        button.classList.add('option');
        button.addEventListener('click', () => selectAnswer(answer));
        answersElement.appendChild(button);
    });
}

// Function to select an answer
function selectAnswer(selectedAnswer) {
    const currentQuestion = quizData[currentQuestionIndex];
    if (selectedAnswer === currentQuestion.correctAnswer) {
        score++;
        scoreElement.textContent = score;
    }
    nextQuestion();
}

// Function to load the next question or finish the quiz
function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
        loadQuestion();
        resetTimer();
    } else {
        finishQuiz();
    }
}

// Function to reset the timer
function resetTimer() {
    clearInterval(timer);
    timeLeft = 60;
    timerElement.textContent = timeLeft;
    timer = setInterval(updateTimer, 1000);
}

// Function to update the timer
function updateTimer() {
    timeLeft--;
    timerElement.textContent = timeLeft;
    if (timeLeft <= 0) {
        nextQuestion();
    }
}

// Function to finish the quiz
function finishQuiz() {
    clearInterval(timer);
    questionElement.textContent = 'Quiz completed!';
    answersElement.innerHTML = '';
    document.querySelector('.timer').style.display = 'none';
    nextButton.style.display = 'none';
}

// Event listener for the next button
nextButton.addEventListener('click', nextQuestion);

// Start the quiz by loading the first question and starting the timer
loadQuestion();
resetTimer();