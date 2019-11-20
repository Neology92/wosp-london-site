import React from 'react';
// import styled from 'styled-components';
import { Col, Row, Container } from 'react-bootstrap';
import { Slider, BootstrapTest } from '../Components';

const Home = () => {
    return (
        <Container>
            <Row>
                <Col sm={12}>
                    <Slider />
                    <BootstrapTest />
                </Col>
            </Row>
        </Container>
    );
};

export default Home;
