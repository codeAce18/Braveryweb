import styled from 'styled-components';


const Statistics = (props) => {

    return (
        <StatisticsDiv>

            <h4>OUR STATISTICS</h4>

            <h2>Statistics Snapshot!</h2>


            <StatisticsCardDiv>
                <div className='statistics-card1'>
                    <h1>95%</h1>

                    <h5>Client Retention</h5>
                    <p>Discover the power of enduring relationships.</p>
                </div>

                <div className='statistics-card2'>
                    <h1>12+</h1>

                    <h5>Year of service</h5>
                    <p>With a track record of excellence.</p>
                </div>

                <div className='statistics-card3'>
                    <h1>90+</h1>

                    <h5>Professionals</h5>
                    <p>Our team comprises skilled professionals.</p>
                </div>

                <div className='statistics-card4'>
                    <h1>$80M</h1>

                    <h5>In funding</h5>
                    <p>Experience the impact of strategic investments.</p>
                </div>
            </StatisticsCardDiv>

        </StatisticsDiv>
    )
}



const StatisticsDiv = styled.section`
margin-top: 80px;

h4 {
text-align: center;
font-size: 18px;
font-family: var(--font-small-text);
font-weight: 700;
line-height: 22.59px;
letter-spacing: 5px;
color: var(--color-purple);
}

h2 {
    text-align: center;
    font-size: 46px;
    font-family: var(--font-large-text);
    font-weight: 700;
    line-height: 54px;
    letter-spacing: -1px;
    color: rgba(0, 0, 92, 1);
    margin-top: 15px;
}
`;


const StatisticsCardDiv = styled.div`
margin-top: 120px;
display: flex;
align-items: center;
justify-content: center;
gap: 45px;

h1 {
    font-size: 48px;
    font-family: var(--font-small-text) ;
    font-weight: 700;
    line-height: 58.09px;
    letter-spacing: 2px;

    
    @media (max-width: 1150px) {
        max-width: 370px;
        line-height: 30px;
    }
}

h5 {
    font-family: var(--font-large-text);
    font-size: 16px;
    font-weight: 600;
    line-height: 18.78px;
    color: rgba(255, 255, 255, 1);
    margin-top: 10px;

    @media (max-width: 1150px) {
        margin-top: 30px;
    }
}

p {
    font-size: 16px;
    font-family: var(--font-small-text) ;
    font-weight: 500;
    line-height: 28px;
    color: rgba(255, 255, 255, 1);
    text-align: center;
    margin-top: 10px;
}

@media (max-width: 1150px) {
    flex-direction: column;
    margin-top: 85px;
}
`;


export default Statistics;