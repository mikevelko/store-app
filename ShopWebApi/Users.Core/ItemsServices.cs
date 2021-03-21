using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Users.DB;

namespace Users.Core
{
    public class ItemsServices : IItemsServices
    {
        public ItemsServices(AppDbContext context)
        {
            _context = context;
        }

        private AppDbContext _context;

        public bool CheckIfUniqueBought(int storeId)
        {
            Item item = _context.Items.FirstOrDefault(e => e.IsUnique == true && e.StoreId==storeId);
            return item != null;
        }
    }
}
