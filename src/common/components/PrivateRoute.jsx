import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";
import { TOKEN_KEY, URL } from "../../constants";
import { Forbidden } from "./Forbidden";

export const PrivateRoute = ({ component: Component, ...rest }) => {
  const auth = useSelector((state) => state.auth);
  const isLoggedIn = localStorage.getItem(TOKEN_KEY) ? true : false;
  return (
    <Route {...rest} render={(props)=>{
      const role = 'WebApi.Models.Role';
      if (isLoggedIn) {
        if (role) {
            return <Component {...props}></Component>;
        }
      } else {
        return <Redirect to={{pathname: URL.LOGIN_URL, state:{from: props.location.pathname}}}/>
      }
    }}/>
  );
};