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
using System.Net.Http;
using System.Web;
// for class Encoding




namespace back_end.Controllers
{
    static class linkedinRepository
    {
        static private string clientId = Keys.linkedInClientId;
        static private string clientSecret = Keys.linkedInClientSecret;
    }

    [Route("api/linkedin")]
    [ApiController]
    public class OAuthLinkedInController : ControllerBase
    {
        // POST api
        [HttpPost]
        public IActionResult Post([FromBody] string code)
        {
            Console.WriteLine("***********");
            Console.WriteLine(code);

            string str = linkeInApi(code);
            return Ok(str);
        }

        public string linkeInApi(string code)
        {

            string authUrl = "https://www.linkedin.com/uas/oauth2/accessToken";
            var sign = "grant_type=authorization_code&code=" + HttpUtility.HtmlEncode(code) + "&redirect_uri=" + HttpUtility.HtmlEncode("http://localhost:3000/linkedin/") + "&client_id=" + Keys.linkedInClientId + "&client_secret=" + Keys.linkedInClientSecret;
            //byte[] byteArray = Encoding.UTF8.GetBytes(sign);
            HttpWebRequest webRequest = WebRequest.Create(authUrl + "?" + sign) as HttpWebRequest;

            // HttpWebRequest webRequest = WebRequest.Create(url) as HttpWebRequest;

            webRequest.Method = "POST";
            webRequest.ContentType = "application/x-www-form-urlencoded";
            Stream dataStream = webRequest.GetRequestStream();
            String postData = String.Empty;
            byte[] postArray = Encoding.ASCII.GetBytes(postData);
            dataStream.Write(postArray, 0, postArray.Length);
            dataStream.Close();
            WebResponse response = webRequest.GetResponse();
            dataStream = response.GetResponseStream();
            Console.WriteLine(dataStream);
            StreamReader responseReader = new StreamReader(dataStream);
            String returnVal = responseReader.ReadToEnd().ToString();
            responseReader.Close();
            dataStream.Close();
            response.Close();
            // Console.WriteLine(returnVal);
            

            return returnVal;

            // string authUrl = "https://www.linkedin.com/uas/oauth2/accessToken";

            // var sign = "grant_type=authorization_code" + "&code=" + code + "&redirect_uri=" + HttpUtility.HtmlEncode("http://localhost:3000/linkedin") + "&client_id=" + "86aojroi51e35k" + "&client_secret=" + "TD6uCe1IKkOP7Xkf";
            // // var postData = String.Format("grant_type=authorization_code&code={0}&redirect_uri={1}&client_id={2}&client_secret={3}", code, HttpUtility.HtmlEncode(redirectUrl), apiKey, apiSecret);

            // HttpWebRequest webRequest = WebRequest.Create(authUrl + "?" + sign) as HttpWebRequest;
            // webRequest.Method = "POST";

            // //This "application/x-www-form-urlencoded"; line is important
            // webRequest.ContentType = "application/x-www-form-urlencoded";

            // webRequest.ContentLength = sign.Length;

            // StreamWriter requestWriter = new StreamWriter(webRequest.GetRequestStream());
            // requestWriter.Write(sign);
            // requestWriter.Close();

            // StreamReader responseReader = new StreamReader(webRequest.GetResponse().GetResponseStream());

            // return responseReader.ReadToEnd().ToString();

            // Console.WriteLine("****************");
            // string result;
            // Console.WriteLine("Making API Call...");
            // using (var client = new HttpClient(new HttpClientHandler { AutomaticDecompression = DecompressionMethods.GZip | DecompressionMethods.Deflate }))
            // {
            //     client.BaseAddress = new Uri("https://www.linkedin.com/oauth/v2/");
            //     HttpResponseMessage response = client.GetAsync("accessToken?grant_type=authorization_code&code=" + code + "&redirect_uri=http://localhost:3000/linkedin&client_id=86aojroi51e35k&client_secret=TD6uCe1IKkOP7Xkf").Result;
            //     response.EnsureSuccessStatusCode();
            //     result = response.Content.ReadAsStringAsync().Result;
            //     Console.WriteLine("Result: " + result);
            // }

            // Console.ReadLine();
            // return result;

            // HttpWebRequest request = (HttpWebRequest)WebRequest.Create(uri);
            // request.AutomaticDecompression = DecompressionMethods.GZip | DecompressionMethods.Deflate;

            // using (HttpWebResponse response = (HttpWebResponse)request.GetResponse())
            // using (Stream stream = response.GetResponseStream())
            // using (StreamReader reader = new StreamReader(stream))
            // {
            //     Console.WriteLine(reader.ReadToEnd());
            //     return reader.ReadToEnd();
            // }
        }

    }


}
