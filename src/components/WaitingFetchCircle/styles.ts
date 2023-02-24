
import styled from "styled-components";

export const Container = styled.div<{ height: number }>`
  height: ${({ height }) => `${height}vh`};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
