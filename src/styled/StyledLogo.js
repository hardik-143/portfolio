import styled from "styled-components";
const StyledLogo = styled.div`
  width: 100px;
  height: 45px;
  max-height: 45px;
  color: #202020;
  user-select: none;
  .logo-text {
    margin: 0;
    font-size: 2.1rem !important;
    text-align: center;
    vertical-align: bottom;
    font-weight: 700;
    height: 100%;
    line-height: 45px;
    color: inherit !important;
    font-family: "Montserrat", sans-serif;
    span {
      font-weight: 500;
      font-size: 1.5rem;
      position: relative;
      // &::before {
      //   content: "";
      //   position: absolute;
      //   top: 0;
      //   left: 0;
      //   background: var(--black);
      //   width: 100%;
      //   height: 2px;
      // }
    }
  }
`;
export default StyledLogo;
