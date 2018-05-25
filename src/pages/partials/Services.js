import React, { Component, PropTypes } from 'react';
import { Timeline, Steps, Icon, Col , Row, Card, Progress, Layout } from 'antd';

import globals from './../../env/en'
import { HeaderX, ContentX, BodyText } from './../../theme/Components';
import Service from './Service';

const { Header, Footer, Sider, Content } = Layout;
const Step = Steps.Step

class Services extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            className: 'hidden'
        }
    }

    handleScroll() {
        this.setState(
            {
                className: document.documentElement.scrollTop > 250 && document.documentElement.scrollTop < 1000
                    ? 'show':'hidden'
            }
        );
    }

    componentDidMount() {
        window.onscroll = () => this.handleScroll();

    }

    render() {
        return (
            <div>
                <Layout>
                    <HeaderX>{globals.sections.products.title}</HeaderX>
                    <ContentX className="toggleable">
                        {
                            globals.sections.products.services.map( (el, index) => {
                                return (
                                    <Service serviceTupla={el} key={ `service-${index}` }/>
                                )
                            })
                        }
                    </ContentX>
                </Layout>
            </div>
        );
    }
}

export default Services;

