import React, { Component, PropTypes } from 'react';

import globals from './../../env/en'
import { Layout, Avatar, Row, Col } from 'antd';
import { HeaderX, ContentX, BodyText, LayoutXY } from './../../theme/Components';

const { Content, Header } = Layout;

class Team extends Component {
    
    constructor(props) {
        super(props);
    }

    render() {
    	return (
            <LayoutXY>
			  <Header>{globals.sections.about.title}</Header>
              <Row className="subheader">{globals.sections.about.subtitle}</Row>
			  <Content>
			    <BodyText>
			        <Row className="team-wrapper">
                        <Col span={8}>
                            <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                        </Col>
                        <Col span={8}>
                            <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                        </Col>
                        <Col span={8}>
                            <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                        </Col>
                    </Row>
			    </BodyText>
			  </Content>
			</LayoutXY>
        );
    }
}

export default Team;

