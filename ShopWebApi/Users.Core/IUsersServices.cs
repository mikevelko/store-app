using System;
using System.Collections.Generic;
using System.Text;
using Users.DB;

namespace Users.Core
{
    public interface IUsersServices
    {
        List<User> GetUsers();
        //User GetUser(int id);
        User GetUser(string username);
        User CreateUser(User user);
        string AddItem(User user);
    }
}
