import React, { useEffect, useState } from 'react'
import axios from "axios"
import {Col, Container, Row} from "react-bootstrap"
import UserCards from './UserCards'



const UserInfo = () => {

    const [user, setUser] = useState([])

    useEffect(() => {
        const getUserData = async () => {
            try {
                const response = await axios.get("https://650ee6b254d18aabfe999663.mockapi.io/USERS")
                const data = response.data
                setUser(data)
                console.log(data)
            } catch (error) {
                console.log(error)
            }
        }

        getUserData();
    }, [])



  return (
    <Container>
        <Row>
        
            {
                user && user.map((item)=> <Col md={3} lg={4} key={item.id}>
                    <UserCards {...item}/>
                </Col>)
            }

        </Row>
    </Container>
  )
}

export default UserInfo