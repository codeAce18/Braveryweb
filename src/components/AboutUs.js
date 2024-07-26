import styled from 'styled-components';

const AboutUs = (props) => {
    return (
        <AboutUsDiv>

           <AboutUsImg>
                <img  src='/assets/aboutUs.png' alt='aboutImg'/>
           </AboutUsImg>


           <AboutUsText>
                <h5>ABOUT US</h5>

                <h1>We initiate the process with a discovery call.</h1>

                <p>At Bravery Digital Marketing, we are more than a marketing agency; we are your partners in digital success. With a team of seasoned experts, we bring innovation, strategy, and a touch of boldness to every campaign.</p>

                <p>Our mission is simple — to elevate your brand in the digital landscape and drive results that matter.</p>

                <AboutUsBtn>
                    <button>Read More</button>
                </AboutUsBtn>
           </AboutUsText>
                

        </AboutUsDiv>
       

            
    )
}


const AboutUsDiv = styled.section`
margin-top: 150px;
display: flex;
align-items: center;
justify-content: space-evenly;
gap: 30px;

@media (max-width: 1150px) {
    flex-direction: column;
}

@media (max-width: 768px) {
    margin-top: 85px;
}
`;

const AboutUsImg = styled.div`
width: 600px;
object-fit: contain;


img {
    width: 100%;
    height: 100%;
}

@media (max-width: 1150px) {
    width: 400px;

    img {
        width: 100%;
    }
}

@media (max-width: 768px) {
    width: 300px;

    img {
        width: 100%;
    }
}
`;


const AboutUsText = styled.div`

h1 {
    font-size: 46px;
    font-family: var(--font-large-text);
    line-height: 56px;
    color: rgba(0, 0, 92, 1);
    font-weight: 700;
    max-width: 545px;
    margin-top: 20px;

    @media (max-width: 1150px) {
        text-align: center;
    }

}

h5 {
    font-size: 18px;
    font-family: var(--font-small-text);
    line-height: 22.59px;
    color: var(--color-purple);
    font-weight: 700;

    
    @media (max-width: 1150px) {
        text-align: center;
    }
}

p {
    max-width: 500px;
    font-size: 18px;
    font-family: var(--font-small-text);
    line-height: 34px;
    color: var(--color-gray);
    font-weight: 500;
    margin-top: 20px;

    
    @media (max-width: 1150px) {
        text-align: center;
    }
}
`;


const AboutUsBtn = styled.div`

display: block;

button {
    padding: 18px 28px;
    color: #ffffff;
    cursor: pointer;
    background: var(--color-purple);
    border-radius: 5px;
    border: none;
    font-size: 16px;
    font-weight: 900;
    font-family: var(--font-small-text);
    margin-top: 15px;

}
    
  

@media (max-width: 1150px) {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    margin-top: 20px;
}

`;

export default AboutUs;