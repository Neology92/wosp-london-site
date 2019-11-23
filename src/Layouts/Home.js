import React from 'react';
import styled from 'styled-components';
import { Col, Row, Container } from 'react-bootstrap';
import {
    Slider,
    ButtonsToolbar,
    PostCardGrid,
    FacebookCardGrid,
} from '../Components';
import windowDimensions from '../Utils/useWindowDimensions';

const Home = () => {
    const { width } = windowDimensions();
    return (
        <>
            <Wrapper>
                <ShadowBox>
                    <Container>
                        <Row>
                            <Col sm={12}>
                                <Slider />
                            </Col>
                        </Row>
                    </Container>
                </ShadowBox>
                <Container>
                    <Row>
                        <Col sm={12}>
                            <ButtonsToolbar />
                        </Col>
                    </Row>
                </Container>
            </Wrapper>

            <ArticlesContainer fluid={width < 992}>
                <Row>
                    <Col md={12} xl={8} as="article">
                        <PostCardGrid />
                    </Col>
                    <Col md={12} xl={4} as="article">
                        <FacebookCardGrid />
                    </Col>
                </Row>
            </ArticlesContainer>
        </>
    );
};

const Wrapper = styled.div`
    background: pink;
    width: 100%;
    margin: 0;
    padding: 0;
    ${({ theme }) => theme.media.above.md} {
        padding-top: 50px;
    }
`;

const ShadowBox = styled.div`
    display: none;
    ${({ theme }) => theme.media.above.md} {
        display: block;
        background-color: rgba(0, 0, 0, 0.5);
    }
`;

const ArticlesContainer = styled(Container)`
    ${({ theme }) => theme.media.above.xl} {
        margin-top: 60px;
    }
`;

export default Home;
