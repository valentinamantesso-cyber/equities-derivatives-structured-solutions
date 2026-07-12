document.addEventListener("DOMContentLoaded", function () {
  var dataScripts = document.querySelectorAll("script.quiz-data");

  dataScripts.forEach(function (script) {
    var quizId = script.getAttribute("data-quiz-id");
    var container = document.querySelector('.quiz[data-quiz-id="' + quizId + '"]');
    if (!container) return;

    var quiz;
    try {
      quiz = JSON.parse(script.textContent);
    } catch (e) {
      container.textContent = "Erro ao carregar o quiz.";
      return;
    }

    var state = { index: 0, score: 0, answered: false, wrong: [] };

    function render() {
      container.innerHTML = "";

      if (state.index >= quiz.questions.length) {
        renderResult();
        return;
      }

      var q = quiz.questions[state.index];

      var title = document.createElement("div");
      title.className = "quiz-title";
      title.textContent = quiz.title || "";
      container.appendChild(title);

      var progress = document.createElement("div");
      progress.className = "quiz-progress";
      progress.textContent = "Questão " + (state.index + 1) + " de " + quiz.questions.length;
      container.appendChild(progress);

      var question = document.createElement("div");
      question.className = "quiz-question";
      question.textContent = q.question;
      container.appendChild(question);

      var optionsList = document.createElement("div");
      optionsList.className = "quiz-options";
      state.answered = false;

      var nextBtn = document.createElement("button");
      nextBtn.type = "button";
      nextBtn.className = "quiz-next-btn";
      nextBtn.textContent =
        state.index === quiz.questions.length - 1 ? "Ver resultado" : "Próxima questão";
      nextBtn.hidden = true;
      nextBtn.addEventListener("click", function () {
        state.index += 1;
        render();
      });

      q.options.forEach(function (optionText, optionIndex) {
        var btn = document.createElement("button");
        btn.type = "button";
        btn.className = "quiz-option";
        btn.textContent = optionText;

        btn.addEventListener("click", function () {
          if (state.answered) return;
          state.answered = true;

          var isCorrect = optionIndex === q.correct;
          if (isCorrect) {
            btn.classList.add("quiz-option--correct");
            state.score += 1;
          } else {
            btn.classList.add("quiz-option--incorrect");
            optionsList.children[q.correct].classList.add("quiz-option--correct");
            state.wrong.push({
              question: q.question,
              chosen: optionText,
              correct: q.options[q.correct]
            });
          }

          Array.prototype.forEach.call(optionsList.children, function (child) {
            child.disabled = true;
          });

          nextBtn.hidden = false;
        });

        optionsList.appendChild(btn);
      });

      container.appendChild(optionsList);
      container.appendChild(nextBtn);
    }

    function renderResult() {
      container.innerHTML = "";

      var total = quiz.questions.length;
      var percentage = Math.round((state.score / total) * 100);

      var title = document.createElement("div");
      title.className = "quiz-title";
      title.textContent = quiz.title || "";
      container.appendChild(title);

      var score = document.createElement("div");
      score.className = "quiz-score";
      score.textContent =
        "Você acertou " + state.score + " de " + total + " questões (" + percentage + "%).";
      container.appendChild(score);

      if (state.wrong.length > 0) {
        var reviewBtn = document.createElement("button");
        reviewBtn.type = "button";
        reviewBtn.className = "quiz-review-btn";
        reviewBtn.textContent = "Ver questões que errei (" + state.wrong.length + ")";

        var reviewList = document.createElement("div");
        reviewList.className = "quiz-review-list";
        reviewList.hidden = true;

        state.wrong.forEach(function (item) {
          var entry = document.createElement("div");
          entry.className = "quiz-review-item";

          var entryQuestion = document.createElement("div");
          entryQuestion.className = "quiz-review-question";
          entryQuestion.textContent = item.question;
          entry.appendChild(entryQuestion);

          var yourAnswer = document.createElement("div");
          yourAnswer.className = "quiz-review-answer quiz-review-answer--wrong";
          yourAnswer.textContent = "Sua resposta: " + item.chosen;
          entry.appendChild(yourAnswer);

          var correctAnswer = document.createElement("div");
          correctAnswer.className = "quiz-review-answer quiz-review-answer--correct";
          correctAnswer.textContent = "Resposta correta: " + item.correct;
          entry.appendChild(correctAnswer);

          reviewList.appendChild(entry);
        });

        reviewBtn.addEventListener("click", function () {
          reviewList.hidden = !reviewList.hidden;
          reviewBtn.textContent = reviewList.hidden
            ? "Ver questões que errei (" + state.wrong.length + ")"
            : "Esconder questões que errei";
        });

        container.appendChild(reviewBtn);
        container.appendChild(reviewList);
      }

      var restartBtn = document.createElement("button");
      restartBtn.type = "button";
      restartBtn.className = "quiz-restart-btn";
      restartBtn.textContent = "Refazer quiz";
      restartBtn.addEventListener("click", function () {
        state.index = 0;
        state.score = 0;
        state.wrong = [];
        render();
      });
      container.appendChild(restartBtn);
    }

    render();
  });
});
