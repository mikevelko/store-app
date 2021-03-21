using System;
using System.Collections.Generic;
using System.Text;
using Users.DB;

namespace Users.Core
{
    public interface IItemsServices
    {
        bool CheckIfUniqueBought(int storeId);
    }
}
