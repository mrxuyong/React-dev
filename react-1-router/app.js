import React from 'react';
import { render } from 'react-dom';
import { Router, useRouterHistory } from 'react-router';

//import createHashHistory from 'history/lib/createHashHistory';
import { createHashHistory } from 'history';
const history = useRouterHistory(createHashHistory)({queryKey: false});

/**
 * 路由配置;
 * @type {{component: string, childRoutes: *[]}}
 */
const rootRoute = {
  component: '',

  childRoutes: [{
    path: '/',

    component: require('./modules/main'),

    indexRoute: [{
      getComponent: (nextState, cb) => {
        require.ensure([], (require) => {
          cb(null, require('./modules/main'))
        })
      }
    }],

    childRoutes: [
      {
        path: '/itemA',
        getComponent: (nextState, cb) => {
          require.ensure([], (require) => {
            cb(null, require('./modules/item-a'))
          })
        }
      },
      {
        path: '/itemB',
        getComponent: (nextState, cb) => {
          require.ensure([], (require) => {
            cb(null, require('./modules/item-b'))
          })
        }
      }

    ]
  }]
}

render(<Router history={history} routes={rootRoute}/>, document.getElementById('content'))
