import React from 'react';
import styled from 'styled-components';
import { Col, Row, Container } from 'react-bootstrap';
import {
    Slider,
    ButtonsToolbar,
    PostCardGrid,
    FacebookCardGrid,
} from '../Components';

const Home = () => {
    return (
        <>
            <StyledContainer>
                <Wrapper>
                    <Container>
                        <Row>
                            <Col sm={12}>
                                <Slider />
                            </Col>
                        </Row>
                    </Container>
                </Wrapper>
                <Container>
                    <Row>
                        <Col sm={12}>
                            <ButtonsToolbar />
                        </Col>
                    </Row>
                </Container>
            </StyledContainer>

            <Container>
                <Row style={{ marginTop: '100px' }}>
                    <Col md={12} xl={8} as="article">
                        <PostCardGrid />
                    </Col>
                    <Col md={12} xl={4} as="article">
                        <FacebookCardGrid />
                    </Col>
                </Row>
            </Container>
        </>
    );
};

const StyledContainer = styled.div`
    background: pink;
    width: 100%;
    margin: 0;
    padding-top: 50px;
`;

const Wrapper = styled.div`
    background-color: rgba(0, 0, 0, 0.5);
`;

export default Home;
