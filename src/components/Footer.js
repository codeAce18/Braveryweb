import styled from 'styled-components'


const Footer = (props) => {
    return (
        <FooterDiv>

            <FooterContainer>


                <FooterBrandDiv>
                    <FooterLogo>
                        <img  src='/assets/Navlogo.svg' alt='footerlogo' />

                        <p>We start with a discovery call to understand your company. The problems you are facing.</p>
                    </FooterLogo>
                    

                    <FooterSocials>
                        <h3>Follow us</h3>

                        <Socials>
                            <img src='/assets/Facebookk.svg' alt= 'facebook' />
                            <img src='/assets/003-instagram.svg' alt= 'instagram' />
                            <img src='/assets/twitterr.svg' alt= 'twitter' />
                            <img src='/assets/001-linkedin.svg' alt= 'linkedin' />
                        </Socials>
                    </FooterSocials>
                </FooterBrandDiv>


                <FooterLinks>
                    <Link1>
                        <LinkHeading>
                            <h2>Solutions</h2>
                        </LinkHeading>
                        <LinkLinks>

                            <p>SEO Services</p>
                            <p>Social Media</p>
                            <p>Pay-per-click</p>
                            <p>Web Analytics</p>
                            <p>Web Development</p>

                        </LinkLinks>
                        
                    </Link1>


                    <Link2>
                        <LinkHeading>
                            <h2>Industries</h2>
                        </LinkHeading>

                        <LinkLinks>
                            <p>Virtual Marketing</p>
                            <p>Email Marketing</p>
                            <p>Keyword Analytics</p>
                            <p>Career</p>
                            <p>Blog Management</p>
                        </LinkLinks>

                        
                    </Link2>



                    <Link3>
                        <LinkHeading>
                            <h2>Company</h2>
                        </LinkHeading>

                        <LinkLinks>
                            <p>Consumer</p>
                            <p>Leadership</p>
                            <p>Content Management</p>
                            <p>Safe Dashboard</p>
                        </LinkLinks>
                       
                    </Link3>
                </FooterLinks>

            </FooterContainer>

            
            <FooterBase>
                <p>All rights reserved by &#169; Bravery 2023.</p>
            </FooterBase>
            

        </FooterDiv>
    )
}




export default Footer;



const FooterDiv = styled.section`
    margin-top: 125px;
    
`

const FooterContainer = styled.div`
// margin: 0 auto:
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    place-items: center; 

    @media (max-width: 1024px) {
        // flex-direction: column;
        flex-wrap: wrap-reverse;
    } 

    @media (max-width: 550px) {
        flex-wrap: wrap;
    }
`

const FooterBrandDiv = styled.div`


  
    p {
        max-width: 258px;
        margin-top: 0.5rem;
        color: #7F8BA7;
        font-family: var(--font-small-text);
        font-weight: 500;
        font-size: 16px;
        line-height: 28px;
        opacity: 80%;
    }

    @media (max-width: 1024px) {
        margin-top: 2rem;
        display: flex;
        align-items: center;
        gap: 10rem;
    }

    @media (max-width: 620px) {
        gap: 5rem;
    }


    @media (max-width: 550px) {
        flex-direction: column;
        gap: 0;
        margin-top: 0;
        margin-bottom: 4rem;
    }


`

const FooterLogo = styled.div`

`

const FooterSocials = styled.div`
    margin-top: 3rem;

    h3 {
        font-family: var(--font-small-text);
        font-weight: 600;
        font-size: 20px;
        color: #00005C;
    }

    @media (max-width: 550px) {
        margin-left: -5rem;
    }

`

const Socials = styled.div`
    margin-top: 10px;
    display: flex;
    align-items: center;
    gap: 16px;
    cursor: pointer;
`

const FooterLinks = styled.div`
    display: flex;
    align-items: center;
    gap: 5rem;

    @media (max-width: 620px)  {
        flex-wrap: wrap;
        margin-left: 3rem;
    }
`

const Link1 = styled.div`


`

const Link2 = styled.div`


`

const Link3 = styled.div`
    margin-top: -20px;

`

const LinkHeading = styled.div`
    h2 {
        font-family: var(--font-large-text);
        font-weight: 600;
        font-size: 20px;
        color: #00005C;
    }

`

const LinkLinks = styled.div`
    margin-top: 4rem;

    p {
        font-family: var(--font-small-text);
        font-size: 16px;
        font-weight: 500;
        line-height: 28px;
        color: #627193;
        opacity: 80%;
        cursor: pointer;
    }

  
`


const FooterBase = styled.div`
    margin-top: 5rem;
    width: 100%;
    background-color: #00005C;
    text-align: center;
    padding: 20px 0;
    overflow: hidden;

    p {
        font-family: var(--font-large-text);
        font-size: 14px;
        font-weight: 500;
        line-height: 16.44px;
        color: #ffffff;
        opacity: 80%;
    }

    @media (max-width: 620px) {
        width: 100%;
    }
`




