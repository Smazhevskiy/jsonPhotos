import * as React from 'react'
import {ChangeEvent} from 'react'
import Box from '@mui/material/Box'
import InputLabel from '@mui/material/InputLabel'
import FormControl from '@mui/material/FormControl'
import NativeSelect from '@mui/material/NativeSelect'

interface SelectProps {
  selectChange: (event: ChangeEvent<HTMLSelectElement>) => void
}


export const Select = (props: SelectProps) => {
  const {selectChange} = props
  return (
      <Box sx={{minWidth: 120}}>
        <FormControl fullWidth>
          <InputLabel variant="standard" htmlFor="controlled-native">
            sort by id
          </InputLabel>
          <NativeSelect
              onChange={selectChange}
              defaultValue={'Lowest'}
              inputProps={{
                name: 'name',
                id: 'controlled-native',
              }}
          >
            <option value={'lowest'}>lowest</option>
            <option value={'highest'}>highest</option>
          </NativeSelect>
        </FormControl>
      </Box>
  )
}