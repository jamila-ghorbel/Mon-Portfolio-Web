const correctAnswers = {
    q1: 'a', q2: 'a', q3: 'b', q4: 'a', q5: 'b',
    q6: 'a', q7: 'c', q8: 'b', q9: 'a', q10: 'b',
    q11: 'a', q12: 'b', q13: 'a', q14: 'c', q15: 'b'
};

function validerQuiz() {
    let score = 0;
    const total = 15;

    for (let i = 1; i <= total; i++) {
        const qName = 'q' + i;
        const feedbackDiv = document.getElementById('feedback-' + qName);
        const radios = document.getElementsByName(qName);
        let selectedValue = null;
        let selectedLabel = "";

        for (const radio of radios) {
            if (radio.checked) {
                selectedValue = radio.value;
                selectedLabel = radio.closest('.quiz-option-row').querySelector('.option-text').textContent;
            }
        }

        feedbackDiv.className = 'feedback';

        if (selectedValue === null) {
            feedbackDiv.textContent = "⚠️ Merci de répondre à cette question.";
            feedbackDiv.classList.add('error');
        } else if (selectedValue === correctAnswers[qName]) {
            score++;
            feedbackDiv.textContent = "✅ Correct !";
            feedbackDiv.classList.add('success');
        } else {
            let correctText = "";
            for (const radio of radios) {
                if (radio.value === correctAnswers[qName]) {
                    correctText = radio.closest('.quiz-option-row').querySelector('.option-text').textContent;
                }
            }
            feedbackDiv.textContent = "❌ Faux. La bonne réponse était : " + correctText;
            feedbackDiv.classList.add('error');
        }
    }

    const resultDiv = document.getElementById('global-result');
    resultDiv.innerHTML = `<h3>Votre Note Finale : ${score} / ${total}</h3>`;
    resultDiv.style.display = "block";
    resultDiv.scrollIntoView({ behavior: 'smooth' });
}
function envoyerEmail() {
    const email = document.getElementById('user_email').value;
    const sujet = document.getElementById('user_subject').value;
    const message = document.getElementById('user_message').value;


    if (!email || !sujet || !message) {
        alert("Veuillez remplir tous les champs avant d'envoyer.");
        return;
    }

    const corpsDuMail =  message;

 
    const mailtoLink = "mailto:jamilaghorbel11@gmail.com" +
                       "?subject=" + encodeURIComponent(sujet) +
                       "&body=" + corpsDuMail;

   
    window.location.href = mailtoLink;
}
