import React, { Component } from 'react';

// Toolkit UI
import { Row, Col, Icon, Button, Carousel } from 'antd';

class Home2Cols extends Component {
   
    constructor(props) {
        super(props);
        this.state = {...props.data};
    }

    render() {
        const sliderOnLeft = this.state.slider.position === 'left';

        const IconText = ({ type, text }) => (
            <span>
              <Icon type={type} style={{ marginRight: 8 }} />
              {text}
            </span>
        );

        return (
            <Row type="flex">
                <Col span={13} order={sliderOnLeft ? 1 : 2}>
                    <Carousel autoplay dots={false} className="carousel-content">
                        {this.state.slider.slides.map((slide, i) => {
                            return (
                                <div>
                                    <img src={`http://www.casadeuco.com/images/slides/${slide}`} key={`image-${i}`}/>
                                </div>
                            )
                        })}
                    </Carousel>
                </Col>
                <Col span={11} order={sliderOnLeft ? 2 : 1}>
                    <Row className="two-cols-text-wrapper">
                        <h1>{this.state.title}</h1>
                        <p>{this.state.text}</p>
                        <Button size="large" type="primary">{this.state.cta.text}</Button>
                    </Row>
                    <hr/>
                    <Row className="two-cols-text-wrapper">
                        <div>
                            <h3>Tour Virtual</h3>
                            <div className="image-wrapper">
                                {this.state.virtualTour.map((image, i) => {
                                    return (
                                        <a href={`http://www.casadeuco.com/360tours/${image.name}`} target="_blank" key={`link-tour-${i}`}>
                                            <img width={72} alt="logo" src={image.placeholder} />
                                        </a>
                                    )
                                })}
                            </div>
                        
                            <h3>Social</h3>
                            <div className="icon-wrapper">
                                <IconText type="star-o" text="156" />
                                <IconText type="like-o" text="156" />
                                <IconText type="message" text="2" />
                            </div>
                        </div>
                    </Row>
                </Col>
            </Row>
        )
    }
}

export default Home2Cols;