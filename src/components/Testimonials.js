import styled from 'styled-components';


const Testimonials = (props) => {

    return(
        <TestimonialDiv>
            <TestimonialTextDiv>
                <h4>OUR TESTIMONIALS</h4>

                <h1>What Our Clients’ Say</h1>
            </TestimonialTextDiv>


            <TestimonialCardDiv>
                <div className='testimonial_cards_container'>
                    <div className='testimonial-card'>
                        <TestimonialCardHeader>
                            <div className='profile'>
                                <img src='/assets/profile1.png' alt='profileImg'/>

                                <div>
                                    <h5>Alex Rodriguez</h5>

                                    <h6>Co-Founder, KT Hub</h6>
                                </div>
                            </div>

                            <img src='/assets/twitter.png' alt='twitterImg' />
                        </TestimonialCardHeader>

                        <p>“Working with Bravery Digital Marketing was a game-changer for our business. Their strategic approach is top-notch.”</p>
                    </div>

                        {/* Second Testimonial Card */}
                    <div className='testimonial-card'>
                        <TestimonialCardHeader>
                            <div className='profile'>
                                <img src='/assets/profile2.png' alt='profileImg'/>

                                <div>
                                    <h5>Abby Turner</h5>

                                    <h6>CEO, FreshStart Ind.</h6>
                                </div>
                            </div>

                            <img src='/assets/twitter.png' alt='twitterImg' />
                        </TestimonialCardHeader>

                        <p>“Bravery Digital Marketing has been instrumental in reshaping our digital landscape. Their expertise in SEO is really worth it.”</p>
                    </div>

                        {/* Third Testimonial Card */}
                    <div className='testimonial-card'>
                        <TestimonialCardHeader>
                            <div className='profile'>
                                <img src='/assets/profile3.png' alt='profileImg'/>

                                <div>
                                    <h5>Sarah Anderson</h5>

                                    <h6>MD, Bloomify Boutique</h6>
                                </div>
                            </div>

                            <img src='/assets/twitter.png' alt='twitterImg' />
                        </TestimonialCardHeader>

                        <p>“The results speak for themselves. If you want a team that goes above and beyond, choose Bravery. They truly live up to their name.””</p>
                    </div>
                </div>
            </TestimonialCardDiv>
        </TestimonialDiv>
    )
}


const TestimonialDiv = styled.section`
margin-top: 80px;
`;

const TestimonialTextDiv = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
text-align: center;

h1 {
font-size: 46px;
font-family: var(--font-large-text);
font-weight: 700;
line-height: 56px;
letter-spacing: -0.02em;
color: rgba(0, 0, 92, 1);
margin-top: 10px;

    @media (max-width: 1150px) {
        margin-top: 15px;
        font-size: 40px;
        max-width: 300px;
    }
}

h4 {
    font-family: var(--font-small-text);
    font-size: 18px;
    font-weight: 700;
    line-height: 23px;
    letter-spacing: 0.12em;
    color: var(--color-purple);    
}

`;


const TestimonialCardDiv = styled.div`
margin-top: 100px;

@media (max-width: 1150px) {
    margin-top: 80px;
}
`;

const TestimonialCardHeader = styled.div`
display: flex;
justify-content: space-around;
object-fit: contain;
align-items: flex-start;

h5 {
    font-family: var(--font-large-text);
    font-size: 20px;
    font-weight: 600;
    line-height: 23px;
    letter-spacing: -0.01em;
    text-align: left;
    color: rgba(0, 0, 92, 1);

    @media (max-width: 1150px) {
      font-size: 18px;
    }
}

h6 {
    font-family: var(--font-large-text);
    font-size: 16px;
    font-weight: 600;
    line-height: 19px;
    letter-spacing: -0.01em;
    text-align: left;
    color: rgba(98, 113, 147, 1);
    margin-top: 10px;

    @media (max-width: 1150px) {
        font-size: 14px;
    }
}

`;





export default Testimonials;