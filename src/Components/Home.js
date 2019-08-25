import React, { useContext } from 'react';
import { Layout, Row } from 'antd';
import { LayoutContext } from '../Provider/LayoutProvider';
import GameInfoCard from './GameInfoCard';
const { Content } = Layout;
const Home = () => {
    const layoutContext = useContext(LayoutContext);
    let cardData = layoutContext.data;
    return (
        <Content style={{ padding: '30px 24px', minHeight: 280 }}>
            <Row gutter={16}>
                {
                    cardData.map(data => {
                        return <GameInfoCard key={data.code} data={data} />
                    })

                }
            </Row>
        </Content >
    )

}

export default Home
