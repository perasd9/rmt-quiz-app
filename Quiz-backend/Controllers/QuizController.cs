using Microsoft.AspNetCore.Mvc;
using Quiz_backend.Data;
using Quiz_backend.Model;

namespace Quiz_backend.Controllers
{
    [ApiController]
    [Route("quizzes")]
    public class QuizController : ControllerBase
    {
        MyDbContext myContext;

        public QuizController(MyDbContext dbContext)
        {
            myContext = dbContext;
        }

        [HttpGet]
        public ActionResult<IEnumerable<Quiz>> GetAllQuizzes()
        {
            var quizzes = myContext.Quizzes.ToList();

            if(quizzes == null) return NotFound();
            
            return Ok(quizzes);
        }
    }
}
