import React, {Component} from 'react';
import {NavBar, InputItem, Button, List, TextareaItem} from 'antd-mobile';

import HeaderSelector from '../header-selector'

class LaobanInfo extends Component {

   state = {
       header: '',
       info: '',
       post:'',
       salary:'',
       company: ''
   }

   handlechange = (name, val) => {
       this.setState({
           [name]: val
       })
   }


   setHeader = header => {
       this.setState({
           header
       })
   }


    render () {
        return (
            <div>
               <NavBar>老板信息完善</NavBar>
                <HeaderSelector setHeader={this.setHeader}/>
                <InputItem onChange={val => this.handlechange('post', val)}>招聘职位：</InputItem>
                <InputItem onChange={val => this.handlechange('company', val)}>公司名称：</InputItem>
                <InputItem onChange={val => this.handlechange('salary', val)}>职位薪资：</InputItem>
                <TextareaItem title="职位要求:" rows={3} onChange={val => this.handlechange('post', val)}/>
                <Button type="primary">保 存</Button>
            </div>
        )
    }
}

export default  LaobanInfo;