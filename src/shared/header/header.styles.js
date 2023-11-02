import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 10%;
  background-color: white;
  border-bottom: 0.1px solid #e3d4e8;
`;

export const Container = styled.div`
  max-width: 1440px;
  height: 60px;
  margin: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const RightItem = styled.div``;
export const MiddleItem = styled.div``;
export const LeftItem = styled.div``;

export const Logo = styled.h2`
  color: ${(props) => props.theme.colors.secondary};
  cursor: pointer;
  font-size: 20px;
  text-decoration: underline;
  border-left: 3px solid darkblue;
`;

export const Menu = styled.ul`
  display: flex;
  gap: 10px;
  list-style: none;
`;

export const MenuItem = styled.li`
  font-weight: bold;
  font-size: 18px;
  color: gray;
  cursor: pointer;
  &:hover {
    color: darkblue;
  }
`;

export const LinkItem = styled.link`
  color: red;
  text-decoration: none;
`;

export const Button = styled.button`
  background-color: darkblue;
  border: 2px solid white;
  cursor: pointer;
  color: white;
  font-size: 16px;

  padding: 8px 20px;
  border-radius: 10px;
  &:hover {
    background-color: aliceblue;
    color: darkblue;
    border: 2px solid darkblue;
  }
`;
