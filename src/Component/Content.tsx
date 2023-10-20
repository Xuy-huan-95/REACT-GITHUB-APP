import { Col, Row, Card } from 'antd';
import "./Content.scss"
const { Meta } = Card;

const Content = (props: any) => {
    const { data } = props
    return (
        <div>
            <Row justify="center" align="top">
                <Col span={7} >
                    <Card
                        hoverable
                        className='image-size'
                        cover={<img alt="Avata-Owner " src={data?.owner?.avatar_url} />}
                    >
                        <Meta title={data?.owner?.login} description={data?.owner?.html_url} />
                    </Card>
                </Col>
                <Col span={14} offset={1}>
                    <Row >
                        <Col span={24} >
                            <div className='item-list'>
                                <div>Name Repo :</div>
                                <div>{data?.name}</div>
                            </div>
                        </Col>
                    </Row>
                    <Row >
                        <Col span={24} >
                            <Row >
                                <Col span={24} >
                                    <div className='item-list'>
                                        <div>Github Url : </div>
                                        <div >
                                            <a href={data?.html_url} target='_blank'>{data?.html_url}</a>
                                        </div>
                                    </div>
                                </Col>

                            </Row>
                        </Col>
                    </Row>
                    <Row >
                        <Col span={24} >
                            <Row >
                                <Col span={24} >
                                    <div className='item-list'>
                                        <div>Visibility : </div>
                                        <div>{data?.visibility}</div>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row >
                        <Col span={24} >
                            <Row >
                                <Col span={24} >
                                    <div className='item-list'>
                                        <div>Language : </div>
                                        <div>{data?.language}</div>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row >
                        <Col span={24} >
                            <Row >
                                <Col span={24} >
                                    <div className='item-list'>
                                        <div>Private : </div>
                                        <div>
                                            {data?.private == false && "No"}
                                            {data?.private == true && "Yes"}
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row >
                        <Col span={24} >
                            <Row >
                                <Col span={24} >
                                    <div className='item-list'>
                                        <div>Forks count : </div>
                                        <div>{data?.forks_count}</div>
                                    </div>
                                </Col>

                            </Row>
                        </Col>
                    </Row>
                    <Row >
                        <Col span={24} >
                            <Row >
                                <Col span={24} >
                                    <div className='item-list'>
                                        <div>Watchers count : </div>
                                        <div>{data?.watchers_count}</div>
                                    </div>
                                </Col>

                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Row>

        </div>
    )
}

export default Content