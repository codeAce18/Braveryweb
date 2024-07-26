import styled from 'styled-components';
import { useState} from 'react';

import { AiOutlineMenu } from 'react-icons/ai';
import { MdClose } from 'react-icons/md';

const Navbar = ({setToggle}) => {

    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        // setToggle(!isOpen);
        setIsOpen(!isOpen);
    };

    return (
        <Nav>
        
            <LogoImg>
                <img src='/assets/Navlogo.svg' alt=''/>
            </LogoImg>

            <Navlinks>

                <a href='#home'>
                    <span>Home</span>
                </a>

                <a href=''>
                    <span>Services</span>
                </a>

                <a href=''>
                    <span>Work</span>
                </a>

                <a href=''>
                    <span>Company</span>
                </a>

                <a href=''>
                    <span>Contact</span>
                </a>

            </Navlinks>
            

            <CtaBtn>
                <p>
                    Sign in
                </p>
                    

                <button>
                   Get Started
                </button>
            </CtaBtn>

            <div className='navbarLinks-smallscreen'>
                <button onClick={handleToggle} className='' style={{fontSize: '25px', border: "none", background: 'none'}}>
                {isOpen ? <MdClose /> : <AiOutlineMenu />}
                </button>
                {isOpen && (
                    <ul className='button'>

                        <a href='#home'>
                            <span>Home</span>
                        </a>

                        <a href=''>
                            <span>Services</span>
                        </a>

                        <a href=''>
                            <span>Work</span>
                        </a>

                        <a href=''>
                            <span>Company</span>
                        </a>

                        <a href=''>
                            <span>Contact</span>
                        </a>
                        

                        <CtaSmall>
                            <p>
                                Sign in
                            </p>
                            

                            <button>
                                Get Started
                            </button>

                        </CtaSmall>
                    </ul>
                )}
            </div>
        </Nav>
            


        
                

           

    )
}



const Nav = styled.section`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 80px;
    margin:  0 5% ;
    border-bottom-right-radius: 25px;
    border-bottom-left-radius: 25px;
    background-color: rgba(255, 255, 255, 1);
    box-shadow: 0px 15px 30px 0px rgba(0, 0, 0, 0.04);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 40px;
    z-index: 3;

    
    @media (max-width: 768px) {
        margin: 0;
        box-shadow: none;
    }
`;




const LogoImg = styled.a`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    cursor: pointer;

    img{
        width: 150px;
    }
    
`;

const Navlinks = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    position: relative;

    a {
        display: flex;
        align-items: center;
        padding: 0 12px;


        span {
            color: var(--color-gray);
            font-size: 16px;
            font-family: var(--font-small-text);
            font-weight: 500;
            transition: .25s ease-out;
            padding: 2px 0px;
            position: relative;

            &:hover {
                &:before {
                  background-color: var(--color-purple);
                  border-radius: 0px 0px 4px 4px;
                  bottom: -5px;
                  content: "";
                  height: 2px;
                  left: 0px;
                  opacity: 0;
                  position: absolute;
                  right: 0px;
                  transform-origin: left;
                  transform: scaleX(0);
                  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
                  visibility: hidden;
                  width: auto;
                }
            }
            &:hover {
                &:before {
                  transform: scaleX(1);
                  visibility: visible;
                  opacity: 1 !important;
                }
            }

            &:hover {
                color: var(--color-purple);
            }


    
        }

       

       
    }

    @media (max-width: 1150px) {
        display: none;
    }
       

   
    
`;

const CtaBtn = styled.a`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 20px;
    cursor: pointer;
    font-family: var(--font-small-text);
  

    p {
        color: var(--color-gray);
        font-size: 16px;
        font-weight: 500;
        transition: .25s ease-out;
        position: relative;


        &:hover {
            &:before {
              background-color: var(--color-purple);
              border-radius: 0px 0px 4px 4px;
              bottom: -5px;
              content: "";
              height: 2px;
              left: 0px;
              opacity: 0;
              position: absolute;
              right: 0px;
              transform-origin: left;
              transform: scaleX(0);
              transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
              visibility: hidden;
              width: auto;
            }
        }
        &:hover {
            &:before {
              transform: scaleX(1);
              visibility: visible;
              opacity: 1 !important;
            }

            
        }

        &:hover {
            color: var(--color-purple);
        }

       
    }
   

   

    button {
        padding: 12px 18px;
        color: white;
        cursor: pointer;
        background: var(--color-purple);
        border-radius: 8px;
        border: none;
        font-size: 16px;
        font-weight: 900;
        font-family: var(--font-small-text);
    }


    @media (max-width: 1150px) {
        display: none;
    }
`;

const CtaSmall = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    font-family: var(--font-small-text);
    color: white;
    font-weight: 800;

    p {
        margin-top: 1rem;
    }

    button {
        padding: 12px 18px;
        color: var(--color-purple);
        cursor: pointer;
        background: white;
        border-radius: 8px;
        border: none;
        font-size: 16px;
        font-weight: 900;
        font-family: var(--font-small-text);
    }
`;



export default Navbar;