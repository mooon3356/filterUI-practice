import styled from "styled-components";
import RequestCardContainer from "../containers/RequestCardContainer";
import FilterContainer from "../containers/FilterContainer";
import PageIntro from "../components/PageIntro";
import { useState } from "react";

export type checkBoxType = {
  method: boolean;
  material: boolean;
};

function DashboardPage() {
  const [checkBox, setCheckBox] = useState({
    method: false,
    material: false,
  });

  return (
    <Layout
      checkBox={checkBox}
      onClick={() => {
        setCheckBox({ method: false, material: false });
      }}
    >
      <PageIntro />
      <FilterContainer checkBox={checkBox} setCheckBox={setCheckBox} />
      <RequestCardContainer />
    </Layout>
  );
}

export default DashboardPage;

const Layout = styled.div<{ checkBox: checkBoxType }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 4rem;
  z-index: 0;
`;
