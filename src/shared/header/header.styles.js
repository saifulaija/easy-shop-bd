import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 10%;
  background-color: ${(props)=> props.theme.colors.bgDefault};
  border-bottom: 0.1px solid #e3d4e8;
 
`;

export const Container = styled.div`
  max-width: 1440px;
  height: 60px;
  margin: 0 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
`;

export const RightItem = styled.div``;
export const MiddleItem = styled.div``;
export const LeftItem = styled.div``;

export const Logo = styled.h2`
  color: ${(props) => props.theme.colors.primary};
  cursor: pointer;
  font-size: 20px;
  text-decoration: underline;
  border-left: 3px solid darkblue;
`;

export const Menu = styled.ul`
  display: flex;
  gap: 10px;
  list-style: none;
   /* for mobile device */
   @media only screen and (max-width:600px){
  display: none;
  }
`;

export const MenuItem = styled.li`
  font-weight: bold;
  font-size: 18px;
  color:  ${(props)=> props.theme.colors.textDark};
  cursor: pointer;
  &:hover {
    color:  ${(props)=> props.theme.colors.primary};
  }
`;

export const LinkItem = styled.link`
  color: red;
  text-decoration: none;
`;

export const Button = styled.button`
  background-color:  ${(props)=> props.theme.colors.primary};
  border: 2px solid white;
  cursor: pointer;
  color: ${(props)=> props.theme.colors.bgDefault};
  font-size: 16px;

  padding: 8px 20px;
  border-radius: 10px;
  &:hover {
    background-color:  ${(props)=> props.theme.colors.bgLight};
    color:  ${(props)=> props.theme.colors.primary};
    border: 2px solid darkblue;
  }
`;
