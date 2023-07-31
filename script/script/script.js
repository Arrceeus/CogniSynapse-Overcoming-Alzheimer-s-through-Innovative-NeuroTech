function submitQuiz() {
    // Get the user's answers
    var q1Answer = document.querySelector('input[name="q1"]:checked').value;
    var q2Answer = document.querySelector('input[name="q2"]:checked').value;
    var q3Answer = document.querySelector('input[name="q3"]:checked').value;
    var q4Answer = document.querySelector('input[name="q4"]:checked').value;
    var q5Answer = document.querySelector('input[name="q5"]:checked').value;

    // Calculate the score
    var score = 0;
    if (q1Answer === "a") {
        score++;
    }
    if (q2Answer === "b") {
        score++;
    }
    if (q3Answer === "a") {
        score++;
    }
    if (q4Answer === "b") {
        score++;
    }
    if (q5Answer === "a") {
        score++;
    }

    // Display the score
    alert("Your score: " + score + "/5");
}
