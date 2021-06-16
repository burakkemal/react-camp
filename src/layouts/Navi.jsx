import React from "react";
import CartSummary from "./CartSummary";
import { Button, Container, Dropdown, Menu } from "semantic-ui-react";
import SignedOut from "./SignedOut";
import Signedin from "./Signedin";
import { useState } from "react";
import { useHistory } from "react-router";

export default function Navi() {

  const [isAuthenticated, setIsAuthenticated] = useState(true)
  const history = useHistory()
  function handleSingOut() {
    setIsAuthenticated(false)
    history.push("/")
  }
  function handleSingIn() {
    setIsAuthenticated(true)
  }
  return (
    <div>
      <Menu inverted fixed="top">
        <Container>
          <Menu.Item name="home" />
          <Menu.Item name="messages" />

          <Menu.Menu position="right">
            <CartSummary />
            {isAuthenticated ? <Signedin signOut={handleSingOut} />
              : <SignedOut signIn={handleSingIn} />}


          </Menu.Menu>
        </Container>
      </Menu>
    </div>
  );
}
