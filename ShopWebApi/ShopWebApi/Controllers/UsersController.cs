using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Users.Core;
using Users.DB;

namespace ShopWebApi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class UsersController : ControllerBase
    {

        private IUsersServices _usersServices;

        public UsersController(IUsersServices usersServices)
        {
            _usersServices = usersServices;
        }

        [HttpGet]
        public IActionResult GetUsers()
        {
            
            return Ok(_usersServices.GetUsers());
        }

        //[HttpGet("{id}",Name ="GetUser")]
        //public IActionResult GetUser(int id) 
        //{
        //    return Ok(_usersServices.GetUser(id));
        //}

        [HttpGet("{username}", Name = "GetUser")]
        public IActionResult GetUser(string username)
        {
            return Ok(_usersServices.GetUser(username));
        }

        [HttpPost]
        public IActionResult CreateUser(User user) 
        {
            var newUser = _usersServices.CreateUser(user);
            return CreatedAtRoute("GetUser", new { newUser.Username }, newUser);
        }

        [HttpPost("additem")]
        public IActionResult AddItem(User user)
        {
            return Ok(_usersServices.AddItem(user));
        }
    }
}
