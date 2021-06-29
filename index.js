const clientBuilder = require('./config');
const clientBuilder = require('./config');

let clientArray = []

const configsArray = [{

login: "sanderon20",
password: "r6yb9o2o",
sharedSecret: "BtHRyL5u/P9be3VM3DCpjYdCVRE=",
games: [
730, // CounterStrike Global Offensive
231430, // Company of Heroes 2
337000, // Deus Ex Mankind Divided
239140, // Dying Light
]
},
{
login: "login2",
password: "pass2",
sharedSecret: "token2",
games: [
570, // Dota 2
548430, // Deep Rock Galactic
4000, // Gmod
602960 // Barotrauma
]
}]


console.log('Bot number: ' + configsArray.length);

for (let config of configsArray) {

let client = clientBuilder.execute(config);
client.doLogin();
clientArray.push(client);
}
console.log('Running ' + configsArray.length + ' bots.');