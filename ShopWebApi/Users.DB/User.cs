using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Users.DB
{
    public class User
    {
        [Key]
        public int Id { get; set; }
        public string Username { get; set; }
        public double Money { get; set; }
        public List<Item> Items { get; set; }
    }
}
