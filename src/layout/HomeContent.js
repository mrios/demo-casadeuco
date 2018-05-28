import React, { Component } from 'react';

import globals from './../env/en';

import Scroll from 'react-scroll'; 

// Toolkit UI
import { Layout } from 'antd';

// Subcomponents
import HomePrimary from './HomePrimary';
import Home2Cols from './Home2Cols';

const Element    = Scroll.Element;
const { Content } = Layout;


class HomeContent extends Component {
   
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Content>
                {globals.sections.map((section, i) => {
                    return (
                        <Element name={section.name} key={`primary-${i}`}>
                            <HomePrimary data={section} indexImage={i} />
                        </Element>
                    )
                })}

                {globals.sections.map((section, i) => {
                    return (
                        <Home2Cols data={section} key={`section-${i}`} />
                    )
                })}
            </Content>
        );
    }
}

export default HomeContent;
