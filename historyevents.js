

const request =require('request-promise');
const cheerio =require('cheerio');


//Scraping history events
async function scraphistoryevents(){

  const eventsurl='https://www.onthisday.com/countries/india';

  try{
        const html= await request.get(eventsurl);
        const $=await cheerio.load(html);

        const events=[];

        $(".event").each((index,element)=>{

        //grabbing the game details
        const eventName=$(element).text().trim();
        const event={eventName};
        events.push(event);
})
console.log(events.slice(0,6));
  }
  catch(err){
    console.log(err);
  }
}
scraphistoryevents()


