'use strict';

import React from 'react';
import { render }  from 'react-dom';
import { Router, Route,browserHistory }  from 'react-router';

import App  from './components/App';
// import List  from './components/List';


render(
  <App />,
  document.getElementById('root')
);

// render(
//   <Router history={browserHistory}>
//    <Route path="/" component={App}>             {/*Top level component */}
//     <Route path="/list" component={List} />     {/* Child route */}
//     </Route>
//   </Router>,
//   document.getElementById('root')
// );
