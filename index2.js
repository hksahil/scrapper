const request =require('request-promise');
const cheerio =require('cheerio');


//Scraping Songs
async function scrapsongs(){

  //All language Trending Trending Page
  const songsUrl='https://www.billboard.com/charts/hot-100';

  try{
        const html= await request.get(songsUrl);
        const $=await cheerio.load(html);

        const songs=[];

        $(".chart-element__information").each((index,element)=>{

        //grabbing the song details
        const songName=$(element).children('.chart-element__information__song').text().trim();
        const songArtist=$(element).children('.chart-element__information__artist').text().trim();

        const song={songName,songArtist};
        songs.push(song);

})
console.log(songs);
  }
  catch(err){
    console.log(err);
  }
}
scrapsongs()



