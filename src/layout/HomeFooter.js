import React, { Component } from 'react';
import { Layout, Row, Col, Icon, Avatar, Card, Form, Input, Button } from 'antd';

const FormItem = Form.Item;
const { Footer } = Layout
const { TextArea } = Input;

class HomeFooter extends Component {
   
    constructor(props) {
        super(props);
    }

    render() {
        const inputStyles = { 
            fontSize: 13 
        }

        return (
            <Footer>
                <Row className="footer-wrapper">
                    <Row type="flex" justify="center">
                        <Col span={8} offset={4}>
                            <img alt="logo" width="250" src="http://casadeuco.manos-verdes.org/wp-content/uploads/2018/05/lgo-negativo-1.png"/>
                        </Col>
                    </Row>
                    <Col>
                        <Row type="flex" justify="center" className="card-wrapper">
                            <Card style={{ width: 400, margin: 20 }}>
                                <h3>Visitanos</h3>
                                <p>
                                    Ruta 94, kilómetro 14.5, Camino al Manzano Histórico.
                                    <br/>Tunuyán, Valle de Uco.
                                    <br/>Mendoza, Argentina.
                                </p>
                                <br/>
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1673.1464770340015!2d-69.28543034404818!3d-33.600674262729406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x967c37ffb41e8949%3A0x10f552b559367e16!2sCasa+de+Uco!5e0!3m2!1ses-419!2sar!4v1527249775803" width="350" height="250" frameborder="0" style={{border:0}} allowfullscreen  title="Google map"></iframe>
                            </Card>
                        
                            <Card style={{ width: 400, margin: 20 }}>
                                <h3>Llamanos</h3>
                                <div className="phone-wrapper">
                                    <p className="label">Desde Argentina:</p>
                                    <p className="phone-number">0261 476 9831</p>
                                    <br/>
                                    <p className="label">Desde el exterior:</p>
                                    <p className="phone-number">54 261 476 9831</p>
                                </div>
                            </Card>
                        
                            <Card style={{ width: 400, margin: 20 }}>
                                <h3>Escribinos</h3>
                                <Form onSubmit={this.handleSubmit} className="login-form">
                                    <FormItem>
                                        <Input size="large" prefix={<Icon type="mail" style={ inputStyles } />} placeholder="E-mail" />
                                    </FormItem>
                                    <FormItem>
                                        <Input size="large" prefix={<Icon type="user" style={ inputStyles } />} placeholder="Name" />
                                    </FormItem>
                                    <FormItem>
                                        <TextArea size="large" rows={4} placeholder="Your message here..."/>
                                    </FormItem>
                                    <FormItem>
                                    <Button size="large" type="primary" htmlType="submit" className="login-form-button">
                                        Send Message!
                                    </Button>
                                    </FormItem>
                                </Form>
                            </Card>
                        </Row>
                        <Row className="foot-wrapper">
                            <Col span={6}>
                                <p><Icon type="copyright" /> 2018 Casa de Uco</p>
                            </Col>
                            <Col span={12}>
                                <Row type="flex" justify="center">
                                    <Avatar style={{ marginLeft: 10 }}>
                                        <Icon type="instagram" />
                                    </Avatar>    
                                    <Avatar style={{ marginLeft: 10 }}>  
                                        <Icon type="facebook" />
                                    </Avatar>
                                    <Avatar style={{ marginLeft: 10 }}>  
                                        <Icon type="twitter"/>
                                    </Avatar>
                                </Row>
                            </Col>
                            <Col span={6} style={ {textAlign: 'right' } }>
                                <p>Kinto Company</p>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Footer>
        );
    }
}

export default HomeFooter;
