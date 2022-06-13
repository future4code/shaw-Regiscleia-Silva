import { Image } from "@chakra-ui/react";
import React from "react";
import logo from "../../imgs/unnamed.jpg";

const Logo = () => {
  return <Image boxSize={"150px"} src={logo} alignSelf={"center"} my={'3em'}/>;
};

export default Logo;
