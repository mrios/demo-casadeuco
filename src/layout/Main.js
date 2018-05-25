import React from 'react'
import { Layout } from 'antd';

const { Content } = Layout;

export default class Main extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
  		return (
			<Content {...this.props}/>
	    )
  }

}
