import React, { Component } from 'react';

// Toolkit UI
import { Row, Col, Button } from 'antd';

class HomePrimary extends Component {
   
    constructor(props) {
        super(props);
        this.state = {...props.data, indexImage: props.indexImage};
    }

    render() {
        const sliderOnLeft = this.state.slider.position === 'left';

        return (
            <Row 
                type="flex" 
                style={{
                    backgroundImage: `url('http://www.casadeuco.com/images/slides/${this.state.slider.slides[this.state.indexImage]}')`,
                    backgroundSize: 'cover',
                    backgroundAttachment: 'fixed'
                }}>
                <Col span={13} offset={sliderOnLeft ? 0 : 11}>
                    <Row className="section-wrapper">
                        <h1>{this.state.title}</h1>
                        <p>{this.state.text}</p>
                        <Button size="large" type="primary">{this.state.cta.text}</Button>
                    </Row>
                </Col>
            </Row>
        )
    }
}

export default HomePrimary;