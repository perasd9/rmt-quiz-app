using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Quiz_backend.Model
{
    public class Question
    {
        [Key]
        public int QuestionId { get; set; }
        [Column]
        public string Text { get; set; }
        [Column]
        public string Answer1 { get; set; }
        [Column]
        public string Answer2 { get; set; }
        [Column]
        public string Answer3 { get; set; }
        [Column]
        public string Answer4 { get; set; }
        [Column]
        public string CorrectAnswer { get; set; }
    }
}
