function calculateBMI(){

let height = document.getElementById("height").value/100;

let weight = document.getElementById("weight").value;

let bmi = weight/(height*height);

document.getElementById("bmiResult").innerText =
"BMI: " + bmi.toFixed(2);

}

function waterIntake(){

let weight = document.getElementById("bodyweight").value;

let water = weight * 0.033;

document.getElementById("waterResult").innerText =
"Drink about " + water.toFixed(2) + "L daily";

}
function calculateCalories(){

let age = document.getElementById("age").value;

let weight = document.getElementById("weightCal").value;

let height = document.getElementById("heightCal").value;

let calories = 10 * weight + 6.25 * height - 5 * age + 5;

document.getElementById("calorieResult").innerText =
"Estimated daily calories: " + Math.round(calories);

}
function filterWorkout(type){

let workouts = document.querySelectorAll(".workout");

workouts.forEach(function(workout){

if(type === "all"){

workout.style.display = "block";

}else if(workout.classList.contains(type)){

workout.style.display = "block";

}else{

workout.style.display = "none";

}

});

}
let toggle = document.getElementById("darkToggle");

if(toggle){

toggle.addEventListener("click", function(){

document.body.classList.toggle("dark-mode");

});

}
function generateWorkout(){

let workouts = [

"10 Push Ups • 15 Squats • 20 Sit Ups",

"20 Jumping Jacks • 10 Lunges • 30 sec Plank",

"5 Pull Ups • 10 Bench Press • 15 Deadlifts",

"2km Run • 20 Squats • 10 Push Ups"

];

let randomWorkout = workouts[Math.floor(Math.random()*workouts.length)];

document.getElementById("workoutPlan").innerText = randomWorkout;

}
<div class="card">

<h3>Workout Progress Tracker</h3>

<input id="progressInput" placeholder="Workout completed today">

<button onclick="saveProgress()">Save</button>

<p id="progressDisplay"></p>

</div>
function saveProgress(){

let progress = document.getElementById("progressInput").value;

localStorage.setItem("progress", progress);

document.getElementById("progressDisplay").innerText =
"Saved: " + progress;

}

window.onload = function(){

let saved = localStorage.getItem("progress");

if(saved){

document.getElementById("progressDisplay").innerText =
"Last workout: " + saved;

}
function submitForm() {
  alert("Message sent successfully!");
}