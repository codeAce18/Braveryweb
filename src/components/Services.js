import styled from 'styled-components';




const Services = () => {
    return(
        
        <ServicesDiv>
            <div className='service-intro'>
                <h3>OUR SERVICES</h3>

                <h1>Digital Mastery, Tailored for You!</h1>
                <p>Our comprehensive suite of services is designed to elevate your online presence, engage your audience, and drive tangible results.</p>
            </div>

            <ServiceCard>
                    
                <div className='service-grid'>
                    <img src='/assets/Service1.svg' alt=''/>

                    <h4>Social Media Management</h4>
                    
                    <p>Foster meaningful connections with your audience through strategic and captivating social media campaigns.</p>
                </div>

                <div className='service-grid'>
                    <img src='/assets/Service2.svg' alt=''/>

                    <h4>Email Marketing</h4>
                    
                    <p>Unlock the potential of personalized email campaigns. Nurture leads and build lasting relationships.</p>
                </div>

                <div className='service-grid'>
                    <img src='/assets/Service3.svg' alt=''/>

                    <h4>Content Marketing</h4>
                    
                    <p>Tell your brand story with compelling content that captivates your audience.</p>
                </div>
            </ServiceCard>

            <ServiceGrid2>
                <div className='service-grid'>
                    <img src='/assets/Service4.svg' alt=''/>

                    <h4>Search Engine Optimization</h4>
                    
                    <p>Propel your brand to the top of search engine results with our cutting-edge SEO strategies.</p>
                </div>

                <div className='service-grid'>
                    <img src='/assets/Service5.svg' alt=''/>

                    <h4>Pay-Per-Click Advertising</h4>
                    
                    <p>Maximize your return on investment with targeted PPC campaigns. We optimize every click for results.</p>
                </div>
            </ServiceGrid2>

                




        </ServicesDiv>
    )
}


const ServicesDiv = styled.section`
background: #F8FAFB;
margin-top: 200px;
padding-top: 40px;
padding-bottom: 40px;


h3 {
font-size: 18px;
font-family: var(--font-small-text);
font-weight: 700;
color: var(--color-purple);
line-height: 22.59px;
letter-spacing: 5px;
}

h1 {
    font-size: 46px;
    font-family: var(--font-large-text);
    font-weight: 700;
    color: #00005C;
    line-height: 54px;
    letter-spacing: 2px;
    margin-top: 15px;

    @media (max-width: 1150px) {
        font-size: 40px;
        max-width: 334px;
        line-height: 46.96px;
    }
}

p {
    color: var(--color-gray);
    font-size: 18px;
    font-family: var(--font-small-text);
    font-weight: 500;
    line-height: 34px;
    max-width: 609px;
    margin-top: 20px;

    @media (max-width: 1150px) {
        font-size: 16px;
        max-width: 334px;
        line-height: 24px;
    }
}


`;

const ServiceCard = styled.div`
display: flex;
align-items: center;
justify-content: center;
gap: 30px;
margin: 0 5%;
padding: 0 40px;
margin-top: 45px;

p {
    max-width: 270px;
    font-size: 16px;
    line-height: 32px;
    font-weight: 500;
    font-family: var(--font-small-text);

    @media (max-width: 1150px) {
        max-width: 198px;
        line-height: 20px;
    }

    @media (max-width: 768px) {
        max-width: 270px;
        line-height: 30px;
    }
}

@media (max-width: 768px)  {
    flex-direction: column;
}
`;


const ServiceGrid2 = styled.div`
display: flex;
align-items: center;
justify-content: center;
gap: 30px;
margin: 0 5%;
padding: 0 40px;
margin-top: 45px;


@media (max-width: 1150px)  {
    flex-direction: column;
    margin-top: 30px;
}
`;




export default Services;