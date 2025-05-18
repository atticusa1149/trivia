let points = 0;

const right = (btn) => {
    document.getElementById("answer").innerHTML = "You got it correct!";
    document.getElementById("answer").style.color = "#009B77";
    points++;
     document.querySelectorAll(".q button").forEach(button => {
    button.addEventListener("click", function() {
        let parentDiv = this.closest(".q");
        parentDiv.querySelectorAll("button").forEach(btn => btn.disabled = true);
    }, { once: true }); // Ensures the event fires only once per button
});
}
const wrong = (btn) => {
    document.getElementById("answer").innerHTML = "You got it wrong";
    document.getElementById("answer").style.color = "red";
    points--;
    document.querySelectorAll(".q button").forEach(button => {
    button.addEventListener("click", function() {
        let parentDiv = this.closest(".q");
        parentDiv.querySelectorAll("button").forEach(btn => btn.disabled = true);
    }, { once: true }); // Ensures the event fires only once per button
});
}

function submit1() {
    let input1 = document.getElementById("root^2").value;
    let button = document.getElementById("submitButton"); // Ensure you have a button with this ID
    if (input1 === "50.8") {
        right(button);
    } else {
        wrong(button);
    }
}

function score() {
    document.querySelector("img").style.display = "block";
    document.getElementById("score").innerHTML = `Your score is ${points}`;
}