
const request =require('request-promise');
const cheerio =require('cheerio');


//Scraping Songs
async function scrapsongs(){

  const indiansongsUrl='https://spotifycharts.com/regional/in/daily/latest';
  const globalsongsUrl='https://spotifycharts.com/regional/global/daily/latest';
  const regionalsongflag=null;
  const urlToScrap = regionalsongflag ? indiansongsUrl : globalsongsUrl;

  try{
        const html= await request.get(urlToScrap);
        const $=await cheerio.load(html);

        const songs=[];

        $(".chart-table-track").each((index,element)=>{

        //grabbing the song details
        const songName=$(element).children('strong').text().trim();
        const songArtist=$(element).children('span').text().trim();

        const song={songName,songArtist};
        songs.push(song);


})
console.log(songs.slice(1,6));
  }
  catch(err){
    console.log(err);
  }
}
scrapsongs()


