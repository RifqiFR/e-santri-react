/*
  Ini komponen PrivateRoute, tujuannya dia ngecek kalo user belum login nanti 
  redirect ke halaman login
*/

import React from "react";
import { Route, Redirect } from "react-router-dom";
import { isLogin, isAdminSantri } from "utils/auth";

const SuperAdminRoute = ({ component: Component, setTitle, setPath, ...rest }) => {
  React.useEffect(() => {
    setTitle(rest.nameRoute);
    setPath(rest.path);
  }, [rest.nameRoute, rest.path, setPath, setTitle]);

  return (
    // Show the component only when the user is logged in
    // Otherwise, redirect the user to /signin page
    <Route
      {...rest}
      render={(props) =>
        // true ? (
        //   true ? (
        //     !rest.isNotFound ? (
        //       <Component />
        //     ) : (
        //       <>
        //         <Redirect to="/error" />
        //         <Component />
        //       </>
        //     )
        //   ) : (
        //     <>
        //       <Redirect to="/pasien" />
        //       <Component />
        //     </>
        //   )
        // ) : (
        //   <Redirect to="/login" />
        // )
        <Component />
      }
    />
  );
};

export default SuperAdminRoute;
