using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;

namespace Users.DB
{
    public class Item
    {
        [Key]
        public int Id { get; set; }
        public int StoreId { get; set; }
        public bool IsUnique { get; set; }
        public double Price { get; set; }

        public List<User> Users { get; set; }
    }
}
