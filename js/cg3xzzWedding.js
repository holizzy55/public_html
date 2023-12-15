const numGuests = parseInt(prompt("How many guests do you have?"));

const numTables = parseInt(prompt("How many tables do you want?"));

const minGuestsPerTable = Math.floor(numGuests / numTables);

const guestsLeftOver = numGuests % numTables;

const guestsPerTable = Array(numTables).fill(minGuestsPerTable);

for (let i = 0; i < guestsLeftOver; i++) {
    guestsPerTable[i]++;
}

let resultMessage = `Your ${numGuests} guests will be seated as follows: `;
for (let i = 0; i < numTables; i++) {
    if (i > 0) {
        resultMessage += ', and ';
    }
    resultMessage += `${guestsPerTable[i]} table${guestsPerTable[i] > 1 ? 's' : ''} of ${minGuestsPerTable + (i < guestsLeftOver ? 1 : 0)}`;
}

alert(resultMessage);
