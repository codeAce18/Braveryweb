import styled from 'styled-components';

const Header = (props) => {
    return (
        
        <Container>
            <div>
                <h1 style={{color: '#00005C' }}>Empower Your <span style={{color: '#FF5670'}}>Brand's Journey</span> with Bravery!</h1>
        
    
                <ProfText>
                    <img src='/assets/HeaderProfile.svg' alt='' />

                    <p>
                        Transforming Ideas into Impact, One Click at a Time.
                    </p>
                </ProfText>

                <HeaderCta>
                    <button>Get Started</button>

                    <img src='/assets/Watchdemo.svg' alt='' />
                </HeaderCta>
            </div>

           
            <HeaderImg>
                <img src='/assets/HeaderImg.svg' alt=''/>
            </HeaderImg>
            
        </Container>
            

            
             
    )
}

const Container = styled.div`
    position: relative;
    top: 150px;
    padding: 0 40px;
    margin:  0 5% ;
    overflow-x: hidden;
    display: flex;
    align-items: center;
    justify-content: center;

    h1 {
        font-size: 64px;
        font-weight: 800;
        line-height: 70px;
        font-family: var(--font-large-text);
        max-width: 600px;

        @media (max-width: 1150px) {
            font-size: 40px;
            line-height: 60px;
        }
    }

    @media (max-width: 1150px) {
        flex-wrap: wrap;
    }
`;

const ProfText = styled.div`
    display: flex;
    align-items: center;
    margin-top: 20px;

    p {
        font-family: var(--font-small-text);
        color: var(--color-gray);
        font-size: 18px;
        font-weight: 500;
        line-height: 28px;
        max-width: 370px;

        @media (max-width: 1150px) {
            font-size: 16px;
            max-width: 264px;
        }
    }
  
`;

const HeaderCta = styled.div`
    display: flex;
    align-items: center;
    gap: 16px;
    margin-top: 25px;
    font-size: 18px;

    img {
        width: 180px;
        cursor: pointer;

        
        @media (max-width: 1150px) {
            width: 120px;
        }
    }
    


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

        
        @media (max-width: 1150px) {
            align-items: center;
            padding: 12px 18px;
        }
    }

    @media (max-width: 1150px) {
        width: 100%;
        margin-top: 35px;
    }
`;

const HeaderImg = styled.div`

    max-width: 650px;
    width: 700px;

    img {
        width: 100%;
    }

    @media (max-width: 1150px) {
        margin-top: 35px;
        width: 800px;

        img {
            width: 100%;
        }
    }
`;



export default Header;