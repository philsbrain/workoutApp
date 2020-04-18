const sqlite3 = require('sqlite');
const db = new sqlite3.Database('./weightsWorkout.sqlite');

db.serialize(function() {

    db.run('CREATE TABLE IF NOT EXISTS `weightsWorkout` ( ' +
    '`id` INTEGER NOT NULL PRIMARY, ' +
    '`chestExOne` TEXT NOT NULL, ' +
    '`chestExOneWeightSetOne` INTEGER NOT NULL, ' +
    '`chestExOneRepsSetOne` INTEGER NOT NULL,' + 
    '`chestExOneWeightSetTwo` INTEGER NOT NULL, ' +
    '`chestExOneRepsSetTwo` INTEGER NOT NULL,' + 
    '`chestExOneWeightSetThree` INTEGER NOT NULL, ' +
    '`chestExOneRepsSetThree` INTEGER NOT NULL,' 
    );

});