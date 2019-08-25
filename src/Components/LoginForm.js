
import React, { useContext } from 'react';
import { Form, Icon, Input, Button, message, Row, Col } from 'antd';
import { LayoutContext } from '../Provider/LayoutProvider';

const LoginForm = (props) => {
    const layoutContext = useContext(LayoutContext);
    const handleSubmit = e => {
        e.preventDefault();
        props.form.validateFields((err, values) => {
            if (!err) {
                let { username, password } = values;
                if (username === "test" && password === "test") {
                    layoutContext.testSignIn();
                }
                else {
                    message.error("Please enter valid username or password.");
                }
            }
        });
    };


    const { getFieldDecorator } = props.form;
    return (
        <Row className="background-white">
            <Col span={8} offset={8} className="pt-1">
                <h1>Login</h1>
                <Form onSubmit={handleSubmit} className="login-form">
                    <Form.Item>
                        {getFieldDecorator('username', {
                            rules: [{ required: true, message: 'Please input your username!' }],
                        })(
                            <Input
                                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                placeholder="type username : test"
                            />,
                        )}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator('password', {
                            rules: [{ required: true, message: 'Please input your Password!' }],
                        })(
                            <Input
                                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                type="password"
                                placeholder="type password : test"
                            />,
                        )}
                    </Form.Item>
                    <Form.Item>

                        <Button type="primary" htmlType="submit" className="login-form-button">
                            Log in
          </Button>

                    </Form.Item>
                </Form>
                <div>
                    <h3>Credentials for login</h3>
                    <div>
                        Username: <strong>test</strong><br />
                        Password : <strong>test</strong>
                    </div>
                </div>
            </Col>

        </Row>
    );

}

const WrappedLoginForm = Form.create({ name: 'normal_login' })(LoginForm);
export default WrappedLoginForm;