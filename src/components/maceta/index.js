import { StyledMaceta } from "./index.styled";
import { StyledWater } from "./index.styled";
import getFlowerImage from "../flower/flower";
import Image from "next/image";

const Maceta = ({ water }) => {
  const flowerImage = getFlowerImage(water);

  return (
    <StyledMaceta>
      <StyledWater height={water}></StyledWater>
      <Image src={flowerImage} width={190} height={300} />
    </StyledMaceta>
  );
};

export default Maceta;
