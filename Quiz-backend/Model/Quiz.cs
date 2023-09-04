using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Quiz_backend.Model
{
    public class Quiz
    {
        [Key]
        public int QuizId { get; set; }
        [Column]
        public string Result { get; set; }
        [ForeignKey("Player1")]
        public int PlayerId1 { get; set; }
        [ForeignKey("Player2")]
        public int PlayerId2 { get; set; }

        public virtual Player Player1 { get; set; }
        public virtual Player Player2 { get; set; }

    }
}
