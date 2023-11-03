import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
`;

export const Container = styled.div`
  max-width: 1440px;
  margin: 0 40px;
  display: flex;
  
  justify-content: space-between;
  align-items: center;
  padding: 30px 0px;
/* for mobile device */
  @media only screen and (max-width:600px){
  flex-direction: column;
  margin: 0px 0px;
  }
/* for tablet device */
  @media only screen and (min-width:600px){
    
  }
/* for laptop device */
  @media only screen and (max-width:992px){

  }
`;

export const Left = styled.div`
  width: 60%;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  /* for mobile device */
  @media only screen and (max-width:600px){
  width: 100%;
  }
/* for tablet device */
  @media only screen and (min-width:600px){

  }
/* for laptop device */
  @media only screen and (max-width:992px){

  }
`;
export const Right = styled.div`
  width: 40%;
  display: flex;
  align-items: center;
   /* for mobile device */
   @media only screen and (max-width:600px){
  width: 100%;
  padding: 10px;
  }
`;
export const Image = styled.img`
  width: 500px;
`;

export const Title = styled.h1`
  max-width: 60%;
  font-size: 40px;
  color: darkblue;
  text-align: center;
   /* for mobile device */
   @media only screen and (max-width:600px){
  max-width: 100%;
  font-size: 30px;
  }
`;

export const Description = styled.p`
  font-size: 20px;
  margin-top: 15px;
  width: 70%;
  text-align: center;

  color:  ${(props)=> props.theme.colors.textDark};
   /* for mobile device */
   @media only screen and (max-width:600px){
  width: 100%;
  padding-left: 5px;
  padding-right: 5px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 25px;
`;

export const Button = styled.button`
  font-weight: bold;
  color:  ${(props)=> props.theme.colors.bgDefault};
  background-color:  ${(props)=> props.theme.colors.primary};
  padding: 15px 30px;
  cursor: pointer;
  border: 2px solid darkblue;
  border-radius: 10px;
  background: linear-gradient(to right, aliceblue 50%, darkblue 50%);
  background-size: 200% 100%;
  background-position: right bottom;
  transition: all 0.5s ease-out;
  &:hover{
      color:  ${(props)=> props.theme.colors.primary};
      border: 2px solid blue;
      background-position: left bottom;
      cursor: pointer;
  }
`;
