import React from "react";
import CartSummary from "./CartSummary";
import { Container, Menu } from "semantic-ui-react";
import SignedOut from "./SignedOut";
import Signedin from "./Signedin";
import { useState } from "react";
import { useHistory } from "react-router";
import { useSelector } from "react-redux";

export default function Navi() {

  const { cartItems } = useSelector(state => state.cart)
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
            {cartItems.length > 0 && <CartSummary />}
            {isAuthenticated ? <Signedin signOut={handleSingOut} />
              : <SignedOut signIn={handleSingIn} />}


          </Menu.Menu>
        </Container>
      </Menu>
    </div>
  );
}
