import { Checkbox, CheckboxGroup, Stack } from '@chakra-ui/react'
import { useRef } from 'react'
import React from 'react'
import { sort } from '../../Utils/types'
interface str{
    item:string,
    handlesort:(obj:sort)=>void
}

const Checkboxfun = ({item,handlesort}:str) => {
const dref=React.useRef<HTMLInputElement | null>(null);
const handlecheck=(e:string)=>{
let val=(e)
  let status=(dref.current?.checked)
let obj={
  val,status
}




handlesort(obj)


}



  return (
    <CheckboxGroup colorScheme='green' >
    <Stack spacing={[1, 5]} direction={['column']}>
      <Checkbox onChange={()=>handlecheck(item)} ref={dref} isInvalid>{item}</Checkbox>
    </Stack>
  </CheckboxGroup>
  )
}

export default Checkboxfun




