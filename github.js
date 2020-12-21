const request =require('request-promise');
const cheerio =require('cheerio');


//Scraping Github repos
async function scraprepos(){

  const githubUrl='https://github.com/trending';
  const specificUrl=`https://github.com/trending/${selectedlang}?since=daily`;
  const selectedlang='java';
  const urlToScrap = selectedlang ? specificUrl : githubUrl;


  try{
        const html= await request.get(urlToScrap);
        const $=await cheerio.load(html);

        const repos=[];

        $("article.Box-row").each((index,element)=>{

        //grabbing the repo details
        const reponame=$(element).children("h1").children("a").text().replace(/\s/g,'');
        const tempurl=$(element).children("h1").children("a").attr('href').trim();
        const repolink='https://github.com'+ tempurl;
        const repodescription=$(element).children("p").text().trim();

        //creating repo object
        const repo={reponame,repolink,repodescription};
        repos.push(repo)

})

        console.log(repos);
  }
  catch(err){
    console.log(err);
  }
}
scraprepos()




