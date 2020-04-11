import * as React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { AuthRoute } from "@airbnb/controller";

import { RegisterConnector } from "../modules/register/RegisterConnector";
import { LoginConnector } from "../modules/login/LoginConnector";
import { ForgotPasswordConnector } from "../modules/forgotpassword/ForgotPasswordConnector";
import { ChangePasswordConnector } from "../modules/changePassword/ChangePasswordConnector";
import { TextPage } from "../modules/TextPage";
import { CreateListingConnector } from "../modules/listing/create/CreateListingConnector";
import { FindListingConnector } from "../modules/listing/find/FindListingConnector";
import { Logout } from "../modules/logout";

import { ViewListingConnector } from "../modules/listing/view/ViewListingConnector";
import { MessageConnector } from "../modules/listing/messages/MessagesConnector";
import { EditListingConnector } from "../modules/listing/edit/EditListingConnector";

export const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact={true} path="/register" component={RegisterConnector} />
      <Route exact={true} path="/login" component={LoginConnector} />
      <Route
        exact={true}
        path="/forgot-password"
        component={ForgotPasswordConnector}
      />
      <Route
        exact={true}
        path="/change-password/:key"
        component={ChangePasswordConnector}
      />
      <Route path="/m" component={TextPage} />
      <Route path="/listings" component={FindListingConnector} />
      <Route
        exact={true}
        path="/listing/:listingId"
        component={ViewListingConnector}
      />
      <Route path="/listing/:listingId/chat" component={MessageConnector} />
      <Route path="/listing/:listingId/edit" component={EditListingConnector} />
      <Route path="/logout" component={Logout} />
      <AuthRoute
        {...{ path: "/create-listing", component: CreateListingConnector }}
      />
    </Switch>
  </BrowserRouter>
);
