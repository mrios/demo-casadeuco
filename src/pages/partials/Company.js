import React, { Component, PropTypes } from 'react';

import globals from './../../env/en'
import { Layout } from 'antd';
import { HeaderX, ContentX, BodyText, LayoutX } from './../../theme/Components';

const { Header, Footer, Sider, Content } = Layout;

class Company extends Component {
    
    constructor(props) {
        super(props);
    }

    render() {
    	return (
            <LayoutX>
			  <Header>{globals.appName}</Header>
			  <Content>
			    <BodyText>
					{globals.appName} is a “young company”? devoted to help startups and existing businesses with their IT & digital strategy needs
			    </BodyText>
			  </Content>
			</LayoutX>
        );
    }
}

export default Company;

