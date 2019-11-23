import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Button, Row, Col } from 'react-bootstrap';

// Buttons under slider - homepage

const ButtonsToolbar = () => {
    return (
        <>
            <FirstRow>
                <StyledRow>
                    <Col md={3}>
                        <Button id="button1" as={Link} to="/live">
                            Galeria
                        </Button>
                    </Col>
                    <Col md={3}>
                        <Button
                            id="button2"
                            as={Link}
                            to="/zostan-wolontariuszem"
                        >
                            Aukcje
                        </Button>
                    </Col>
                    <Col md={3}>
                        <Button id="button3" as={Link} to="/aukcje">
                            Na żywo
                        </Button>
                    </Col>
                    <Col md={3}>
                        <Button id="button4" as={Link} to="/wplac-na-wosp">
                            Wpłać na WOŚP
                        </Button>
                    </Col>
                </StyledRow>
            </FirstRow>
            <StyledRow>
                <Col md={12}>
                    <Button
                        id="button5"
                        as={Link}
                        to="/wplac-na-wosp"
                        style={{ height: '70px' }}
                    >
                        Zostań wolontariuszem
                    </Button>
                </Col>
            </StyledRow>
        </>
    );
};

const StyledRow = styled(Row)`
    width: 100%;
    height: 150px;
    margin: 0;

    /* display: flex; */

    div {
        padding: 0;
        min-height: 0;
    }

    a {
        background: #a50a00;
        border: none;

        font-size: 25px;

        height: 155px;
        width: 100%;

        display: flex;
        flex-direction: column;
        justify-content: center;

        border-radius: 0;

        text-transform: uppercase;
    }
    #button1 {
        background-color: ${({ theme }) => theme.color.blue};
    }
    #button2 {
        background-color: ${({ theme }) => theme.color.orange};
    }
    #button3 {
        background-color: ${({ theme }) => theme.color.red};
    }
    #button4 {
        background-color: ${({ theme }) => theme.color.green};
    }
    #button5 {
        background-color: ${({ theme }) => theme.color.pink};
    }
`;

const FirstRow = styled.div`
        padding-top: 5%;
        /*background-color: ${({ theme }) => theme.color.pink};*/
    `;

export default ButtonsToolbar;
