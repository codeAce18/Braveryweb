import styled from 'styled-components';


const Solutions = (props) => {
    return (
        <SolutionsDiv>


            <SolutionsText>
                <h5>OUR SOLUTIONS</h5>

                <h1>Strategies Designed for Every Business Need!</h1>

                <p>Embark on your digital journey with us. Our process begins with an insightful kick-off call with your project owners. We seamlessly onboard your teams onto project management platforms.</p>


                <SolutionsBtn>
                    <button>Learn More</button>
                </SolutionsBtn>
           </SolutionsText>



           <SolutionsImg>
                <img  src='/assets/solutions.png' alt='solutionImg'/>
           </SolutionsImg>

        </SolutionsDiv>

           
                

       
    )
}



const SolutionsDiv = styled.section`
margin-top: 150px;
display: flex;
align-items: center;
justify-content: center;
gap: 30px;

@media (max-width: 1150px) {
    flex-direction: column-reverse;
}

@media (max-width: 768px) {
    margin-top: 85px;
}
`;

const SolutionsImg = styled.div`
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


const SolutionsText = styled.div`

h1 {
    font-size: 46px;
    font-family: var(--font-large-text);
    line-height: 56px;
    color: rgba(0, 0, 92, 1);
    font-weight: 700;
    max-width: 594px;
    margin-top: 20px;

    @media (max-width: 1150px) {
        text-align: center;
        max-width: 450px;
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
    max-width: 540px;
    font-size: 18px;
    font-family: var(--font-small-text);
    line-height: 34px;
    color: var(--color-gray);
    font-weight: 500;
    margin-top: 20px;

    
    @media (max-width: 1150px) {
        text-align: center;
        max-width: 390px;
        line-height: 30px;

    }
}
`;


const SolutionsBtn= styled.div`

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



export default Solutions;