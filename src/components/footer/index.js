import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaSpotify, FaTwitter, FaYoutube } from 'react-icons/fa'
import { FooterStyled, FooterContainer, ContentFooter, ContactPage, SocialWrap, FooterContact, FooterAddres } from './FooterStyled'

const Footer = () => {
    return (
        <FooterStyled>
            <FooterContainer>
            <ContentFooter>
                <SocialWrap>
                    <h4>Social Media</h4>
                   <p><FaFacebook/> Facebook<br/>
                       <FaInstagram/> Instagram<br/>
                       <FaYoutube/> Youtube<br/>
                       <FaSpotify/> Spotify<br/>
                       <FaTwitter/> Twitter<br/>
                       <FaLinkedin/>  Linkedn</p>
                </SocialWrap>
                <ContactPage>
                    <h4>Pages</h4>
                    <p>www.gombel.com<br/>
                    www.hihihahahihihehe.com<br/>
                    www.edu.cilvies.trulala.com</p>
                </ContactPage>
                <FooterContact>
                    <h4>Hubungi kami</h4>
                    <p>Whatsapp 1 : 08971250331<br/>
                    Whatsapp 1 : 08971250331<br/>
                    Whatsapp 1 : 08971250331</p>
                    <p>Whatsapp 4 : 08971250331<br/>
                    Email : customers@cilvies.com<br/>
                    Telp : (021) 123456</p>
                    <p>Whatsapp 1 : 08971250331<br/>
                    Whatsapp 1 : 08971250331<br/>
                    Whatsapp 1 : 08971250331</p>
                </FooterContact>
                <FooterAddres>
                    <h4>Official</h4>
                   <p>CILVIES - CINEMA ART WONDERFULL</p>
                   
                   <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                   <p>CILVIES GROUP CORPORATE</p>

                   <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                </FooterAddres>
            </ContentFooter>
            <div>copyright</div>
            </FooterContainer>
            
        </FooterStyled>
    )
}

export default Footer
