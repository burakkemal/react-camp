import React from "react";

import ProductList from "../pages/ProductList";
import Category from "./Category";
import Navi from "./Navi";
import { Grid, GridColumn, GridRow } from 'semantic-ui-react'
export default function Dashboard() {
  return (
    <div>
      <Grid>
        <GridRow>
          <GridColumn width={4}>
             <Category/>
          </GridColumn>
          <GridColumn width={12}>
             <ProductList/>
          </GridColumn>
        </GridRow>
      </Grid>
     
     
    </div>
  );
}
