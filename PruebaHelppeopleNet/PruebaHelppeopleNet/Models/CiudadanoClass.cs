using System.ComponentModel.DataAnnotations;

namespace PruebaHelppeopleNet.Models
{
    public class CiudadanoClass
    {
        public int Id { get; set; }
        [Required]
        public int TipoDocumento { get; set; }
        [Required]
        public string Cedula { get; set; }
        [Required]
        public string Nombres { get; set; }
        [Required]
        public string Apellidos { get; set; }
        [Required]
        public DateTime FechaNacimiento { get; set; }
        [Required]
        public string Profesion { get; set; }
        [Required]
        public decimal AspiracionSalarial { get; set; }
    }
}
