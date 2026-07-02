const axios = require('axios');
const cheerio = require('cheerio');

axios.get('https://www.jacarei.sp.gov.br/servidores/')
  .then(res => {
    const $ = cheerio.load(res.data);
    $('a').each((i, el) => {
      const text = $(el).text().trim();
      const href = $(el).attr('href');
      if (text && href && (text.includes('Estatuto') || text.includes('Remuneração') || text.includes('Servidores'))) {
        console.log(`${text} -> ${href}`);
      }
    });
  })
  .catch(console.error);
