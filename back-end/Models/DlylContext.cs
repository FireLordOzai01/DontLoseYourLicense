using Microsoft.EntityFrameworkCore;

namespace back_end
{
    public class DlylContext: DbContext
    {
        public DbSet<User> users        { get; set; }
        public DbSet<Article> articles  { get; set; }
        public DlylContext(DbContextOptions<DlylContext> options) : base(options)
        {

        }
    }
}