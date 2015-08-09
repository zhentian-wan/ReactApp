/**
 * Created by Answer1215 on 8/6/2015.
 */

import React from 'react';
import Router from 'react-router';
import routers from './config/routes';

Router.run(routers, (Root, state) => {
    React.render(<Root {...state}/>, document.getElementById('app'));
});