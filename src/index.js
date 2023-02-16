const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};



function decode(expr) {
    
    const alphabet = {
        '**********': ' ',
        '1010101111': '3',
        '1111111111': '0',
        '1110101010': '6',
        '1011111111': '1',
        '1111101010': '7',
        '1010101010': '5',
        '1111111110': '9',
        '1111111010': '8',
        '1010101011': '4',
        '1010111111': '2',
        '0011111010': 'z',
        '0011101111': 'y',
        '0000001011': 'a',
        '0011101010': 'b',
        '0011101110': 'c',
        '0010101110': 'f',
        '0000101011': 'u',
        '0000111011': 'k',
        '0000111010': 'd',
        '0011111011': 'q',
        '0000000010': 'e',
        '0000111110': 'g',
        '0010101010': 'h',
        '0000001010': 'i',
        '0010111111': 'j',
        '0010111110': 'p',
        '0010111010': 'l',
        '0000001111': 'm',
        '0000001110': 'n',
        '0000111111': 'o',
        '0000101110': 'r',
        '0010101011': 'v',
        '0000101010': 's',
        '0000000011': 't',
        '0000101111': 'w',
        '0011101011': 'x'
    };
    
    const encodedLetters = [];
    for (let i = 0; i < expr.length; i += 10) {
        encodedLetters.push(expr.slice(i, i + 10));
    }

    const decodedLetters = [];
    for (let i = 0; i < encodedLetters.length; i++) {
        const letter = encodedLetters[i];
        if (letter in alphabet) {
            decodedLetters.push(alphabet[letter]);
        }
    }
    
    return decodedLetters.join('');
}
    

  
module.exports = {
    decode
}