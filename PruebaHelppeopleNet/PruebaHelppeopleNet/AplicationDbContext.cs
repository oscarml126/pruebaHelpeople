using Microsoft.EntityFrameworkCore;
using PruebaHelppeopleNet.Models;

namespace PruebaHelppeopleNet
{
    public class AplicationDbContext:DbContext
    {
        DbSet<CiudadanoClass> BolsaEmpleoDB { get; set; }
        public AplicationDbContext(DbContextOptions<AplicationDbContext> options): base(options)
        {

        }
    }
}
