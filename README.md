# store-app with React and ASP .NET Core

## database
Database is represented by 2 tables with many-to-many relation, so it's 3 tables (because many to many is not possible without 3rd table)

## backend
start the solution ShopWebApi, that would start up a server and database

## frontend
### `npm install`

To install all the dependencies used in this project.

### `npm start`

To start the web app at http://localhost:3000

## How it works
This app is using API https://fakestoreapi.herokuapp.com/ for products  
To log in you need to provide login (if account wasn't exist then it's going to be created with random from 100 to 1100 $ on account)  
Then you can check all items from shop and buy them, if you have enough money.  
Also there is an option to buy product as unique (last one), so no one else can buy it after.  
In section MyItems user could find all of his items with the information.  

## Bugs 
There is one bug with refreshing navigation component, after buying some thing it's not refreshing, but on the backend side user's money is updating

And bug with comics API caused by returning 'opaque' values. So i decided to change API 
