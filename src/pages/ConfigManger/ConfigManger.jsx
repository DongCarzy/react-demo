import { getConfig } from '@testing-library/react';
import { Button } from 'antd';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import request from '../../utils/request';


class ConfigManger extends Component {

  constructor (props) {
    super(props);
    this.state = {}
  }

  listConfig = () => {
    console.log("listConfig")
    request.get('/config/api/v1/all')
    .then(res => {
      console.log(res.data)
    })
    .catch(err => {

    })
  }

  render() {
    return (
      <div>
        <Button type="primary">Button</Button>
        {/* <Button type="primary" onClick={(e) => this.listConfig()}>HTTP</Button> */}
      </div>
    )
  }
}

export default connect(getConfig)(ConfigManger);
