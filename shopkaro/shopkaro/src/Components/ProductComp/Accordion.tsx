import React from 'react'
import {
    Accordion as Accord,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
    Checkbox,
  } from '@chakra-ui/react'
import { MinusIcon,AddIcon } from '@chakra-ui/icons'
import Checkboxfun from './checkbox'

interface data{
    data:String[];
}

const Accordionfun = ({data}:data) => {
   
  return (
    <Accord allowMultiple>
  

  <AccordionItem>
    {({ isExpanded }) => (
      <>
        <h2>
          <AccordionButton>
            <Box as="span" flex='1' textAlign='left'>
              {data[0]}
            </Box>
            {isExpanded ? (
              <MinusIcon fontSize='12px' />
            ) : (
              <AddIcon fontSize='12px' />
            )}
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
            {data.map((item:String,i)=>{
              
        return  i>0 && <Checkboxfun key={i}  item={item}/>
            })}
        </AccordionPanel>
      </>
    )}
  </AccordionItem>
</Accord>
  )
}

export default Accordionfun