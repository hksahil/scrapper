
const request =require('request-promise');
const cheerio =require('cheerio');


//Scraping famous birthdays
async function scrapbirthday(){

  const bdayUrl='https://www.bornglorious.com/india/birthday/?pd=today';

  try{
        const html= await request.get(bdayUrl);
        const $=await cheerio.load(html);

        const peopleList=[];

        $(".panel-primary").each((index,element)=>{

        // //grabbing the famous personalities
        const personName=$(element).children('.panel-heading').find('b').text().trim();
        const personProfession=$(element).children('.panel-footer').text().trim();
        const person={personName,personProfession};
        peopleList.push(person);


})
console.log(peopleList.slice(1,6));
  }
  catch(err){
    console.log(err);
  }
}
scrapbirthday()


