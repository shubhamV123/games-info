import React, { Component } from 'react';
import { Layout, Menu, } from 'antd';
import { Link, withRouter } from 'react-router-dom';
import axios from 'axios';
const { Header } = Layout;

const LayoutContext = React.createContext();

class LayoutProvider extends Component {
    state = {
        loading: true,
        data: [],
        isAuthenticated: JSON.parse(localStorage.getItem('isLoggedIn')) || false
    }
    componentDidMount() {
        this.fetchData();
    }
    fetchData = async () => {
        let options = {
            method: 'GET',
            url: 'https://app.tryhard.gg/tournament/open',
            headers:
            {
                'cache-control': 'no-cache,no-cache',
                'accept-encoding': 'gzip, deflate',
                'X-COSMOS-AUTH': 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxNTM4NTcwNTg2OTkxIiwicGxhdGZvcm1Db2RlIjoiMSIsInBsYXRmb3JtVXNlcklkIjoiNzY1NjExOTgyMjM4NjAyMjgiLCJleHAiOjE1NjE3MjU5NzF9.hxH-gpgxfr7zk4AFvkdZ2UzhoxpXSUC8LJ7t1NUf1nxwrSiK-RN5jSwGuWlvfjLW171ZelviEaWC54YUjdAaHw',
                'User-Agent': 'PostmanRuntime/7.13.0',
                'Postman-Token': 'd9327ed6-6d60-434d-960b-68ffeab84e61,e7c53183-98a4-4a0a-91ef-7d1dbcaf8493,1d197336-c614-4d7b-9d9f-b925453326bc',
                Host: 'app.tryhard.gg',
                Connection: 'keep-alive',
                'Cache-Control': 'no-cache',
                Accept: '*/*'
            }
        };
        try {
            let result = await axios(options);
            let data = result.data;
            this.setState({ loading: false, data: data.response })
        }
        catch (e) {
            this.setState({ loading: false })
        }

    }
    testSignIn = () => {
        this.setState({ isAuthenticated: true }, () => {
            localStorage.setItem('isLoggedIn', true)
            this.props.history.push('/')
        })

    }
    testSignOut = () => {
        localStorage.setItem('isLoggedIn', false)
        this.setState({ isAuthenticated: false })
    }
    render() {
        let isHomeActive = this.props.location.pathname === "/";
        let isContactActive = this.props.location.pathname === "/contact";
        let activeKey = isHomeActive ? "1" : isContactActive ? "2" : null;

        return (
            <LayoutContext.Provider value={{ ...this.state, testSignIn: this.testSignIn, testSignOut: this.testSignOut }}>
                <Layout className="layout">
                    {Boolean(this.state.isAuthenticated) ?
                        <Header className="header">
                            <div className="logo" />
                            <Menu
                                theme="dark"
                                mode="horizontal"
                                defaultSelectedKeys={[activeKey]}
                                style={{ lineHeight: '64px' }}
                            >
                                <Menu.Item key="1"><Link to="/">Home</Link></Menu.Item>
                                <Menu.Item key="2"><Link to="/contact">Contact</Link></Menu.Item>
                                <Menu.Item key="3" onClick={this.testSignOut}>Logout</Menu.Item>
                            </Menu>
                        </Header> : null}
                    {this.props.children}
                </Layout>
            </LayoutContext.Provider>
        );
    }
}
const { Consumer: LayoutConsumer, Provider } = LayoutContext;
export { LayoutConsumer, Provider, LayoutContext }
export default withRouter(LayoutProvider);