import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "../Pages/home";
import RegionPage from "../Pages/region";
import Upload from "../Pages/upload";
import NavBar from "../Components/AllPages/NavBar/NavBar";
import SearchBy from "../Components/AllPages/NavBar/SearchBy";
import Footer from "../Components/AllPages/Footer/Footer";

const Routes = () => {
  return (
    <>
      <NavBar />
      <SearchBy />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/region" component={RegionPage} />
        <Route path="/upload" component={Upload} />
        <Route render={() => console.log("404 Error")} />
      </Switch>
      <Footer />
    </>
  );
};
export default Routes;
