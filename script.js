// Alternar entre os temas claro e escuro
function toggleTheme() {
    document.body.classList.toggle("dark-theme");
}

// Funções principais do quiz
let currentQuestionIndex = 0;
let score = 0;
let timeLeft = 120; // Atualiza o temporizador para 1 minuto (60 segundos)
let timerInterval;

// Função para iniciar o quiz
function startQuiz() {
    document.getElementById("start-screen").style.display = "none";
    document.getElementById("quiz-screen").style.display = "block";
    showQuestion();
    startTimer();
}

function showQuestion() {
    const questionElement = document.getElementById("question");
    const optionsElement = document.getElementById("options");
    const feedbackElement = document.getElementById("feedback");

    // Adiciona a classe de animação para entrada
    questionElement.className = 'slide-in-right';
    optionsElement.className = 'slide-in-right';

    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;

    feedbackElement.style.display = "none";
    optionsElement.innerHTML = "";

    if (currentQuestion.type === "multiple-choice") {
        currentQuestion.options.forEach((option) => {
            const button = document.createElement("button");
            button.textContent = option;
            button.onclick = () => checkAnswer(option);
            optionsElement.appendChild(button);
        });
    } else if (currentQuestion.type === "match") {
        const form = document.createElement("form");
        currentQuestion.pairs.forEach(pair => {
            const div = document.createElement("div");
            div.classList.add("pair");

            const questionLabel = document.createElement("label");
            questionLabel.textContent = pair.question;

            const select = document.createElement("select");
            select.classList.add("match-select");
            pair.options.forEach(option => {
                const optionElement = document.createElement("option");
                optionElement.value = option;
                optionElement.textContent = option;
                select.appendChild(optionElement);
            });

            div.appendChild(questionLabel);
            div.appendChild(select);
            form.appendChild(div);
        });
        const submitButton = document.createElement("button");
        submitButton.textContent = "Enviar";
        submitButton.type = "button";
        submitButton.onclick = () => checkMatchAnswers(form);
        form.appendChild(submitButton);
        optionsElement.appendChild(form);
    } else if (currentQuestion.type === "image") {
        currentQuestion.options.forEach((imgSrc) => {
            const imgElement = document.createElement("img");
            imgElement.src = imgSrc;
            imgElement.onclick = () => checkAnswer(imgSrc);
            optionsElement.appendChild(imgElement);
        });
    } else if (currentQuestion.type === "open-ended") {
        const textarea = document.createElement("textarea");
        textarea.id = "open-ended-answer";
        textarea.rows = 4;
        textarea.cols = 50;
        textarea.placeholder = "Digite sua resposta aqui...";

        const submitButton = document.createElement("button");
        submitButton.textContent = "Enviar";
        submitButton.type = "button";
        submitButton.onclick = checkOpenEndedAnswer;

        optionsElement.appendChild(textarea);
        optionsElement.appendChild(submitButton);
    }

    updateProgress();
    startTimer();
}

function checkOpenEndedAnswer() {
    const answerElement = document.getElementById("open-ended-answer");
    const answer = answerElement.value.trim().toLowerCase();
    const currentQuestion = questions[currentQuestionIndex];

    const isCorrect = answer === currentQuestion.correctAnswer.toLowerCase();

    if (isCorrect) {
        score++;
    }

    showFeedback(isCorrect); // Exibe o feedback

    setTimeout(() => {
        slideOutCurrentQuestion();
        setTimeout(() => {
            currentQuestionIndex++;
            if (currentQuestionIndex < questions.length) {
                showQuestion();
            } else {
                showFinalResult();
            }
        }, 500);
    }, 1000);
}

function checkMatchAnswers(form) {
    const selects = form.querySelectorAll(".match-select");
    const currentQuestion = questions[currentQuestionIndex];
    let isCorrect = true;

    selects.forEach((select, index) => {
        if (select.value !== currentQuestion.pairs[index].correctAnswer) {
            isCorrect = false;
        }
    });

    if (isCorrect) {
        score++;
    }

    showFeedback(isCorrect); // Exibe o feedback

    setTimeout(() => {
        slideOutCurrentQuestion();
        setTimeout(() => {
            currentQuestionIndex++;
            if (currentQuestionIndex < questions.length) {
                showQuestion();
            } else {
                showFinalResult();
            }
        }, 500);
    }, 1000);
}

function checkAnswer(selectedOption) {
    const currentQuestion = questions[currentQuestionIndex];
    const isCorrect = selectedOption === currentQuestion.correctAnswer;

    // Somente adiciona classe aos botões de múltipla escolha e imagens
    if (currentQuestion.type === "multiple-choice" || currentQuestion.type === "image") {
        const selectedButton = Array.from(document.getElementsByTagName("button")).find(button => button.textContent === selectedOption) ||
                               Array.from(document.getElementsByTagName("img")).find(img => img.src === selectedOption);
        if (selectedButton) {
            if (isCorrect) {
                selectedButton.classList.add("correct");
            } else {
                selectedButton.classList.add("incorrect");
            }
        }
    }

    if (isCorrect) {
        score++;
    }

    showFeedback(isCorrect); // Exibe o feedback

    setTimeout(() => {
        slideOutCurrentQuestion();
        setTimeout(() => {
            currentQuestionIndex++;
            if (currentQuestionIndex < questions.length) {
                showQuestion();
            } else {
                showFinalResult();
            }
        }, 500);
    }, 1000);
}

function showFeedback(isCorrect) {
    const feedbackElement = document.getElementById("feedback");
    feedbackElement.style.display = "block"; // Exibe o feedback
    feedbackElement.textContent = isCorrect ? "Correto!" : "Errado!";
    if (isCorrect) {
        feedbackElement.className = "correct";
    } else {
        feedbackElement.className = "incorrect";
    }
}

function showFinalResult() {
    const questionElement = document.getElementById("question");
    const optionsElement = document.getElementById("options");
    const resultElement = document.getElementById("result");
    const feedbackElement = document.getElementById("feedback");

    feedbackElement.style.display = "none"; // Esconde o feedback

    const percentage = Math.round((score / questions.length) * 100);

    questionElement.textContent = "Quiz Finalizado!";
    optionsElement.innerHTML = "";
    resultElement.innerHTML = `
        <h1>QUIZ AI</h1>
        <p>Pontuação: ${score}/${questions.length}</p>
        <p>Percentagem: ${percentage}%</p>
        <p>A sua pontuação foi de ${score} pontos num total de ${questions.length} questões.</p>
    `;
}

function slideOutCurrentQuestion() {
    const questionElement = document.getElementById("question");
    const optionsElement = document.getElementById("options");

    // Adiciona a classe de animação para saída
    questionElement.className = 'slide-out-left';
    optionsElement.className = 'slide-out-left';
}

function updateProgress() {
    const progressBar = document.getElementById("progress-bar");
    const progress = ((currentQuestionIndex + 1) / questions.length) * 100;
    progressBar.style.width = progress + "%";
}

function startTimer() {
    timeLeft = 120; // Atualiza o temporizador para 1 minuto (60 segundos)
    clearInterval(timerInterval);
    timerInterval = setInterval(() => {
        timeLeft--;
        document.getElementById("time-left").textContent = timeLeft;
        if (timeLeft === 0) {
            clearInterval(timerInterval);
            showFeedback(false);
            setTimeout(() => {
                slideOutCurrentQuestion();
                setTimeout(() => {
                    currentQuestionIndex++;
                    if (currentQuestionIndex < questions.length) {
                        showQuestion();
                    } else {
                        showFinalResult();
                    }
                }, 500);
            }, 1000);
        }
    }, 1000);
}

// Inicializa o quiz
document.getElementById("start-screen").style.display = "block"; // Exibe a tela inicial
document.getElementById("quiz-screen").style.display = "none"; // Esconde a tela do quiz
