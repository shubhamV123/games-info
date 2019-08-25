import React from 'react'
import { Card, Col, Row, Statistic } from 'antd';

const GameInfoCard = ({ data }) => {

    let { gameName, completedLogo, name, entryFee, currentPlayers, gameCode, tournamentSource, status, totalPlayers, totalWinnings } = data;
    return (
        <Col span={8} className="p-1" >
            <Card title={name} bordered={false}>
                <div className="text-center pb-1"> <img src={completedLogo} alt="" /></div>
                <Row gutter={16} className="pb-1 ">
                    <Col span={12}>
                        <Statistic title="Game Name" value={gameName} />
                    </Col>
                    <Col span={12}>
                        <Statistic title="Entry Fees" value={entryFee} />
                    </Col>
                </Row>
                <Row gutter={16} className="pb-1 ">
                    <Col span={12}>
                        <Statistic title="Game Code" value={gameCode} />
                    </Col>
                    <Col span={12}>
                        <Statistic title="Current Players" value={currentPlayers} />
                    </Col>

                </Row>
                <Row gutter={16} className="pb-1 ">
                    <Col span={12}>
                        <Statistic title="Total Players" value={totalPlayers} />
                    </Col>
                    <Col span={12}>
                        <Statistic title="Total Winning" value={totalWinnings} />
                    </Col>



                </Row>
                <Row gutter={16} className="pb-1 ">
                    <Col span={12}>
                        <Statistic title="Tournament Source" value={tournamentSource} />
                    </Col>
                    <Col span={12}>
                        <Statistic title="Status" value={status} />
                    </Col>




                </Row>


            </Card>
        </Col >
    )
}

export default GameInfoCard
