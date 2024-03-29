import React from 'react';
import { default as logo } from '../../images/logo-light.svg';

import { 
    FooterContainer, 
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinksItems,
    FooterLink,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    WebsiteRights,
    SocialIcon
} from './Footer.elements';

const footer = () => {
    return (
        <FooterContainer>
            <FooterLinksContainer>
                <FooterLinksWrapper>
                    <FooterLinksItems>
                        <FooterLink to='/OurStory'>Our Story</FooterLink>
                    </FooterLinksItems>
                    <FooterLinksItems>
                        <FooterLink to='/Feedback'>Feedback</FooterLink>
                    </FooterLinksItems>
                    <FooterLinksItems>
                        <FooterLink to='/ContactUs'>Contact Us</FooterLink>
                    </FooterLinksItems>
                </FooterLinksWrapper>
                <FooterLinksWrapper>
                </FooterLinksWrapper>
            </FooterLinksContainer>
            <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo to="/">
                        <SocialIcon src={logo} />
                        Noteable
                    </SocialLogo>
                    <WebsiteRights> Noteable 2021</WebsiteRights>
                </SocialMediaWrap>
            </SocialMedia>
        </FooterContainer>
    );
};

export default footer;
