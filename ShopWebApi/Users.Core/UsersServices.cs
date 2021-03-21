using System;
using System.Collections.Generic;
using System.Linq;
using Users.DB;
using Microsoft.EntityFrameworkCore;

namespace Users.Core
{
    public class UsersServices : IUsersServices
    {
        public UsersServices(AppDbContext context) 
        {
            _context = context;
        }

        private AppDbContext _context;

        public List<User> GetUsers()
        {
            return _context.Users.Include(p=>p.Items).ToList();
        }

        //public User GetUser(int id)
        //{
        //    return _context.Users.Include(p=>p.Items).First(e => e.Id == id);
        //}
        public User GetUser(string username) 
        {
            return _context.Users.Include(p => p.Items).FirstOrDefault(e => e.Username == username);
        }

        public User CreateUser(User user)
        {
            User find = _context.Users.Include(p => p.Items).FirstOrDefault(e => e.Username == user.Username);
            if (find != null) return find;
            _context.Add(user);
            Random r = new Random();
            user.Money = Math.Round(100.0 + r.NextDouble() * 1000,2);
            user.Items = new List<Item>();
            _context.SaveChanges();

            return user;
        }

        public string AddItem(User user1)
        {
            var user = _context.Users.Include(p => p.Items).First(e => e.Username == user1.Username);
            if (user1.Items[0].Price > user.Money) return "Not enough money";
            _context.Items.Add(user1.Items[0]);
            user.Items.Add(user1.Items[0]);
            user.Money = Math.Round(user.Money - user1.Items[0].Price,2);
            _context.SaveChanges();
            return "Item was added succesfully";
        }

        //public string AddItem(int ShopId, bool isUnique, int userId)
        //{
        //    Item item = new Item();
        //    item.IsUnique = isUnique;
        //    item.StoreId = ShopId;
        //    _context.Users.Include(p => p.Items).First(e => e.Id == userId).Items.Add(item);
        //    _context.SaveChanges();
        //    return "added";
        //}

    }
}
