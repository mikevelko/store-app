using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Users.Core;

namespace ShopWebApi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ItemsController : ControllerBase
    {

        private IItemsServices _itemsServices;

        public ItemsController(IItemsServices itemsServices)
        {
            _itemsServices = itemsServices;
        }

        [HttpGet("isUnique")]
        public IActionResult CheckIfUniqueBought(int storeId) 
        {
            return Ok(_itemsServices.CheckIfUniqueBought(storeId));
        }

    }
}
