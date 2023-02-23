import { Button, useToast, Wrap, WrapItem } from '@chakra-ui/react'



function Toastfun() {
    const toast = useToast()
    const positions = ['top']
  const handleadd=()=>{
  
  
                toast({
                  title: `${positions[0]} toast`,
                  position: "top",
                  isClosable: true,
                })
              
  }
    return (
      <Wrap>
        {positions.map((position, i) => (
          <WrapItem key={i}>
            <Button
              onClick={handleadd}
            >
              Show {position} 
            </Button>
          </WrapItem>
        ))}
      </Wrap>
    )
  }
  export {Toastfun}