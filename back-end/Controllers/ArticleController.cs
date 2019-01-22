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
                //get current date to add to article
                string today =
                System.DateTime.Now.Year.ToString() + "-" +
                System.DateTime.Now.Month.ToString() + "-" +
                System.DateTime.Now.Day.ToString() + " " +
                System.DateTime.Now.Hour.ToString() + ":" +
                System.DateTime.Now.Minute.ToString() + ":" +
                System.DateTime.Now.Second.ToString();

                XmlNode rssSubNode = rssNode.SelectSingleNode("title");
                string title = rssSubNode != null ? rssSubNode.InnerText : "";

                rssSubNode = rssNode.SelectSingleNode("link");
                string link = rssSubNode != null ? rssSubNode.InnerText : "";

                rssSubNode = rssNode.SelectSingleNode("description");
                string description = rssSubNode != null ? rssSubNode.InnerText : "";

                if (title.Contains("compliance")
                || title.Contains("regulation")
                || title.Contains("approves")
                || description.Contains("regulation"))
                {
                    //if no matches with the database, we need to add it. 
                    // aka: (new article published from websites below)
                    if ((_context.articles.FirstOrDefault(a => a.title == title)) == null)
                    {

                        Article tempArticle = new Article(link,title,description,Convert.ToDateTime(today));
                         _context.articles.Add(tempArticle);
                         Console.WriteLine("hereeee");


                    }
                    //we need to check current articles in the DB for date older than a week
                    else
                    {
                        DlylContext _tempContext = _context;

                        foreach (var article in _tempContext.articles)
                        {
                            if ((article.time - DateTime.Now).TotalDays > 7)
                            {

                                _context.articles.Remove(article);

                            }

                        }

                    }
                }

                  _context.SaveChanges();

            }

        }

        void AddArticles()
        {

            List<String> links = new List<String>();
            links.Add("https://mjbizdaily.com/feed/");
            links.Add("https://cannabiz.media/feed/");
            links.Add("https://www.liwts.org/feed/");
            links.Add("https://www.covasoftware.com/blog/rss.xml");
            links.Add("https://medicalmarijuana411.com/feed/");
            links.Add("https://www.medicalmarijuanainc.com/feed/");
            links.Add("https://grizzle.com/marijuana/feed/");
            links.Add("https://merryjane.com/feed/all.rss");
            links.Add("https://www.cannalawblog.com/feed/");
            links.Add("https://news.weedmaps.com/feed/");
            links.Add("https://hightimes.com/feed/");
            links.Add("https://cannabislaw.report/feed/");
            links.Add("http://www.cnbc.com/id/101432347/device/rss");
            links.Add("https://cannabis.ca.gov/feed/");
            links.Add("https://www.cannabisculture.com/feed/");
            links.Add("https://mjobserver.com/feed/");
            links.Add("https://www.leafly.com/feed");
            links.Add("https://greencamp.com/feed/");
            links.Add("https://thebluntinvestor.com/feed/");
            links.Add("http://daggamagazine.com/feed/");
            links.Add("https://www.crrh.org/news/taxonomy/term/3956/0/feed");
            links.Add("http://marijuanaworldnews.com/feed/");
            links.Add("https://www.marijuana.com/feed/");

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

            return Ok(_context.articles.ToList());
        }

        // GET BY ID api
        [HttpGet("{id}")]
        public ActionResult Get(int id)
        {
            Article article = _context.articles.FirstOrDefault(a => a.article_id == id);
            if (article == null)
            {
                return NotFound();
            }
            return Ok(article);
        }

        // POST api may not need this, done when page is loaded
        [HttpPost]
        public ActionResult Post([FromBody] Article a)
        {
            if (a == null)
            {
                return BadRequest();
            }

            _context.articles.Add(a);
            _context.SaveChanges();

            return Ok(_context.articles.ToList());
        }

        // PUT api
        [HttpPut("{id}")]
        public ActionResult Put(int id, [FromBody] Article a)
        {
            Article article = _context.articles.FirstOrDefault(_a => _a.article_id == id);
            if (article == null)
            {
                return NotFound();
            }

            article.article_link = a.article_link;
            article.title = a.title;
            article.summary = a.summary;
            _context.SaveChanges();

            return Ok(_context.articles.ToList());
        }

        // DELETE api
        [HttpDelete("{id}")]
        public ActionResult Delete(int id)
        {
            Article article = _context.articles.FirstOrDefault(a => a.article_id == id);
            if (article == null)
            {
                return NotFound();
            }
            _context.articles.Remove(article);
            _context.SaveChanges();

            return Ok(_context.articles.ToList());
        }
    }
}
