import styled from "styled-components";

export const Card = styled.div`
  width: 300px;
  max-height: 300px;
  overflow: hidden;
  padding: 10px;
  border: 0.1px solid gray;
  text-align: center;
  border-radius: 10px;
`;
export const ImageContainer = styled.div`
  width: 60px;
  text-align: center;
`;
export const Image = styled.img`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 90px;
`;
export const Title = styled.h3`
  color: ${(props) => props.theme.colors.light};
  font-size: 30px;
  font-weight: bold;
`;

export const Description = styled.p`
  font-size: 15px;
  margin-top: 15px;
  width: 70%;
  text-align: center;

  color: ${(props) => props.theme.colors.textDark};
`;

export const PriceContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const Category = styled.p`
  color: ${(props) => props.theme.colors.secondary};
`;
export const Price = styled.p`
  color: ${(props) => props.theme.colors.secondary};
`;

export const Button = styled.button`
  background-color: ${(props) => props.theme.colors.secondary};
  border: 2px solid white;
  cursor: pointer;
  color: ${(props) => props.theme.colors.bgDefault};
  font-size: 16px;
  width: 50%;
  margin-top: 10px;
  padding: 8px 20px;
  border-radius: 10px;
  &:hover {
    background-color: ${(props) => props.theme.colors.bgLight};
    color: ${(props) => props.theme.colors.primary};
    border: 2px solid darkblue;
  }
`;
