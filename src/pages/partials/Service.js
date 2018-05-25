import React, { Component, PropTypes } from 'react';
import { Col , Row } from 'antd';

import { BodyText, IconX } from './../../theme/Components';

class Service extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        const colStyles = {
            xs: { span: 24 }, 
            lg: { span: 8}
        }

        return (
            <div className={ this.props.toggleClass }>
                <BodyText>
                    <Row style={ {width: '100%' } }>
                        <Col className="service-wraper" xs={ colStyles.xs } lg={ colStyles.lg }>
                            <div className="service-icon-wrapper">
                                <IconX type={ this.props.serviceTupla[0].icon }/>
                            </div>
                            <div className="service-title">{ this.props.serviceTupla[0].title }</div>
                        </Col>
                        <Col className="service-wraper" xs={ colStyles.xs } lg={ colStyles.lg }>
                            <div className="service-icon-wrapper">
                                <IconX type={ this.props.serviceTupla[1].icon }/>
                            </div>
                            <div className="service-title">{ this.props.serviceTupla[1].title }</div>
                        </Col>
                        <Col className="service-wraper" xs={ colStyles.xs } lg={ colStyles.lg }>
                            <div className="service-icon-wrapper">
                                <IconX type={ this.props.serviceTupla[2].icon }/>
                            </div>
                            <div className="service-title">{ this.props.serviceTupla[2].title }</div>
                        </Col>
                    </Row>
                  </BodyText>
            </div>
        );
    }
}

export default Service;

