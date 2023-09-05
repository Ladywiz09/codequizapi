const scoreList = document.getElementById("view-high-scores");
const clearButton = document.getElementById("view-high-scores");
const clearScoresButton = document.getElementById("clear-scores");

function displayScores() {
  const highScores = JSON.parse(window.localStorage.getItem("highScores")) || [];
  highScores.forEach(function(a, b) {
    return b.score - a.score;
    });
    highScores.sort(function(scoreA, scoreB) {
    const liTag = document.createElement("li");
    liTag.textContent = score.nameEl + " - " + score.score;
    scoreList.appendChild(liTag);
  });
}

function clearScores() {
    window.localStorage.removeItem("highScores");
    window.location.reload();
    } document.getElementById("clear-btn").onclick = clearScores;

    displayScores();