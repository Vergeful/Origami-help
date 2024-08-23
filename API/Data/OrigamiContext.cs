using Microsoft.EntityFrameworkCore;

namespace API.Data
{
    public class OrigamiContext : DbContext
    {
        public OrigamiContext(DbContextOptions options) : base(options)
        {
            
        }
    }
}