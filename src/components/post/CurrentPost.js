import styled from 'styled-components';

const PostContainer = styled.div`
  margin-bottom: 20px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;



const Title = styled.h2`
  margin: 0;
  color: #24A9E2;
  font-family: "NINO", Sans-serif;
  font-size: 35px;
`;

const Separator = styled.hr`
  border: none;
  border-top: 1px solid #eee;
`;
const LectorContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 15px;
`;
const ContentLector = styled.div`
color: #bababa;
`;
const ContentLectorName = styled.p`
color: #2b2b2b;
font-family: "NINO", Sans-serif;
font-size: 15px;
`;
const ContentDescription = styled.p`
color: #2b2b2b;
font-family: "NINO", Sans-serif;
font-size: 15px;
margin: 0;
`;

const CurrentPosts = ({title, lectorname, description }) => {
  return (
   
    <PostContainer>
      <Title> {title}</Title>
      <LectorContainer>
        <ContentLector>ლექტორი : </ContentLector>
        <ContentLectorName>{lectorname}</ContentLectorName>
      </LectorContainer>
      <ContentDescription>{description}</ContentDescription>
      <Separator />
    </PostContainer>
  );
};

export default CurrentPosts;