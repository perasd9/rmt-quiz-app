using Microsoft.AspNetCore.Mvc;
using Quiz_backend.Data;
using Quiz_backend.Model;

namespace Quiz_backend.Controllers
{
    [ApiController]
    [Route("players")]
    public class PlayerController : ControllerBase
    {
        MyDbContext myContext;

        

        public PlayerController(MyDbContext dbContext)
        {
            myContext = dbContext;
        }
        //Method get for all players from db

        [HttpGet]
        public ActionResult<IEnumerable<Player>> GetAllPlayers()
        {
            var players = myContext.Players.ToList();
            if (players == null)
            {
                return Problem();
            }
            return Ok(players);
        }

        //Method get player by id from db
        [HttpGet("{id}")]
        public ActionResult<Player> GetPlayerById(int id)
        {
            var player = myContext.Players.Find(id);

            if (player == null) return Problem();

            return Ok(player);
        }
        //Method post for creating player and saving in db

        [HttpPost("createPlayer")]
        public ActionResult<Player> CreatePlayer(Player player)
        {
            try
            {
                var playerCreating = new Player
                {
                    Username = player.Username,
                    Email = player.Email,
                    Password = player.Password,
                    Victories = player.Victories
                };
                myContext.Players.Add(playerCreating);
                myContext.SaveChanges();
                return Ok();
            }
            catch (Exception ex)
            {
                return Problem(ex.Message);
            }
        }

        //Method update for updating player in db

        //[HttpPut("updatePlayer")]
        //public ActionResult<Player> UpdatePlayer(int id)
        //{
        //    var player = myContext.Players.Find(id);
        //    if (player == null) return Problem();

        //    player.Victories++;
        //    myContext.SaveChanges();
        //    return Ok();
        //}

    }
}
