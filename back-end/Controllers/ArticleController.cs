using System;
using System.Xml;
using System.Text;
using System.Collections.Generic;
using System.Linq;
using System.Xml.Linq;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Threading;
using System.Threading.Tasks;
using System.Net.Http;
using System.Text.RegularExpressions;
using System.Net.Http.Formatting;
using MailChimp;
using MailChimp.Net;
using MailChimp.Api.Net.Domain;
using MailChimp.Net.Core;
using MailChimp.Net.Models;


namespace back_end.Controllers
{


class MailchimpRepository
{
 private const string ApiKey = "(your API key)";
private const string ListId = "(your list id)";
 private const int TemplateId = 9999; // (your template id)
private MailChimpManager _mailChimpManager = new MailChimpManager(ApiKey);
 private Setting _campaignSettings = new Setting
 {
  ReplyTo = "your@email.com",
  FromName = "The name that others will see when they receive the email",
  Title = "Your campaign title",
  SubjectLine = "The email subject",
 };
 
 // `html` contains the content of your email using html notation
 public void CreateAndSendCampaign(string html)
 {
  var campaign = _mailChimpManager.Campaigns.AddAsync(new Campaign
  {
   Settings = _campaignSettings,
   Recipients = new Recipient { ListId = ListId },
   Type = CampaignType.Regular
  }).Result;
var timeStr = DateTime.Now.ToString();
  var content = _mailChimpManager.Content.AddOrUpdateAsync(
   campaign.Id,
   new ContentRequest()
   {
    Template = new ContentTemplate
    {
     Id = TemplateId,
     Sections = new Dictionary<string, object>()
      {
       { "body_content", html },
       { "preheader_leftcol_content", $"<p>{timeStr}</p>" }
      }
    }
   }).Result;
_mailChimpManager.Campaigns.SendAsync(campaign.Id).Wait();
 }
public List<Template> GetAllTemplates()
  => _mailChimpManager.Templates.GetAllAsync().Result.ToList();
public List<List> GetAllMailingLists()
  => _mailChimpManager.Lists.GetAllAsync().Result.ToList();
public Content GetTemplateDefaultContent(string templateId)
  => (Content) _mailChimpManager.Templates.GetDefaultContentAsync(templateId).Result;
}






    [Route("api/articles")]
    [ApiController]
    public class ArticleController : ControllerBase
    {
        private readonly DlylContext _context;
        public ArticleController(DlylContext context)
        {
            _context = context;
        }

        void ParseRssFile(String xml)
        {
            XmlDocument rssXmlDoc = new XmlDocument();

            // Load the RSS file from the RSS URL
            rssXmlDoc.LoadXml(xml);


            // Parse the Items in the RSS file
            XmlNodeList rssNodes = rssXmlDoc.SelectNodes("rss/channel/item");

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
                || title.Contains("regulation") || title.Contains("regulations") || title.Contains("regulated")
                || title.Contains("approve") || title.Contains("approved") || title.Contains("approves")
                || description.Contains("regulation") || description.Contains("regulations") || description.Contains("regulated")
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



    //     public bool CampaignCreate(string campaignName, string subject, string emailText,
    //     string emailSender, string emailSenderName, DateTime sendTime,
    //     int templateID, string listID, ref string campaignID)
    // {
    //     MailChimpManager mgr = new MailChimpManager(_apiKey);
    //     try
    //     {
    //         if (String.IsNullOrWhiteSpace(campaignID))
    //             CampaignExists(campaignName, out campaignID);

    //         // convert to utc and round up to nearest 15 mins
    //         if (sendTime.Kind != DateTimeKind.Utc)
    //             sendTime = sendTime.ToUniversalTime();

    //         sendTime = sendTime.RoundUp(TimeSpan.FromMinutes(15));

    //         Models.Campaign newCampaign = new Models.Campaign();
    //         newCampaign.Id = campaignID;
    //         newCampaign.Type = CampaignType.Regular;
    //         newCampaign.Settings = new Models.Setting();
    //         newCampaign.Settings.Title = campaignName;
    //         newCampaign.Settings.SubjectLine = subject;
    //         newCampaign.Recipients = new Models.Recipient();
    //         newCampaign.Recipients.ListId = listID;
    //         newCampaign.Settings.FromName = emailSenderName;
    //         newCampaign.Settings.ReplyTo = emailSender;
    //         newCampaign.Settings.TemplateId = templateID;

    //         newCampaign = mgr.Campaigns.AddOrUpdateAsync(newCampaign).Result;

    //         campaignID = newCampaign.Id;
    //         ContentRequest content = new ContentRequest();
    //         content.Html = emailText;

    //         mgr.Content.AddOrUpdateAsync(campaignID, content);

    //         mgr.Campaigns.ScheduleAsync(newCampaign.Id, new CampaignScheduleRequest()
    //         { ScheduleTime = sendTime.ToString("o") } );

    //         mgr.Campaigns.SendAsync(campaignID);

    //         return (!String.IsNullOrWhiteSpace(campaignID));
    //     }
    //     finally
    //     {
    //         mgr = null;
    //     }
    // }


        async Task<string> Download(string url) // async function
        {
            string stringContent = null;
            using (HttpClient client = new HttpClient())
            {
                try
                {
                    var byteContent = await client.GetByteArrayAsync(url);
                    stringContent = Encoding.UTF8.GetString(byteContent, 0, byteContent.Length);
                }
                catch
                {
                }
            }


            return stringContent;

        }



        void AddArticles()
        {
            List<String> links = new List<String>();
            List<Task> TaskList = new List<Task>(); // list of tasks

            links.Add("https://mjbizdaily.com/feed/");
            links.Add("https://www.cannalawblog.com/feed/");
            links.Add("https://cannabislaw.report/feed/");
            links.Add("https://cannabis.ca.gov/feed/");
            links.Add("https://420intel.com/taxonomy/term/401/feed");


            //multiple threads for each url
            foreach (var link in links)
            {
                TaskList.Add(Download(link));
            }


            Task.WaitAll(TaskList.ToArray());

            //have xml, can now update DB
            foreach (Task<string> task in TaskList)
            {
                if (task.Result != null)
                    ParseRssFile(task.Result);
            }


            if (_context.articles != null)
            {
                DlylContext tempContext = _context;

                //check for articles out of date, greater than 100 days and remove
                foreach (var article in tempContext.articles)
                {
                    if ((DateTime.Now - article.time).TotalDays > 100)
                    {

                        _context.articles.Remove(article);
                        _context.SaveChanges();


                    }
                }
            }

        }


public static string StripHTML(string input)
{
   return Regex.Replace(input, "<.*?>", String.Empty);
}


        // GET api
        [HttpGet]
        public IActionResult Get()
        {
            //need to update articles to DB 
            AddArticles();

            foreach(var article in _context.articles)
            {
                article.summary = StripHTML(article.summary);
            }
            _context.SaveChanges();


            return Ok(_context.articles
            .Include(a => a.comments)
            .ThenInclude(a => a.user));
        }


        // POST used to add comment to a specific article
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
            System.DateTime.Now.Day.ToString() + " " +
            System.DateTime.Now.Hour.ToString() + ":" +
            System.DateTime.Now.Minute.ToString() + ":" +
            System.DateTime.Now.Second.ToString();

            c.time = Convert.ToDateTime(today);
            _context.comments.Add(c);
            _context.SaveChanges();

            return Ok(_context.articles
           .Include(a => a.comments)
           .ThenInclude(a => a.user));
        }


        // DELETE api
        [HttpDelete("{article_id}/{comment_id}")]
        public ActionResult Delete(int article_id, int comment_id)
        {

            Comment comment = _context.comments.FirstOrDefault(c => c.article_id == article_id && c.comment_id == comment_id);
            _context.comments.Remove(comment);
            _context.SaveChanges();

            return Ok(_context.articles
           .Include(a => a.comments)
           .ThenInclude(a => a.user));
        }
    }
}
