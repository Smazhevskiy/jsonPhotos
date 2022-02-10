import * as React from 'react'
import {ChangeEvent} from 'react'
import Pagination from '@mui/material/Pagination'
import Stack from '@mui/material/Stack'


interface PaginationType {
  count: number,
  currentPage: number
  handlerOnchangePage:(event: ChangeEvent<unknown>, page: number) => void
}



export const PaginationRounded = (props: PaginationType) => {
  const {count, currentPage,handlerOnchangePage} = props


  return (
      <Stack spacing={2}>
        <Pagination
            onChange={handlerOnchangePage}
            page={currentPage}
            count={count}
            size={'small'}
            boundaryCount={1}
            color={'primary'}
            variant="outlined"
            shape="rounded"
            hideNextButton={true}
            hidePrevButton={true}
        />
      </Stack>
  )
}