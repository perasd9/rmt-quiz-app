using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Quiz_backend.Model
{
    public class Player
    {
        [Key]
        public int IgracId { get; set; }
        [Column]
        public string Username { get; set; }
        [Column]
        public string Email { get; set; }
        [Column]
        public string Password { get; set; }
        [Column]
        public int Victories { get; set; }
    }
}
