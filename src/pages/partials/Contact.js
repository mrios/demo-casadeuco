import React, { Component, PropTypes } from 'react';

import globals from './../../env/en'
import { Row, Col, Form, Icon, Input, Button, Checkbox, Layout } from 'antd';
import { HeaderX, ContentX, BodyText, LayoutXW } from './../../theme/Components';

const FormItem = Form.Item;
const { Header, Content } = Layout;
const { TextArea } = Input;

class Contact extends Component {
    
    render() {
        const inputStyles = { 
            fontSize: 13 
        }
    	return (
            <LayoutXW>
			  <Header>{globals.sections.social.title}</Header>
			  <Content>
                <Row>
                    <Col span={8} offset={8}>
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
                    </Col>
                  </Row>
			  </Content>
			</LayoutXW>
        );
    }
}

export default Contact;

