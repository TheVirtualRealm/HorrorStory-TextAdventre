

//#region enemies
var enemy = [


    {
        'name': 'Arachna',
        'type': 'Spider',
        'ability': 'Toxic Bite',
        'health': 350,
        'power': 15,
        'dodge': 6,
        'block': 35,
    },

    {
        'name': 'Crimson',
        'type': 'Pyromaniac',
        'ability': 'FlameThrower',
        'health': 600,
        'power': 30,
        'dodge': 10,
        'block': 20,
    },

    {
        'name': 'Damien',
        'type': 'Schizophrenic',
        'ability': 'The Whispers',
        'health': 250,
        'power': 85,
        'dodge': 70,
        'block': 55,
    },

    {
        'name': 'Midnight',
        'type': 'Dissociative',
        'ability': 'Memory loss',
        'health': 100,
        'power': 100,
        'dodge': 95,
        'block': 85,
    },

    {
        'name': 'Lilly',
        'type': 'Insomniac',
        'ability': 'Deathly Rage',
        'health': 215,
        'power': 25,
        'dodge': 5,
        'block': 3,
    },
]
//#endregion


//#region heroes
var heroes = [

{
    'name': 'Dr. Fox',
        'type': 'Human',
        'ability': 'Lethal Injection',
        'health': 350,
        'power': 20,
        'dodge': 10,
        'block': 35,
},

{
    'name': 'Dr. Yanno',
        'type': 'Human',
        'ability': 'hammer',
        'health': 350,
        'power': 15,
        'dodge': 11,
        'block': 25,
}

]

//#endregion


//#region Hero / Enemie Multiplier
var heroMultiplier;
function heroRoll(){
heroMultiplier = Math.floor(Math.random()*10);
console.log(`hero rolled a: ${heroMultiplier}`);
}
// heroRoll();

var enemyMultiplier;
function enemyRoll(){
enemyMultiplier = Math.floor(Math.random()*10);
console.log(`The Enemy rolled a: ${enemyMultiplier}`);
}
// enemyRoll();
//#endregion


//#region Hero / Enemie Selector

// var heroSelection;
function randomHero(){
    heroSelection = Math.floor(Math.random()*2)
    var heroName = heroes[heroSelection]['name'];
    var heroAbility = heroes[heroSelection]['ability'];
    console.log(`Your hero has been selected: ${heroName}`);
    document.getElementById('heroText').innerHTML = (`Hero Selected: <br>  ${heroName}: Experienced with ${heroAbility} <br><br>`)

}
// randomHero();

// var enemySelection;
function randomEnemy(){
    enemySelection = Math.floor(Math.random()*5)
    var enemyName = enemy[enemySelection]['name'];
    var enemyAbility = enemy[enemySelection]['ability'];
    console.log(`Your Enemy has been selected: ${enemyName}`);
document.getElementById('enemyText').innerHTML = (`Enemy Selected:<br>${enemyName}: Their ability is ${enemyAbility}` )

document.getElementById("startBattle").style.display = "inline-block";
// document.getElementById("startBattle").style.display = "block";
// document.getElementById("startBattle").style.textAlign = "center";
document.getElementById("startGame").style.display = "none";

}
// randomEnemy();

//#endregion


//#region Starter Battle

// function firstBattle(){
//     var healtLost = [enemyRoll-heroRoll]
//     if (heroRoll < enemyRoll){
//         document.getElementById("heroHP").innerHTML = (`Heroes health is now at ${enemyRoll-heroRoll()}`);
//         document.getElementById("enemyHP").innerHTML = (`Ememies health is now at ${enemyRoll-heroRoll()}`);
//     }
    
// }



//#endregion    





