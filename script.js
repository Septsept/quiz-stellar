document.addEventListener('DOMContentLoaded', () => {
    const themeElement = document.querySelector('.theme');
    const questionElement = document.querySelector('.question');
    const reponseElement = document.querySelector('.reponse');
    const reponseElements = document.querySelector('.reponses');
    const generateButton = document.getElementById('generateQuestion');

    fetch('questions.json')
        .then(response => response.json())
        .then(data => {
            generateButton.addEventListener('click', () => {
                const randomIndex = Math.floor(Math.random() * data.length);
                const randomQuestion = data[randomIndex];

                themeElement.innerHTML = "<strong>Theme : </strong>" + randomQuestion.Theme;
                questionElement.innerHTML = randomQuestion.Question;
                reponseElement.innerHTML = randomQuestion.Answer;

                reponseElements.style.opacity = "1";
            });
        })
        .catch(error => {
            console.error('Une erreur s\'est produite lors du chargement du fichier JSON:', error);
        });
});
