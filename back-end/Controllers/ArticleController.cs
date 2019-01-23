using System;
using System.Xml;
using System.Text;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace back_end.Controllers
{
    [Route("api/articles")]
    [ApiController]
    public class ArticleController : ControllerBase
    {
        private DlylContext _context;
        public ArticleController(DlylContext context)
        {
            _context = context;
        }


        void ParseRssFile(String xml)
        {
            XmlDocument rssXmlDoc = new XmlDocument();

            // Load the RSS file from the RSS URL
            rssXmlDoc.Load(xml);

            // Parse the Items in the RSS file
            XmlNodeList rssNodes = rssXmlDoc.SelectNodes("rss/channel/item");

            StringBuilder rssContent = new StringBuilder();

            // Iterate through the items in the RSS file
            foreach (XmlNode rssNode in rssNodes)
            {
                
                //get all article data
                XmlNode rssSubNode = rssNode.SelectSingleNode("title");
                string title = rssSubNode != null ? rssSubNode.InnerText : "";

                rssSubNode = rssNode.SelectSingleNode("link");
                string link = rssSubNode != null ? rssSubNode.InnerText : "";

                rssSubNode = rssNode.SelectSingleNode("description");
                string description = rssSubNode != null ? rssSubNode.InnerText : "";

                rssSubNode = rssNode.SelectSingleNode("pubDate");
                string pubDate = rssSubNode != null ? rssSubNode.InnerText : "";


                //Articles too old? stop searching
                if ((DateTime.Now - Convert.ToDateTime(pubDate)).TotalDays > 100)
                {
                    break;
                }


                //check for relevant pages from each site, get all from ca.gov sites
                if ((title.Contains("California") || description.Contains("California") || link.Contains("ca.gov")) && (title.Contains("compliance")
                || title.Contains("regulation") || title.Contains("regulations")|| title.Contains("regulated")
                || title.Contains("approve") || title.Contains("approved")|| title.Contains("approves")
                || description.Contains("regulation") || description.Contains("regulations")|| description.Contains("regulated")
                || description.Contains("approve") || link.Contains("ca.gov")))
                {
                    //if no matches with the database, we need to add it. 
                    // aka: (new article published from websites below)
                    if ((_context.articles.FirstOrDefault(a => a.title == title)) == null)
                    {
                        Article tempArticle = new Article(link, title, description, Convert.ToDateTime(pubDate));
                        _context.articles.Add(tempArticle);
                    }
                    else
                    {
                        //we can break out of this feed because we know we have searched this far since we have an article from this source
                        break;
                    }
                }

                _context.SaveChanges();

            }

        }

        void AddArticles()
        {

            //all the sites to scrap from
            List<String> links = new List<String>();
             links.Add("https://mjbizdaily.com/feed/");  //keep
             links.Add("https://www.cannalawblog.com/feed/");  //keep
             links.Add("https://cannabislaw.report/feed/"); //keep
             links.Add("https://cannabis.ca.gov/feed/");  //keep


            //check for articles out of date, greater than 100 days
            foreach (var article in _context.articles)
            {
                if ((DateTime.Now - article.time).TotalDays > 100)
                {

                    _context.articles.Remove(article);

                }
            }

            //find or update article DB
            foreach (var link in links)
            {
                ParseRssFile(link);
            }

        }

        // GET api
        [HttpGet]
        public IActionResult Get()
        {
            //need to add articles to DB
            Console.WriteLine("helooo");
            AddArticles();

            if (_context.articles.ToList().Count() == 0)
            {
                return NoContent();
            }

            return Ok(_context.articles
            .Include(a=>a.comments)
            .ThenInclude(a=>a.user));
        }

        // // GET BY ID api
        // [HttpGet("{id}")]
        // public ActionResult Get(int id)
        // {
        //     Article article = _context.articles.FirstOrDefault(a => a.article_id == id);
        //     if (article == null)
        //     {
        //         return NotFound();
        //     }
        //     return Ok(article);
        // }

        // POST api may not need this, done when page is loaded
        [HttpPost]
        public IActionResult Post([FromBody] Comment c)
        {
            if (c == null)
            {
                return BadRequest();
            }

                string today =   
                System.DateTime.Now.Year.ToString() + "-" +
                System.DateTime.Now.Month.ToString() + "-" +
                System.DateTime.Now.Day.ToString()  + " " +
                System.DateTime.Now.Hour.ToString() +  ":" +
                System.DateTime.Now.Minute.ToString() + ":" +
                System.DateTime.Now.Second.ToString();

                c.time = Convert.ToDateTime(today);
                _context.comments.Add(c);
                _context.SaveChanges();
                _context.articles.Find(c.article_id).comments.Add(c);
                _context.SaveChanges();
           

        
               
             return Ok(_context.articles
            .Include(a=>a.comments)
            .ThenInclude(a=>a.user));
        }

        // // PUT api
        // [HttpPut("{id}")]
        // public ActionResult Put(int id, [FromBody] Article a)
        // {
        //     Article article = _context.articles.FirstOrDefault(_a => _a.article_id == id);
        //     if (article == null)
        //     {
        //         return NotFound();
        //     }

        //     article.article_link = a.article_link;
        //     article.title = a.title;
        //     article.summary = a.summary;
        //     _context.SaveChanges();

        //     return Ok(_context.articles.ToList());
        // }



        // DELETE api
        [HttpDelete("{article_id}/{comment_id}")]
        public ActionResult Delete(int article_id,int comment_id)
        {
            
            Comment tempComment = new Comment();
            Article article = _context.articles.FirstOrDefault(a => a.article_id == article_id);
            Console.WriteLine(article.title);
            Comment comment = article.comments.FirstOrDefault(c=>c.comment_id == comment_id);
            _context.comments.Remove(tempComment);
            article.comments.Remove(tempComment);
            _context.SaveChanges();

            return Ok(_context.articles.ToList());
        }
    }
}
