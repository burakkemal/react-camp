import React from "react";

import ProductList from "../pages/ProductList";
import Category from "./Category";
import Navi from "./Navi";
import { Grid, GridColumn, GridRow } from 'semantic-ui-react'
import { Route } from "react-router";
import ProductDetail from "../pages/ProductDetail";
import CartDetail from "../pages/CartDetail";
export default function Dashboard() {
  return (
    <div>
      <Grid>
        <GridRow>
          <GridColumn width={4}>
            <Category />
          </GridColumn>
          <GridColumn width={12}>
            <Route exact path="/" component={ProductList} />
            <Route exact path="/products" component={ProductList} />
            <Route exact path="/cart" component={CartDetail} />
            <Route exact path="/products/:name" component={ProductDetail} />
          </GridColumn>
        </GridRow>
      </Grid>


    </div>
  );
}
