const express = require('express');
const weightsWorkoutRouter = express.Router();

const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('./weightsWorkout.sqlite');

function addWeightsWorkout() {
weightsWorkoutRouter.post('/', (req, res, next) => {
    const chestExOne = req.body.chestExOne;
    const chestExOneWeightSetOne = req.body.chestExOneWeightSetOne; 
    const chestExOneRepsSetOne = req.body.chestExOneRepsSetOne;
    const chestExOneWeightSetTwo = req.body.chestExOneWeightSetTwo; 
    const chestExOneRepsSetTwo = req.body.chestExOneRepsSetTwo;
    const chestExOneWeightSetThree = req.body.chestExOneWeightSetThree; 
    const chestExOneRepsSetThree = req.body.chestExOneRepsSetThree;

    // add if statement here to make sure all fields are filled out

    const sql = "INSERT INTO weightsWorkout (chestExOne, chestExOneWeightSetOne, chestExOneRepsSetOne, chestExOneWeightSetTwo, chestExOneRepsSetTwo, chestExOneWeightSetThree, chestExOneRepsSetThree) VALUES ($chestExOne, $chestExOneWeightSetOne, $chestExOneRepsSetOne, $chestExOneWeightSetTwo, $chestExOneRepsSetTwo, $chestExOneWeightSetThree, $chestExOneRepsSetThree)";
    const values = {
        $chestExOneWeightSetOne: chestExOneWeightSetOne, 
        $chestExOneRepsSetOne: chestExOneRepsSetOne, 
        $chestExOneWeightSetTwo: chestExOneWeightSetTwo, 
        $chestExOneRepsSetTwo: chestExOneRepsSetTwo, 
        $chestExOneWeightSetThree: chestExOneWeightSetThree, 
        $chestExOneRepsSetThree: chestExOneRepsSetThree,
    };

    db.run(sql, values, function(error) {
        if (error) {
            next(error);
        } else {
            console.log('workout was saved');
        }
    });

});

};


// function addWeightsWorkout() {

// db.serialize(function() {

//     console.log('testiiiiiing');

//     db.run('DROP TABLE IF EXISTS weightsWorkout', error => {
//         if (error) {
//             throw error;
//         }
//     })

//     db.run("INSERT INTO weightsWorkout (chestExOne, chestExOneWeightSetOne, chestExOneRepsSetOne, chestExOneWeightSetTwo, chestExOneRepsSetTwo, chestExOneWeightSetThree, chestExOneRepsSetThree) VALUES ($chestExOne, $chestExOneWeightSetOne, $chestExOneRepsSetOne, $chestExOneWeightSetTwo, $chestExOneRepsSetTwo, $chestExOneWeightSetThree, $chestExOneRepsSetThree)", {
//         $chestExOne: chestExOne, 
//         $chestExOneWeightSetOne: chestExOneWeightSetOne, 
//         $chestExOneRepsSetOne: chestExOneRepsSetOne, 
//         $chestExOneWeightSetTwo: chestExOneWeightSetTwo, 
//         $chestExOneRepsSetTwo: chestExOneRepsSetTwo, 
//         $chestExOneWeightSetThree: chestExOneWeightSetThree, 
//         $chestExOneRepsSetThree: chestExOneRepsSetThree,
//     }, err => {
//         if (err) {
//             console.log(err);
//         }
//     });

//     // db.run('CREATE TABLE IF NOT EXISTS `weightsWorkout` ( ' +
//     // '`id` INTEGER NOT NULL PRIMARY, ' +
//     // '`chestExOne` TEXT NOT NULL, ' +
//     // '`chestExOneWeightSetOne` INTEGER NOT NULL, ' +
//     // '`chestExOneRepsSetOne` INTEGER NOT NULL,' + 
//     // '`chestExOneWeightSetTwo` INTEGER NOT NULL, ' +
//     // '`chestExOneRepsSetTwo` INTEGER NOT NULL,' + 
//     // '`chestExOneWeightSetThree` INTEGER NOT NULL, ' +
//     // '`chestExOneRepsSetThree` INTEGER NOT NULL,' 
//     // );

// });

// };