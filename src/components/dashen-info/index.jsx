import React, {Component} from 'react';
import {NavBar, InputItem, Button, List, TextareaItem} from 'antd-mobile';

import HeaderSelector from '../header-selector'

class DashenInfo extends Component {
  render () {
    return (
      <div>
        <NavBar>大神信息完善</NavBar>
        <HeaderSelector />
        <InputItem>求职岗位：</InputItem>
        <TextareaItem title="个人介绍:" rows={3} />
        <Button type="primary">保 存</Button>
      </div>
    )
  }
}

export default DashenInfo;