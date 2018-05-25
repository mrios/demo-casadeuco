import React from 'react'
import { Layout } from 'antd';
import globals from './../env/en'

import Scroll from 'react-scroll';

import { Menu, Row, Affix, Col, Icon } from 'antd';

const Link       = Scroll.Link;
const Element    = Scroll.Element;

const { Header } = Layout;

export default class Main extends React.Component {

  constructor(props) {
    super(props);
    this.handleSetActivePrimary = this.handleSetActivePrimary.bind(this);
    this.handleSetActiveSecondary = this.handleSetActiveSecondary.bind(this);
    this.state = {
        active: '',
        secondaryMenu: []
    }
  }

  handleSetActivePrimary(newValue) {
    this.setState(
        {
            active: newValue,
            secondaryMenu: globals.navbar.secondary.filter(secondary => secondary.parent === newValue)
        }
    );
  }

  handleSetActiveSecondary(newValue) {
    this.setState(newValue);
  }

  render() {
  		return (
                <div className="home-header-wrapper">
                    <Row className="header-contact-wrapper">
                        <Col className="social-wrapper" span={6}>
                            <Icon type="message" />&nbsp;&nbsp;Instagram&nbsp;&nbsp;|&nbsp;&nbsp;Facebook
                        </Col>
                        <Col className="phone-wrapper" span={6} offset={12} style={ {textAlign: 'right' } }>
                            <Icon type="phone" /> ARG&nbsp;-&nbsp;0261 476 9831&nbsp;&nbsp;|&nbsp;&nbsp;EXT&nbsp;-&nbsp;54 261 476 9831
                        </Col>
                    </Row>
                    <Element name="home">
                        <Row>
                            <Col className="logo-wrapper" span={4} offset={10}>
                                <Link href="/" target="_blank">
                                    <img className="img-responsive zozo-retina-logo" src="http://www.casadeuco.com/images/logo-casa-de-uco.png" alt="Casa de Uco" height="134" width="170"/>
                                </Link>
                            </Col>
                        </Row>
                    </Element>
                    <Affix offsetTop={0}>
                        <Header className="header">
                            <Menu
                                className="primary-menu"
                                theme="dark"
                                mode="horizontal"
                                defaultSelectedKeys={['1']}
                                style={{ lineHeight: '64px' }}
                                >
                                {globals.navbar.primary.map((primaryOption, i) => {
                                    return (
                                        <Menu.Item key={`primary-${primaryOption.key}`}>
                                        <Link 
                                            className={this.state.active === primaryOption.key ? "primary-menu-link active": "primary-menu-link"}
                                            to={primaryOption.url} 
                                            smooth={true} 
                                            offset={-100}
                                            duration={500} 
                                            onClick={ev => this.handleSetActivePrimary(primaryOption.key)}>
                                        { primaryOption.name }
                                        </Link>
                                    </Menu.Item>
                                    )
                                })}
                            </Menu>
                            <Menu
                                className="secondary-menu"
                                theme="dark"
                                mode="horizontal"
                                defaultSelectedKeys={['1']}
                                style={{ lineHeight: '64px' }}
                                >
                                {this.state.secondaryMenu.map((secondaryOption, i) => {
                                    return (
                                    <Menu.Item key={`secondary-${secondaryOption.key}`}>
                                        <Link
                                            className="secondary-menu-link"
                                            activeClass="active"
                                            to={secondaryOption.url}
                                            spy={true} 
                                            smooth={true} 
                                            offset={-40}
                                            duration={500}
                                            onClick={this.handleSetActiveSecondary}>
                                        { secondaryOption.name }
                                        </Link>
                                    </Menu.Item>
                                    )
                                })}
                            </Menu>
                        </Header>
                    </Affix>
                </div>
        )
    }
}