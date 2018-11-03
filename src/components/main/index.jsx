import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';

import DashenInfo from '../dashen-info';
import LaobanInfo from '../laoban-info';

class Main extends Component {
  render () {
    return (
     <div>
       <Switch>
         <Route path="/laobanInfo" component={LaobanInfo}/>
         <Route path="/dashenInfo" component={DashenInfo}/>
       </Switch>
     </div>
    )
  }
}

export default Main;