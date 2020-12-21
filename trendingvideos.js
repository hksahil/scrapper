
const request =require('request-promise');
const cheerio =require('cheerio');


//Scraping twitter trends
async function scraptrends(){

  const trendsUrl='https://twitter-trends.iamrohit.in/india';

  try{
        const html= await request.get(trendsUrl);
        const $=await cheerio.load(html);

        const trends=[];

        $("tr").each((index,element)=>{

        //grabbing the trend details
        const trendName=$(element).find('a').text().trim();
        const trendNumbers=$(element).find('th.sml').text().trim();
        const trend={trendName,trendNumbers};
        trends.push(trend);


})
console.log(trends.slice(1,6));
  }
  catch(err){
    console.log(err);
  }
}
scraptrends()


