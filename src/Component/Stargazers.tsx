import "./Stargazers.scss"
import { Col, Row } from 'antd';
import { Avatar } from 'antd';


const Stargazers = (props: any) => {
    const { dataDetail } = props
    return (
        <div className="Stargazers_container">
            <div className="Stargazers_title">
                Stargazers({dataDetail.length})
            </div>
            <div>
                <Row justify="center" align="top" >
                    {dataDetail && dataDetail.length > 0 &&
                        dataDetail.map((item: any, index: number) => {
                            return (
                                <Col xs={24} xl={6} offset={1} key={`item-${index}`}>
                                    <div className="Stargazers_item">
                                        <div className="Stargazers_item_content">
                                            <Avatar
                                                size="large"
                                                className="Stargazers_image"
                                                src={item.avatar_url} />
                                            <div className="item_info">
                                                <div className="item_info_name" >
                                                    <a href={item.html_url} target="_blank">{item.login}</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            )
                        })
                    }
                </Row>

            </div>


        </div >

    )
}

export default Stargazers