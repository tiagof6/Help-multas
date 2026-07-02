const axios = require('axios');
const cheerio = require('cheerio');

axios.get('https://egov.jacarei.sp.gov.br/pmjacarei/websis/siapegov/recursos_humanos/grh/grh_rh_online.php')
  .then(res => {
    const $ = cheerio.load(res.data);
    $('a').each((i, el) => {
      const text = $(el).text().trim();
      const href = $(el).attr('href');
      if (text && href) {
        console.log(`${text} -> ${href}`);
      }
    });
  })
  .catch(console.error);
