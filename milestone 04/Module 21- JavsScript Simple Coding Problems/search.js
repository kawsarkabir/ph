const lyrics = "tumi bondhu kala pakhi ami bondhu ki boshonto kale tumai bolte parini";
const searchString = "pakhi";

const doesExitOnlieLine = lyrics.toLowerCase().includes(searchString.toLowerCase());
console.log(doesExitOnlieLine);
// ==========================================================================

// indexOf
console.log(lyrics.indexOf('kala'))
console.log(lyrics.indexOf('tumi'));
//
if(lyrics.indexOf('sada') !== -1){
    console.log('exits in side the string');
}else{
    console.log('cannot find it');
}


// startsWith
console.log(lyrics.startsWith('2mi'));

// endsWith
const fileName = 'mybiodata.pdf'
const otherFile = 'mypic.png'
fileName.endsWith('.pdf')