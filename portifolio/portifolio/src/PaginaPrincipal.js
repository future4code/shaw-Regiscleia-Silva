import { Box, Flex, Grid, GridItem, Image, Text } from "@chakra-ui/react"
import { Headers } from "./Headers"
import {foto} from "./Imgs/WhatsApp.jpeg"


export const PaginaPrincipal =()=>{
    return (
        <div>
        <Headers/>

       <Flex justify={"space-between"} direction={"column"} >
<Box position ={"absolute"} mt={""} m={"20px"}  color={"white"} fontSize={"50px"}>
    Sou a Regiscleia Dias <br/>
  <Text align={"center"} fontSize={"20px"}>Desenvolvedora Web Full Stack</Text>  
    </Box>
<Image

boxSize ={"100%"}
src="https://img.freepik.com/vetores-gratis/fundo-gradiente-de-galaxia_23-2148988608.jpg?w=740&t=st=1659878102~exp=1659878702~hmac=f1e13133f9892f688b81a24a5a817f87bef89f21ccffd496c7c76fa757bd29cf"
> 
</Image>

{/* <Image
boxSize={"150px"}
src={"foto"}
>
    
</Image> */}

       </Flex>
       <Grid
  h='400px'
  w='100%'
 
  bgGradient="linear(to-l, #7928CA, #FF0080)"
  templateRows='repeat(2, 2fr)'
  
  
>
  <GridItem colSpan={15}  />
 
  <GridItem colSpan={15}  />
</Grid>
       </div>
            
    )
}