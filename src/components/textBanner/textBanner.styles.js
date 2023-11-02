import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Title = styled.h5`
  color:  ${(props)=> props.theme.colors.secondary};
  font-size: 15px;
`;

export const Subtitle = styled.div`
  font-weight: bold;
  font-size: 40px;
  margin: 0px;
  color:  ${(props)=> props.theme.colors.primary};
`;
