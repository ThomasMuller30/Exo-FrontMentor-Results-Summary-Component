fetch('data.json')
.then(function (res) {
    return res.json();
})
.then(inserScore)
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
