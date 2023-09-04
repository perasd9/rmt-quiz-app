using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace Quiz_backend.Model.DTO
{
    public class QuizDTO
    {
        [Key]
        public int QuizId { get; set; }
        [Column]
        public string Result { get; set; }
        [ForeignKey("Player1")]
        public int PlayerId1 { get; set; }
        [ForeignKey("Player2")]
        public int PlayerId2 { get; set; }
    }
}
