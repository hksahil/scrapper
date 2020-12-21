
const request =require('request-promise');
const cheerio =require('cheerio');


//Scraping games
async function scrapgames(){

  const gamesUrl='https://steamcharts.com/top';

  try{
        const html= await request.get(gamesUrl);
        const $=await cheerio.load(html);

        const games=[];

        $("tr").each((index,element)=>{

        //grabbing the game details
        const gameName=$(element).children('.game-name').children('a').text().trim();
        const currentGamePlayers=$(element).children('.peak-concurrent').text().trim();
        const game={gameName,currentGamePlayers};
        games.push(game);


})
console.log(games.slice(1,6));
  }
  catch(err){
    console.log(err);
  }
}
scrapgames()


