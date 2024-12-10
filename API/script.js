
 button = document.getElementById('fetchButton');
 answerElement = document.getElementById('answer');
 answerGif = document.getElementById('answerGif');

button.addEventListener('click', () => {
   
   answers = ['Тийм', 'Үгүй'];
   randomAnswer = answers[Math.floor(Math.random() * answers.length)];

    answerElement.textContent = randomAnswer;

    if (randomAnswer === 'Тийм') {
        answerGif.src = 'https://media1.tenor.com/m/8ST06-zWW9YAAAAd/dancing-so.gif'; // Жишээ Тийм GIF
        answerGif.style.display = 'block';
    } else if (randomAnswer === 'Үгүй') {
        answerGif.src = 'https://media1.tenor.com/m/BYZf0mMHcY4AAAAd/的9.gif'; // Жишээ Үгүй GIF
        answerGif.style.display = 'block';
    }
});
