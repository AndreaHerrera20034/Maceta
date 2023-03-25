import styled from "@emotion/styled";

export const StyledMaceta = styled.div`
  width: 200px;
  height: 250px;
  background-color: white;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction:column-reverse;
  `

export const StyledWater = styled.div`
  height: ${props => props.height}px;
  flex-direction:column-reverse;
  width: 200px;
  background: blue;
  position: relative;
  overflow: hidden;
  transition: height 3s ease-in-out;
  `;

  export const StyleMacetaPage = styled.div`
    background: #f5f5f5;
    
  `