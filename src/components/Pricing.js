import styled from 'styled-components';



const Pricing = (props) => {
    return (

        <PricingDiv>
            <h1>Pricing Plan</h1>

            <p>"Say goodbye to wasted resources on ineffective marketing strategies. Our pricing plans are designed to ensure your investment yields meaningful results.</p>


            <PricingCardDiv>

                <div className='privateCard-div'>

                    <div className='privateCard-header'>
                        <img src='/assets/private.png' alt=''/>

                        <div>
                            <h2>Private</h2>

                            <h5>5 Licenses</h5>
                        </div>
                    </div>


                    <PrivateCardStar>
                        <div className='privateCard-point'>
                            <img src='/assets/StarShape.png' alt=''/>

                            <h6>Carefully crafted com</h6>
                        </div>

                        <div className='privateCard-point'>
                            <img src='/assets/StarShape.png' alt=''/>

                            <h6>Amazing page examples</h6>
                        </div>

                        <div className='privateCard-point'>
                            <img src='/assets/StarShape.png' alt=''/>

                            <h6>2 License code</h6>
                        </div>

                        <div className='privateCard-point'>
                            <img src='/assets/StarShape.png' alt=''/>

                            <h6>Unlimited messages</h6>
                        </div>

                        <div className='privateCard-point'>
                            <img src='/assets/StarShape.png' alt=''/>

                            <h6>Unlimited activity log</h6>
                        </div>
                    </PrivateCardStar>
                    

                    <PricingCardCTA>

                        <h2>$87</h2>
                        <PricingCardBtn>
                            <button>Purchase</button>
                        </PricingCardBtn>
                    </PricingCardCTA>
                </div>


                <div className='privateCard-div'>

                    <div className='privateCard-header'>
                        <img src='/assets/business.png' alt=''/>

                        <div>
                            <h2>Business</h2>

                            <h5>15 Licenses</h5>
                        </div>
                    </div>


                    <PrivateCardStar>
                        <div className='privateCard-point'>
                            <img src='/assets/StarShape.png' alt=''/>

                            <h6>5 Analytics campaigns</h6>
                        </div>

                        <div className='privateCard-point'>
                            <img src='/assets/StarShape.png' alt=''/>

                            <h6>1200 Keywords</h6>
                        </div>

                        <div className='privateCard-point'>
                            <img src='/assets/StarShape.png' alt=''/>

                            <h6>15 Social pages</h6>
                        </div>

                        <div className='privateCard-point'>
                            <img src='/assets/StarShape.png' alt=''/>

                            <h6>Unlimited Dashboards</h6>
                        </div>

                        <div className='privateCard-point'>
                            <img src='/assets/StarShape.png' alt=''/>

                            <h6>Advanced search</h6>
                        </div>
                    </PrivateCardStar>


                    <PricingCardCTA>

                        <h2>$147</h2>
                        <PricingCardBtn>
                            <button>Purchase</button>
                        </PricingCardBtn>
                    </PricingCardCTA>
                </div>


                <div className='privateCard-div'>

                    <div className='privateCard-header'>
                        <img src='/assets/corporate.png' alt=''/>

                        <div>
                            <h2>Corporate</h2>

                            <h5>35 Licenses</h5>
                        </div>
                    </div>


                    <PrivateCardStar>
                        <div className='privateCard-point'>
                            <img src='/assets/StarShape.png' alt=''/>

                            <h6>100 Analytics campaigns</h6>
                        </div>

                        <div className='privateCard-point'>
                            <img src='/assets/StarShape.png' alt=''/>

                            <h6>7500 Keywords</h6>
                        </div>

                        <div className='privateCard-point'>
                            <img src='/assets/StarShape.png' alt=''/>

                            <h6>150 Social accounts</h6>
                        </div>

                        <div className='privateCard-point'>
                            <img src='/assets/StarShape.png' alt=''/>

                            <h6>Custom rules builder</h6>
                        </div>

                        <div className='privateCard-point'>
                            <img src='/assets/StarShape.png' alt=''/>

                            <h6>Lock custom fields</h6>
                        </div>
                    </PrivateCardStar>


                    <PricingCardCTA>

                        <h2>$230</h2>
                        <PricingCardBtn>
                            <button>Purchase</button>
                        </PricingCardBtn>
                    </PricingCardCTA>
                </div>
            </PricingCardDiv>
        </PricingDiv>


       




                
    )
}



const PricingDiv = styled.section`
margin-top: 100px;
padding-top: 60px;
background: rgba(248, 250, 251, 1);

h1 {
    text-align: center;
    color: rgba(0, 0, 92, 1);
    font-family: var(--font-large-text);
    font-size: 46px;
    line-height: 54px;
}

p {
    margin: 40px auto;
    text-align: center;
    color: var(--color-gray);
    font-family: var(--font-small-text);
    font-size: 18px;
    line-height: 34px;
    max-width: 647px;
}
`;


const PricingCardDiv = styled.div`
margin-top: 120px;
width: 100%;
display: flex;
align-items: center;
justify-content: center;
gap: 60px;

@media (max-width: 1150px) {
    flex-direction: column;
}
`;

const PrivateCardStar = styled.div`
margin-top: 60px;
`;

const PricingCardCTA = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
margin-top: 95px;

h2 {
    font-size: 50px;
    font-family: var(--font-small-text);
    font-weight: 700;
    line-height: 62.75px;
    color: rgba(0, 0, 92, 1);

    
}


`;

const PricingCardBtn = styled.div`
margin-top: 70px;

button {
    padding: 22px 91px 22px 91px;
    font-size: 20px;
    font-weight: 600;
    line-height: 25.1px;
    color: var(--color-purple);
    border: 1px solid rgba(73, 41, 117, 1);
    border-radius: 10px;
    background: none;
    transition: background .25s ease-in-out;
    cursor: pointer;


    &:hover {
        background: var(--color-purple);
        color: white;
    }
}

`;
    




export default Pricing;