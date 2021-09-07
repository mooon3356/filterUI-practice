import styled from "styled-components";

function DashboardPage() {
  return <Title>hello</Title>;
}

export default DashboardPage;

const Title = styled.div`
  color: ${(props) => {
    return props.theme.primary[500];
  }};
`;
