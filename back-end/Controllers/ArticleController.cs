using System;
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

        // GET api
        [HttpGet]
        public ActionResult Get()
        {
            if(_context.articles.ToList().Count() == 0)
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

        // POST api
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
            if(article == null)
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
            if(article == null)
            {
                return NotFound();
            }
            _context.articles.Remove(article);
            _context.SaveChanges();

            return Ok(_context.articles.ToList());
        }
    }
}
