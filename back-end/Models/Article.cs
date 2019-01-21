using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace back_end
{
    public class Article
    {
        [Key]
        public int article_id       { get; set; }
        public string article_link  { get; set; }
        public string title         { get; set; }
        public string summary       { get; set; }
    }
}