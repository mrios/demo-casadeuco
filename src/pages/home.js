import React from 'react'
import Company from './../pages/partials/Company';
import Services from './../pages/partials/Services';
import Team from './../pages/partials/Team';
import Partners from './../pages/partials/Partners';
import Contact from './../pages/partials/Contact';

// ES6 Imports
import Scroll from 'react-scroll'; 

import { BackTop, Carousel } from 'antd';

const Link       = Scroll.Link;
const Element    = Scroll.Element;

export default class Home extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
     
      return (
        <div>
          <Element name="header" className="element">
            <Carousel autoplay>
              <div><img src="http://beirutdc.com.ar/sites/casadeuco/wp-content/uploads/2018/05/CDU-BROCHURE-WINES-26.jpg"/></div>
              <div><img src="http://beirutdc.com.ar/sites/casadeuco/wp-content/uploads/2018/05/img10-1.jpg"/></div>
              <div><img src="http://wine.dttheme.com/wp-content/uploads/2017/06/img11.jpg"/></div>
            </Carousel>
          </Element>
        </div>
      )
  }

}
