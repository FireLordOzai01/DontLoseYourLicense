using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace back_end
{
    public class Post
    {
        [Key]
        public int post_id      { get; set; }
    }
}