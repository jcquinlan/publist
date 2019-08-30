import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 100px;
`;

const Footer = () => {
    return (
        <FooterWrapper>
            <p>Made completely without ❤️by <a href="https://github.com/jcquinlan">James Quinlan</a>.</p>
        </FooterWrapper>
    )
};

export default Footer;
