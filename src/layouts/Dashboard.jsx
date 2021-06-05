import React from "react";
import { Button, Icon, Label } from "semantic-ui-react";
import ProductList from "../pages/ProductList";
import Category from "./Category";
import Navi from "./Navi";
export default function Dashboard() {
  return (
    <div>
      <Navi></Navi>
      <Category/>
      <ProductList/>
    </div>
  );
}
