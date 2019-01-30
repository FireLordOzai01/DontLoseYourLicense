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
using System.Net;
using System.IO;
using System.Runtime.Serialization.Json;
using Newtonsoft.Json.Linq;
using Newtonsoft.Json;



namespace back_end.Controllers
{
    [Route("api/linkedin")]
    [ApiController]
    public class OAuthLinkedInController : ControllerBase
    {
        // POST api
        [HttpPost]
        public IActionResult Post([FromBody] string code)
        {
            
            var endpoint = String.Format("https://www.linkedin.com/oauth/v2/accessToken?grant_type=authorization_code&code="+code+"&redirect_uri=http://localhost:3000/linkedin&client_id=86aojroi51e35k&client_secret=TD6uCe1IKkOP7Xkf");
            linkeInApi(endpoint);

            return Ok();
        }

        public string linkeInApi(string endpoint)
        {
            // byte[] dataStream = Encoding.UTF8.GetBytes(requestJson);
            var responsetext = string.Empty;
            WebRequest request = HttpWebRequest.Create(endpoint);
            WebResponse response = null;
            try
            {
                request.ContentType = "application/x-www-form-urlencoded";
                // SetBasicAuthHeader(request, "anystring", key);  // BASIC AUTH
                request.Method = "POST";
                // request.ContentLength = dataStream.Length;
                Stream newstream = request.GetRequestStream();

                // newstream.Write(dataStream, 0, dataStream.Length);
                newstream.Close();

                response = request.GetResponse();


                // get the result
                using (StreamReader reader = new StreamReader(response.GetResponseStream()))
                {
                    JsonSerializer json = new JsonSerializer();
                    JObject content = JObject.Parse(reader.ReadToEnd());

                    responsetext = reader.ReadToEnd();
                }

                response.Close();
            }


            catch (WebException ex)
            {

                using (var sr = new StreamReader(response.GetResponseStream()))
                {
                    responsetext = sr.ReadToEnd();
                }
            }
            return responsetext;
        }

    }


}