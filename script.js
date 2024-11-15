import questions from './questions.js';


let currentQuestionIndex = 0;
let score = 0;

document.addEventListener("DOMContentLoaded", startQuiz);

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    document.getElementById("next-btn").style.display = "none";
    document.getElementById("score").innerText = "";
    showQuestion();
}

function showQuestion() {
    const questionElement = document.getElementById("question");
    const optionsContainer = document.getElementById("options");
    const question = questions[currentQuestionIndex];

    questionElement.innerText = question.question;
    optionsContainer.innerHTML = "";

    if (question.type === "open") {
        const input = document.createElement("input");
        input.type = "text";
        input.id = "open-answer";
        input.placeholder = "Digite sua resposta";
        input.classList.add("option");
        optionsContainer.appendChild(input);

        // Adiciona evento para enviar a resposta com Enter
        input.addEventListener("keypress", function(event) {
            if (event.key === "Enter") {
                checkOpenAnswer();
            }
        });

        input.focus();
    } else if (question.type === "match") {
        displayMatchQuestion(question);
    } else {
        question.options.forEach(option => {
            const button = document.createElement("button");
            button.className = "option";
            button.innerText = option;
            button.onclick = () => selectOption(button, option);
            optionsContainer.appendChild(button);
        });
    }
}

function displayMatchQuestion(question) {
    const optionsContainer = document.getElementById("options");

    question.items.forEach(item => {
        const itemDiv = document.createElement("div");
        itemDiv.classList.add("match-item");
        itemDiv.innerText = `${item.id}. ${item.text}`;

        const select = document.createElement("select");
        select.id = `match-${item.id}`;
        select.classList.add("match-select");

        const defaultOption = document.createElement("option");
        defaultOption.value = "";
        defaultOption.innerText = "Selecione...";
        select.appendChild(defaultOption);

        question.options.forEach(option => {
            const optionElement = document.createElement("option");
            optionElement.value = option.id;
            optionElement.innerText = `${option.id}) ${option.text}`;
            select.appendChild(optionElement);
        });

        itemDiv.appendChild(select);
        optionsContainer.appendChild(itemDiv);
    });

    const submitBtn = document.createElement("button");
    submitBtn.innerText = "Enviar";
    submitBtn.className = "option";
    submitBtn.onclick = checkMatchAnswer;
    optionsContainer.appendChild(submitBtn);
}

function checkOpenAnswer() {
    const question = questions[currentQuestionIndex];
    const input = document.getElementById("open-answer");
    const answer = input.value.trim();

    if (answer.toLowerCase() === question.answer.toLowerCase()) {
        score++;
        input.classList.add("correct");
        alertFeedback("Correto!", "correct");
    } else {
        input.classList.add("incorrect");
        alertFeedback("Errado!", "incorrect");
    }

    setTimeout(nextQuestion, 1500);
}

function checkMatchAnswer() {
    const question = questions[currentQuestionIndex];
    let correct = true;

    Object.keys(question.answer).forEach(id => {
        const select = document.getElementById(`match-${id}`);
        const selectedValue = select.value;

        if (selectedValue === question.answer[id]) {
            select.classList.add("correct");
        } else {
            select.classList.add("incorrect");
            correct = false;
        }
    });

    const submitBtn = document.querySelector("#options button");
    if (correct) {
        score++;
        submitBtn.classList.add("correct");
        alertFeedback("Correto!", "correct");
    } else {
        submitBtn.classList.add("incorrect");
        alertFeedback("Errado!", "incorrect");
    }

    setTimeout(nextQuestion, 1500);
}

function selectOption(button, option) {
    const question = questions[currentQuestionIndex];

    if (option === question.answer) {
        score++;
        button.classList.add("correct");
        alertFeedback("Correto!", "correct");
    } else {
        button.classList.add("incorrect");
        alertFeedback("Errado!", "incorrect");
    }

    setTimeout(nextQuestion, 1500);
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

function showScore() {
    const totalQuestions = questions.length;
    const percentageScore = ((score / totalQuestions) * 100).toFixed(2);

    document.getElementById("question").innerText = "Fim do Quiz!";
    document.getElementById("options").innerHTML = "";
    document.getElementById("next-btn").style.display = "none";
    document.getElementById("score").innerText = `Sua pontuação: ${score} de ${totalQuestions} (${percentageScore}%)`;
}

function alertFeedback(message, status) {
    const feedback = document.createElement("p");
    feedback.innerText = message;
    feedback.className = status;
    document.getElementById("options").appendChild(feedback);

    setTimeout(() => feedback.remove(), 1000);
}
