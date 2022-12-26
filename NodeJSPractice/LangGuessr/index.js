import { franc, francAll } from 'franc';
import langs from 'langs'

// const franc = require('franc');
// const langs = require('langs');
// const colors = require('colors');

const input = process.argv[2];
const langCode = franc(input);
const language = langs.where("3", langCode);
console.log(`Our best guess is: ${language.name}`.green);

//console.log(franc('Alle menslike wesens word vry')) //=> 'afr')

// if (langCode === 'und') {
//     console.log("SORRY, couldn't figure it out ! try with more")
// } else {
//     const language = langs.where("3", langCode);
//     console.log(`Our best guess is: ${language.name}`.green);
// }


