import { Checkbox, CheckboxGroup, Stack } from '@chakra-ui/react'

import React from 'react'
interface str{
    item:String
}

const Checkboxfun = ({item}:str) => {
  return (
    <CheckboxGroup colorScheme='green'>
    <Stack spacing={[1, 5]} direction={['column']}>
      <Checkbox>{item}</Checkbox>
    </Stack>
  </CheckboxGroup>
  )
}

export default Checkboxfun




