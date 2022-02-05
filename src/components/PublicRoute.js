/*
  Ini komponen PublicRoute, tujuannya kalo misal user udah login terus ada Route yang 
  restricted, nanti dia redirect ke halaman dashboard (Misal kalo aku masuk halaman login padal
    udah login)
  - Home untuk pasien yang sudah login
  - Dashboard untuk admin & superadmin yang sudah login
*/

import React from "react";
import { Route } from "react-router-dom";

const PublicRoute = ({
  component: Component,
  isNotFound,
  isAdmin,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        <Component {...props} />
      }
    />
  );
};

export default PublicRoute;
