import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 40%;
  background-color: ${(props) => props.theme.colors.light};
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  color: ${(props) => props.theme.colors.bgDefault};
  background-color: ${(props) => props.theme.colors.light};
  width: 100%;
  margin-top: 5%;
  height: 40%;
  padding: 5%;
  @media only screen and (max-width: 600px) {
    flex-direction: column;
  }
`;

export const Title = styled.div`
  color: ${(props) => props.theme.colors.bgDefault};
  font-weight: bold;
  font-size: 20px;
  padding: 2%;
`;

export const Description = styled.div`
  color: ${(props) => props.theme.colors.textDark};
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: bold;
  font-size: 20px;
  width: 30%;
  @media only screen and (max-width: 600px) {
    width: 80%;
  }
`;

export const Menu = styled.ul`
  display: flex;

  flex-direction: column;
  list-style: none;
  /* for mobile device */
`;

export const MenuItem = styled.li`
  /* font-weight: bold; */
  font-size: 18px;
  /* margin-top: 30px; */
  /* margin-top: 10px; */
  color: ${(props) => props.theme.colors.textDark};
  cursor: pointer;
  &:hover {
    color: ${(props) => props.theme.colors.primary};
  }
`;

export const MenuItems = styled.div`
  margin-top: 10px;
  font-size: 20px;
  font-weight: bold;
  color: ${(props) => props.theme.colors.textDark};
  cursor: pointer;
  flex-direction: column;
`;

export const P = styled.p`
  text-align: center;
  color: ${(props) => props.theme.colors.bgDefault};
  padding: 5px;
`;
