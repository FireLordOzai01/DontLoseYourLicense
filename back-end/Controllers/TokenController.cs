using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Security.Claims;
using Microsoft.AspNetCore.Authorization;
using System.IdentityModel.Tokens.Jwt;
using System.Text;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using BCrypt.Net;
namespace back_end
{
   public class ValidUser
   {
       public User user { get; set; } = null;
       public string token { get; set; }
       public ValidUser() { }
       public ValidUser(string str)
       {
           this.token = str;
       }
       public ValidUser(User user, string str)
       {
           this.user = user;
           this.token = str;
       }
   }
   [Route("api/token")]
   [ApiController]
   public class TokenController : Controller
   {
       private IConfiguration _config;
       private DlylContext _context;
       public TokenController(IConfiguration config, DlylContext context)
       {
           _config = config;
           _context = context;
       }
       [HttpPost]
       [Route("loginUser")]
       public ValidUser GetToken([FromBody] User user)
       {
           var tempUser = _context.users.FirstOrDefault(u => u.username == user.username);
           bool validPassword = BCrypt.Net.BCrypt.Verify(user.password, tempUser.password);
           if (tempUser != null && validPassword)
           {
               string today =
           System.DateTime.Now.Year.ToString() + "-" +
           System.DateTime.Now.Month.ToString() + "-" +
           System.DateTime.Now.Day.ToString() + " " +
           System.DateTime.Now.Hour.ToString() + ":" +
           System.DateTime.Now.Minute.ToString() + ":" +
           System.DateTime.Now.Second.ToString();
               tempUser.active_date = Convert.ToDateTime(today);
               _context.SaveChanges();
               return BuildToken(tempUser);
           }
           else
           {
               return (new ValidUser("not a valid login"));
           }
       }
       [HttpPost]
       [Route("Register")]
       public User Register([FromBody] User user)
       {
           user.password = BCrypt.Net.BCrypt.HashPassword(user.password, SaltRevision.Revision2A);
           string today =
           System.DateTime.Now.Year.ToString() + "-" +
           System.DateTime.Now.Month.ToString() + "-" +
           System.DateTime.Now.Day.ToString() + " " +
           System.DateTime.Now.Hour.ToString() + ":" +
           System.DateTime.Now.Minute.ToString() + ":" +
           System.DateTime.Now.Second.ToString();
           user.creation_date = Convert.ToDateTime(today);
           _context.users.Add(user);
           _context.SaveChanges();
           return user;
       }
       private ValidUser BuildToken(User user)
       {
           var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config["Jwt:Key"]));
           var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);
           var token = new JwtSecurityToken(_config["Jwt:Issuer"],
             _config["Jwt:Issuer"],
             expires: DateTime.Now.AddMinutes(30),
             signingCredentials: creds);
           return new ValidUser(user, new JwtSecurityTokenHandler().WriteToken(token));
       }
   }
}