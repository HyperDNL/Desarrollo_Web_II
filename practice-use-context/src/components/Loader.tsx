import React from "react";
import { MutatingDots } from "react-loader-spinner";
import styled from "styled-components";

export const Loader = () => {
  return (
    <LoaderContainer>
      <MutatingDots
        height="100"
        width="100"
        color="#424858"
        secondaryColor="#424858"
        radius="12.5"
        ariaLabel="mutating-dots-loading"
        visible={true}
      />
    </LoaderContainer>
  );
};

const LoaderContainer = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
