import React from 'react';
import { Container, Title, Row, Col } from '../components/styled';
import { LoginForm } from '../components/forms';

const LoginPage = (props) => {
    return (
        <Container>
            <Row>
                <Col md="12" sm="12" lg="6">
                    curated, crowdsourced reading lists
                    <ol>
                        <li>share your link</li>
                        <li>folks recommend books and articles</li>
                        <li>and vote on pre-existing recommendations</li>
                        <li>you get a list of what people think you'll dig</li>
                        <li>i get nothing (because its free)</li>
                    </ol>

                    <p>Hey, while you're here, <a href="/jcquinlan">why don't you recommend something you like to me?</a></p>
                </Col>

                <Col md="12" sm="12" lg="6">
                    <LoginForm />
                </Col>
            </Row>
        </Container>
    );
}

export default LoginPage;