

// Bodyweight 

var bodyweightExercises = ["Push Up","Sit Up","Leg Lift","Bodyweight Squat","Jumping Jacks","Bodyweight Lunges"];

var randombodyweightExerciseOne = bodyweightExercises[Math.floor(Math.random()*bodyweightExercises.length)]; //pluck a random exercise
var randombodyweightExerciseTwo = bodyweightExercises[Math.floor(Math.random()*bodyweightExercises.length)]; //pluck a random exercise
var randombodyweightExerciseThree = bodyweightExercises[Math.floor(Math.random()*bodyweightExercises.length)]; //pluck a random exercise
var randombodyweightExerciseFour = bodyweightExercises[Math.floor(Math.random()*bodyweightExercises.length)]; //pluck a random exercise
var randombodyweightExerciseFive = bodyweightExercises[Math.floor(Math.random()*bodyweightExercises.length)]; //pluck a random exercise
var randombodyweightExerciseSix = bodyweightExercises[Math.floor(Math.random()*bodyweightExercises.length)]; //pluck a random exercise
var randombodyweightExerciseSeven = bodyweightExercises[Math.floor(Math.random()*bodyweightExercises.length)]; //pluck a random exercise
var randombodyweightExerciseEight = bodyweightExercises[Math.floor(Math.random()*bodyweightExercises.length)]; //pluck a random exercise

function handleRandomBodyweightWorkout() {
document.getElementById("bodyweightExOne").innerHTML = `${randombodyweightExerciseOne} - 15 reps`;
document.getElementById("bodyweightExTwo").innerHTML = `${randombodyweightExerciseTwo} - 15 reps`;
document.getElementById("bodyweightExThree").innerHTML = `${randombodyweightExerciseThree} - 15 reps`;
document.getElementById("bodyweightExFour").innerHTML = `${randombodyweightExerciseFour} - 15 reps`;
document.getElementById("bodyweightExFive").innerHTML = `${randombodyweightExerciseFive} - 15 reps`;
document.getElementById("bodyweightExSix").innerHTML = `${randombodyweightExerciseSix} - 15 reps`;
document.getElementById("bodyweightExSeven").innerHTML = `${randombodyweightExerciseSeven} - 15 reps`;
document.getElementById("bodyweightExEight").innerHTML = `${randombodyweightExerciseEight} - 15 reps`;
}

// Running 

var runningExercises = ["5k Run", "4 Mile Run", "2 Mile Run + Sprints", "5 Mile Run"];
var randomRunningExerciseOne = runningExercises[Math.floor(Math.random()*runningExercises.length)]; //pluck a random exercise

function handleRandomRunningWorkout() {
    document.getElementById("runningExOne").innerHTML = `${randomRunningExerciseOne}`;
}

// Weights 

var weightChestExercises = ['Barbell Bench Press', 'Dumbell Flies', 'Dumbell Bench Press'];
var weightBackExercises = ['One Arm Dumbell Row', 'Bent Over Barbell Row'];
var weightTricepExercises = ['One Arm Dumbell Tricep Bent Over Extension', 'One Arm Dumbell Tricep Overhead Extension'];
var weightBicepExercises = ['Dumbell Hammer Curls', 'Dumbell Alternating Curls'];
var weightShouldersExercises = ['Barbell Shoulder Press', 'Dumbell Lat Side Raise', 'Dumbell Lat Front Raise'];
var weightLegsExercises = ['Barbell Squat', 'Barbell Front Squat', 'Dumbell Romanian Deadlift'];
var weightAbsExercises = ['Russian Plate Twist', 'Weighted Sit Ups'];

var randomChestExerciseOne = weightChestExercises[Math.floor(Math.random()*weightChestExercises.length)]; //pluck a random exercise
var randomBackExerciseOne = weightBackExercises[Math.floor(Math.random()*weightBackExercises.length)]; 
var randomTricepExerciseOne = weightTricepExercises[Math.floor(Math.random()*weightTricepExercises.length)]; 
var randomBicepExerciseOne = weightBicepExercises[Math.floor(Math.random()*weightBicepExercises.length)]; 
var randomShouldersExerciseOne = weightShouldersExercises[Math.floor(Math.random()*weightShouldersExercises.length)];
var randomLegsExerciseOne = weightLegsExercises[Math.floor(Math.random()*weightLegsExercises.length)]; 
var randomLegsExerciseTwo = weightLegsExercises[Math.floor(Math.random()*weightLegsExercises.length)]; 
var randomAbsExerciseOne = weightAbsExercises[Math.floor(Math.random()*weightAbsExercises.length)]; 
var randomAbsExerciseTwo = weightAbsExercises[Math.floor(Math.random()*weightAbsExercises.length)]; 




function handleRandomWeightsWorkout() {
    document.getElementById("chestExOne").innerHTML = `${randomChestExerciseOne}`;
    // document.getElementById("backExOne").innerHTML = `${randomBackExerciseOne}`;
    // document.getElementById("tricepExOne").innerHTML = `${randomTricepExerciseOne}`;
    // document.getElementById("bicepExOne").innerHTML = `${randomBicepExerciseOne}`;
    // document.getElementById("shouldersExOne").innerHTML = `${randomShouldersExerciseOne}`;
    // document.getElementById("legsExOne").innerHTML = `${randomLegsExerciseOne}`;
    // document.getElementById("legsExTwo").innerHTML = `${randomLegsExerciseTwo}`;
    // document.getElementById("absExOne").innerHTML = `${randomAbsExerciseOne}`;
    // document.getElementById("absExTwo").innerHTML = `${randomAbsExerciseTwo}`;
    }