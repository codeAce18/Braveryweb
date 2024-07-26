import styled from 'styled-components'

const CTA = (props) => {
  return (
    <CTADiv>

        <CTAContainer>
            <CTAtext>Subscribe to our newsletters to receive the latest updates.</CTAtext>


            <CTActa>
                <CTAfield>
                    <input src='email' name='email' placeholder='Enter your email here' />
                </CTAfield>

                <CTAButton>
                    <button>Subscribe</button>
                </CTAButton>
            </CTActa>
        </CTAContainer>

    </CTADiv>
  )
}

export default CTA;




const CTADiv = styled.section`
margin-top: 200px;

@media (max-width: 768px) {
    margin-top: 100px;
}
`


const CTAContainer = styled.section`
    background: #F8FAFB;
    max-width: 1170px;
    padding: 85px;
    // height: 440px;
    margin: 0 auto;
    border-radius: 10px;
`



const CTAtext = styled.section`
    font-family: var(--font-large-text);
    font-size: 48px;
    font-weight: 700;
    color:  #00005C;
    max-width: 726px;
    line-height: 56px;
    text-align: center;
    margin: 0 auto;

    @media (max-width: 780px) {
        font-size: 38px;
        max-width: 300px;
        line-height: 46px;
    }
`

const CTActa = styled.div`
    position: relative;
`




const CTAfield = styled.div`
    position: relative;
    margin-top: 50px;
    // margin: 0 auto;
    display: flex;
    align-item: center;
    justify-content: center;
    width: 100%;


    input {
        width: 610px;
        height: 80px;
        background-color: #fff;
        border: none;
        outline: none;
        border-radius: 15px;
        color: #627193;
        font-size: 18px;
        text-indent: 20px;

        @media (max-width: 600px) {
            font-size: 16px;
        }
    }
`

const CTAButton = styled.div`
    position: absolute;
    top: 10px;
    left: 64%;


    @media (max-width: 600px) {
        position: none;
        top: 0;
        left: 0;
        margin-top: 100px;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
    }

    button {
        padding: 20px 35px;
        background-color: #492975;
        border: none;
        outline: none;
        font-family: var(--font-small-text);
        color: #ffffff;
        font-size: 18px;
        font-weight: 600;
        border-radius: 10px;
        cursor: pointer; 


        @media (max-width: 600px) {
            padding: 18px 28px;
            font-size: 16px;
        }
    }
`
   