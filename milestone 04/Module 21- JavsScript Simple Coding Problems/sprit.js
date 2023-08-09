const lyrics = "tumi bondhu kala pakhi ami bondhu ki boshonto kale tumai bolte parini. sada sada kala kala";
const parts = lyrics.split(' ')

const sentences = lyrics.split('.')
console.log(sentences);
const chars = lyrics.split('')
console.log(chars);
console.log(parts);


const partial = lyrics.slice(5, 8)
console.log(partial);

const partial2 = lyrics.substring(5, 8)
console.log(partial2);

const lines = [
    'tumi bondhu kala pakhi',
    'amar sonar bangla', 
    'ami tumai valovahi'
];
const newSong = lines.join('. ')
console.log(newSong);