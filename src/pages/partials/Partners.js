import React, { Component, PropTypes } from 'react';

import globals from './../../env/en'
import { Layout, Carousel, Tag } from 'antd';
import { HeaderX, ContentX, BodyText, LayoutXZ } from './../../theme/Components';

const { Header, Footer, Sider, Content } = Layout;

class Partners extends Component {
    
    constructor(props) {
        super(props);
    }

    render() {
    	return (
            <LayoutXZ>
			  <Header>{globals.sections.partners.title}</Header>
			  <Content>
			    
		        <Carousel autoplay>
                    {
                        globals.sections.partners.items.map( (el, index) => {
                            return (

                                <div key={ `partner-${index}` }>
                                    <h3>{el.group}</h3>    
                                    <div className="tech-wrapper">
                                        {
                                            el.items.map( ({title, icon, path}, index2) => {
                                                    return (
                                                        <Tag color="#108ee9" key={ `tag-${index}-${index2}` }>{title}</Tag>
                                                    )
                                                }
                                            )
                                        }
                                    </div>
                                </div>
                            )
                        })
                    }
                </Carousel>
			    
			  </Content>
			</LayoutXZ>
        );
    }
}

export default Partners;

