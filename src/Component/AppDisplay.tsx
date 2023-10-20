
import "./AppDisplay.scss"
import { Col, Row } from 'antd';
import { Input } from 'antd';
import { Button } from 'antd';
import Content from "./Content"
import axios from "axios";
import { useState } from "react"
import Stargazers from "./Stargazers"
const AppDisplay = () => {
    const [owner, setOwner] = useState("")
    const [repo, setRepo] = useState("")
    const [data, setData] = useState("")

    const [dataDetail, setDataDetail] = useState<object>([])

    const handleShowDataGit = async () => {

        try {
            let data = await axios.get(`https://api.github.com/repos/${owner}/${repo}`,
                {
                    headers: {
                        Authorization: 'Bearer ' + import.meta.env.VITE_TOKEN,
                        "Content-Type": "application/json"
                    }
                })
            if (data.status == import.meta.env.VITE_SUCCESS_CODE) {
                setData(data?.data)
                await handleGetAllStarUser(owner, repo)
            } else {
                setData("")
            }

        } catch (error: any) {
            if (error?.response?.status == import.meta.env.VITE_NOTFOUND_CODE) {
                alert("Not found")
            }
        }
    }

    const handleGetAllStarUser = async (owner: string, repo: string) => {
        try {
            let data = await axios.get(`https://api.github.com/repos/${owner}/${repo}/stargazers`,
                {
                    headers: {
                        Authorization: 'Bearer ' + import.meta.env.VITE_TOKEN,
                        "Content-Type": "application/json"
                    }
                })
            if (data.status == import.meta.env.VITE_SUCCESS_CODE) {
                setDataDetail(data?.data)

            }

        } catch (error: any) {
            if (error?.response?.status == import.meta.env.VITE_NOTFOUND_CODE) {
                alert("Not found")
            }
        }
    }



    return (
        <div className="AppDisplay_container">
            <div className="wrapper">
                <div className="AppDisplay_title">
                    Search Repo Github App
                </div>
                <div className="AppDisplay_text">
                    <Row justify="center" align="top">
                        <Col span={7} >
                            <Row >
                                <Input
                                    placeholder="Owner"
                                    value={owner}
                                    onChange={(event) => setOwner(event.target.value.trim())}
                                />
                            </Row>
                        </Col>
                        <Col span={7} offset={1}>
                            <Row >
                                <Input
                                    placeholder="Repo"
                                    value={repo}
                                    onChange={(event) => setRepo(event.target.value.trim())}
                                />
                            </Row>
                        </Col>
                        <Col span={2} offset={1} >
                            <Row>
                                <Button type="primary" onClick={() => handleShowDataGit()}>Submit</Button>
                            </Row>
                        </Col>

                    </Row>
                </div>
                {data &&
                    <div>
                        <Content
                            data={data}
                        />
                    </div>
                }
                <div>
                    <Stargazers
                        dataDetail={dataDetail}
                    />
                </div>
            </div>
        </div>
    )

}

export default AppDisplay