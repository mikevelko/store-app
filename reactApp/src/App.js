import React, { useCallback, useState } from 'react';
import LoginPage from './LoginPage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Shop from './Shop';
import ShopItem from './ShopItem';
import Nav from './Nav';
import MyItems from './MyItems';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [login, setLogin] = useState("");

  function ChangeLoggedIn() 
  {
    setLoggedIn(true);
  }

  function ChangeLogin(value)
  {
    setLogin(value)
  }

  return (
    <Router>
      {loggedIn ? <Nav login={login}/> : ""}
      <Switch>
        <Route path="/" exact component={() => <LoginPage ChangeLoggedIn={ChangeLoggedIn} ChangeLogin={ChangeLogin}/>}/>
        <Route path="/shop" exact component={() => <Shop login={login} loggedIn={loggedIn}/>} />
        <Route path="/shop/:id" component={ShopItem} />
        <Route path="/myitems" component={() => <MyItems login={login}/>} />
      </Switch>
    </Router>
  );
}

export default App;
