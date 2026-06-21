const fs = require('fs');
const pdf = require('pdf-parse');

const dataBuffer = fs.readFileSync('../manual_brasileiro_fiscalizacao.pdf');

pdf(dataBuffer).then(function(data) {
    fs.writeFileSync('output.txt', data.text);
    console.log('PDF parsed and saved to output.txt');
    console.log('Total pages:', data.numpages);
}).catch(function(error) {
    console.error('Error parsing PDF:', error);
});
