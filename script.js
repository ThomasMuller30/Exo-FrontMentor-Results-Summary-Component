fetch('data.json')
.then(function (res) {
    return res.json();
})
.then(function (data) {
    inserScore(data);
    displayAverageScore(data);
  })
.catch(function (err) {
    console.log(err)
});

function inserScore(value) {
    console.log(value);
    let monContainer = document.getElementById('resume');
    for (let variable of value) {
        monContainer.innerHTML += `
        <div class="${variable.category}">
            <div class="title">
                <img src="${variable.icon}" alt="logo de la catégorie">
                <h3>${variable.category}</h3>
            </div>
            <div class="scores">
                <p class="score">${variable.score}</p>
                <p>/ 100</p>
            </div>
        </div>`;
    }
}

function calculateAverageScore(data) {
    const sumScores = data.reduce((acc, item) => acc + item.score, 0);
    return sumScores / data.length;
  }
  
  function displayAverageScore(data) {
    const averageScore = calculateAverageScore(data);
    const resultScoreElement = document.getElementById('scoreglobal');
    resultScoreElement.innerHTML = `
    <p id="result-score">${averageScore.toFixed(0)}</p>
    <p>of 100</p>`
    ;
  }
