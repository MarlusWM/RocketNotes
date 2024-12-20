import styled from "styled-components";
import backgroundImg from '../../assets/background.png';


export const Container = styled.div`
   width: 100%;
   display: flex;
   align-items: stretch;
`;

export const Form = styled.form`
padding: 0 136px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
text-align: center;

> h1 {
   font-size: 48px;
   color: ${({ theme }) => theme.COLORS.ORANGE};
}

> h2 {
   font-size: 24px;
   margin-top: 84px;
   margin-bottom: 24px;
}

> p {
   font-size: 14px;
   color: ${({ theme }) => theme.COLORS.GRAY_100};
}

> a {
   color: ${({ theme }) => theme.COLORS.ORANGE};
   margin-top: 124px;
}
`
export const Background = styled.div`
   min-height: 100vh;
   flex: 1;
   background: url(${backgroundImg}) center;
   background-size: cover;
`