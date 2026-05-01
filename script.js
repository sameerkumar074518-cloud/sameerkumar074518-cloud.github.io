// store score when game is played
function saveScore(game, score){
  let user = localStorage.getItem("username") || "Guest";

  let scores = JSON.parse(localStorage.getItem("scores") || "[]");

  scores.push({
    user: user,
    game: game,
    score: score
  });

  localStorage.setItem("scores", JSON.stringify(scores));
}

// show leaderboard
function showLeaderboard(gameName){
  let scores = JSON.parse(localStorage.getItem("scores") || "[]");

  let filtered = scores.filter(s => s.game === gameName);

  filtered.sort((a,b)=> b.score - a.score);

  let list = document.getElementById("leaderboard");
  list.innerHTML = "";

  filtered.slice(0,5).forEach(s=>{
    let li = document.createElement("li");
    li.innerText = `${s.user} - ${s.score}`;
    list.appendChild(li);
  });
}

// call leaderboard on page load
window.onload = showLeaderboard;