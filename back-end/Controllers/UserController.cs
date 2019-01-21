using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace back_end.Controllers
{
    [Route("api/users")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private DlylContext _context;
        public UserController(DlylContext context)
        {
            _context = context;
        }

        // GET api
        [HttpGet]
        public ActionResult Get()
        {
            if(_context.users.ToList().Count() == 0)
            {
                return NoContent();
            }
            return Ok(_context.users.ToList());
        }

        // GET BY ID api
        [HttpGet("{id}")]
        public ActionResult Get(int id)
        {
            User user = _context.users.FirstOrDefault(u => u.user_id == id);
            if (user == null)
            {
                return NotFound();
            }
            return Ok(user);
        }

        // POST api
        [HttpPost]
        public ActionResult Post([FromBody] User u)
        {
            if (u == null)
            {
                return BadRequest();
            }

            _context.users.Add(u);
            _context.SaveChanges();

            return Ok(_context.users.ToList());
        }

        // PUT api
        [HttpPut("{id}")]
        public ActionResult Put(int id, [FromBody] User u)
        {
            User user = _context.users.FirstOrDefault(_u => _u.user_id == id);
            if(user == null)
            {
                return NotFound();
            }

            user.username = u.username;
            user.email = u.email;
            user.password = u.password;
            user.creation_date = u.creation_date;
            user.company_affiliation = u.company_affiliation;
            user.user_industry = u.user_industry;
            user.real_name = u.real_name;
            user.activity_count = u.activity_count;
            user.avatar = u.avatar;
            _context.SaveChanges();

            return Ok(_context.users.ToList());
        }

        // DELETE api
        [HttpDelete("{id}")]
        public ActionResult Delete(int id)
        {
            User user = _context.users.FirstOrDefault(u => u.user_id == id);
            if(user == null)
            {
                return NotFound();
            }
            _context.users.Remove(user);
            _context.SaveChanges();

            return Ok(_context.users.ToList());
        }
    }
}
