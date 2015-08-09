/**
 * Created by Answer1215 on 8/6/2015.
 */

import React from 'react';
import Main from '../components/Main';
import Home from '../components/Home';
import Profile from '../components/profile';
import {Router, DefaultRoute, Route} from 'react-router';

//In main route, we may have more routers, if none of those routes match,
//DefaultRoute will be rendered, then Home module will be displayed.
export default (
    <Route name="app" path="/" handler={Main}>
        <Route name="profile" path="profile/:username" handler={Profile} />
        <DefaultRoute handler={Home} />
    </Route>
);
