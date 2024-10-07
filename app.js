

const characters = {
    jun: { name: "Jun Kazama", style: "Karate", country: "Japan", img: "https://static.bandainamcoent.eu/high/tekken/tekken-8/02-characters/new-gallery/Screenshots_V1/Jun/jun-poster.jpg", age: 35 },
    jin: { name: "Jin Kazama", style: "Karate", country: "Japan", img: "https://facts.net/wp-content/uploads/2023/09/18-facts-about-jin-kazama-tekken-the-motion-picture-1694570253.jpg", age: 28 },
    lei: { name: "Lei Wulong", style: "Drunken Master", country: "China", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiW1usVnUR_IXYBpS9XEUIX-f2Ncjlwp79-w", age: 41 },
    law: { name: "Marshall Law", style: "Jeet Kune Do", country: "USA", img: "https://www.glitched.online/wp-content/uploads/2023/03/4111971-tekken-8-marshall-law.jpg", age: 50 },
    baek: { name: "Baek Doo San", style: "Taekwondo", country: "South Korea", img: "https://image.api.playstation.com/cdn/UP0700/CUSA05972_00/FREE_CONTENTCSmVZnLS0ND7snSOolkr/GqmkXnQp_PREVIEW_SCREENSHOT2_168895.jpg", age: 35 },
    asuka: { name: "Asuka Kazama", style: "Kazama Style Traditional Martial Arts", country: "Japan", img: "https://pm1.aminoapps.com/6489/261c480533ca12a71d37d5f79c82cf892437fd6d_00.jpg", age: 22 }
};


let playerOne = null;
let playerTwo = null;


function selectCharacter(characterId, player) {
    const character = characters[characterId];
    const playerElement = document.getElementById(player === 1 ? 'playerOne' : 'playerTwo');
    
    
    if (player === 1) {
        playerOne = character;
    } else {
        playerTwo = character;
    }

    
    playerElement.innerHTML = `<h2>Player ${player}: ${character.name}</h2>
                               <img src="${character.img}" alt="${character.name}">
                               <p>Fighting Style: ${character.style}</p>
                               <p>Country: ${character.country}</p>
                               <p>Age: ${character.age}</p>`;

    
    highlightSelected(characterId, player);
}


function highlightSelected(characterId, player) {
    
    const charactersElements = document.querySelectorAll('.character');
    charactersElements.forEach(el => el.classList.remove('selected'));

    
    const selectedElement = document.querySelector(`.character[onclick*="${characterId}"]`);
    selectedElement.classList.add('selected');
}



function sumArray(numbers) {
    return numbers.reduce((acc, num) => acc + num, 0);
}


function averageArray(numbers) {
    return sumArray(numbers) / numbers.length;
}


function findLongestString(strings) {
    return strings.reduce((longest, current) => current.length > longest.length ? current : longest, "");
}


function stringsLongerThan(strings, length) {
    return strings.filter(str => str.length > length);
}


function printNumbers(n) {
    if (n === 0) return;
    printNumbers(n - 1);
    console.log(n);
}


const people = [
    { id: "42", name: "Bruce", occupation: "Knight", age: 41 },
    { id: "48", name: "Barry", occupation: "Runner", age: 25 },
    { id: "57", name: "Bob", occupation: "Fry Cook", age: 19 },
    { id: "63", name: "Blaine", occupation: "Quiz Master", age: 58 },
    { id: "7", name: "Bilbo", occupation: "None", age: 111 }
];


function sortByAge(arr) {
    return arr.sort((a, b) => a.age - b.age);
}


function filterByAge(arr) {
    return arr.filter(person => person.age <= 50);
}


function mapOccupationAndAge(arr) {
    return arr.map(person => ({
        ...person,
        job: person.occupation,
        age: person.age + 1
    }));
}


function sumOfAges(arr) {
    return arr.reduce((acc, person) => acc + person.age, 0);
}


function averageAge(arr) {
    return sumOfAges(arr) / arr.length;
}



function incrementAge(person) {
    if (!person.age) person.age = 0;
    person.age += 1;
    person.updated_at = new Date();
}


function copyAndIncrementAge(person) {
    const newPerson = { ...person };
    if (!newPerson.age) newPerson.age = 0;
    newPerson.age += 1;
    newPerson.updated_at = new Date();
    return newPerson;
}
