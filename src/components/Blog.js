import styled from 'styled-components';


const Blog = (props) => {

    return (
        <BlogDiv>

            <BlogText>
                <h1>Explore Blog & Resources</h1>

                <p>"Unlock insights, stay informed. Read our blogs for the latest trends and tips."</p>
            </BlogText>

            <BlogCardContainer>
                <BlogCard1>
                    <div className='card1'>
                        <img src='/assets/blog1.png' alt='blogImg'/>

                        <div className='card1-text'>
                            <h3>The Ultimate Guide to Social Media Marketing</h3>

                            <p>Delve into the comprehensive guide that unveils the intricacies of social media marketing...</p>
                        </div>
                    </div>
                </BlogCard1>

                <BlogCard2>
                    <div className='card1'>
                        <img src='/assets/blog2.png' alt='blogImg'/>

                        <div className='card2-text'>
                            <h3>Digital Marketing Triumph: A Case Study Unveiled</h3>

                            <p>Step into the success story of a digital marketing triumph. This blog dissects a real-life case study...</p>
                        </div>
                    </div>
                </BlogCard2>


                <BlogCard3>
                    <div className='card1'>
                        <img src='/assets/blog3.png' alt='blogImg'/>

                        <div className='card3-text'>
                            <h3>Email Marketing: Crafting Campaigns that Convert</h3>

                            <p>Uncover the secrets to effective email marketing and how it can be a game-changer for your business...</p>
                        </div>
                    </div>
                </BlogCard3>
            </BlogCardContainer>

            <BlogCTA>
                <button>
                    View All Blogs
                </button>
            </BlogCTA>

        </BlogDiv>
    )
}

const BlogDiv = styled.section`
padding-top: 120px;
padding-bottom: 50px;
background: rgba(248, 250, 251, 1);


`;

const BlogText = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
text-align: center;

h1 {
    font-size: 46px;
    font-family: var(--font-large-text);
    font-weight: 700;
    color: rgba(0, 0, 92, 1);
    line-height: 54px;
    
}

p {
    font-size: 18px;
    font-family: var(--font-small-text);
    font-weight: 500;
    color: var(--color-gray);
    line-height: 34px;
    max-width: 500px;
    margin-top: 15px;
}
`;

const BlogCardContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
gap: 60px;
margin-top: 60px;

@media (max-width: 1150px) {
    flex-direction: column;
}

`;

const BlogCard1 = styled.div`
background: rgba(255, 255, 255, 1);
padding: 20px;
width: 350px;
height: 405px;
border-radius: 10px;
`;

const BlogCard2 = styled.div`
background: rgba(255, 255, 255, 1);
padding: 20px;
width: 350px;
height: 405px;
border-radius: 10px;
`;

const BlogCard3 = styled.div`
background: rgba(255, 255, 255, 1);
padding: 20px;
width: 350px;
height: 405px;
border-radius: 10px;
`;


const BlogCTA = styled.div`
display: flex;
align-items: center;
justify-content: center;

button {
    padding: 18px 28px;
    color: #ffffff;
    cursor: pointer;
    background: var(--color-purple);
    border-radius: 5px;
    border: none;
    font-size: 18px;
    font-weight: 700;
    font-family: var(--font-small-text);
    margin-top: 60px;
    box-shadow: 0px 20px 30px -16px rgba(60, 80, 224, 0.2);
}

@media (max-width: 1150px) {
    margin: 0 auto;
}
`;

export default Blog;