import styled,{keyframes, css} from 'styled-components'


const Clients = (props) =>  {
    return(
        <ClientsDiv>

            <InnerDiv>
                <div>
                    <img src='/assets/Client1.svg' alt='' />
                </div>

                <div>
                    <img src='/assets/Client2.svg' alt='' />
                </div>

                <div>
                    <img src='/assets/Client3.svg' alt='' />
                </div>

                <div>
                    <img src='/assets/Client4.svg' alt='' />
                </div>

                <div>
                    <img src='/assets/Client5.svg' alt='' />
                </div>
            </InnerDiv>
            
        </ClientsDiv>
    )
}


const ClientsDiv = styled.div`
background: var(--color-purple);
position: relative;
top: 200px;
left: 0;
right: 0;
padding: 30px;
width: 100%;
overflow: hidden;
`;

const scrollX = keyframes`
  from {
    left: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
`;

const common = css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    animation: ${scrollX} 40s linear infinite;


    img {
        object-fit: contain;
        width: 100%;
        height: 100%;
    }

    @media (max-width: 768px) {
        width: 850px;
    }
`;


const InnerDiv = styled.div`
   ${common}
   animation-delay: -3s;
`;

export default Clients;