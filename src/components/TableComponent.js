import React, { useState, useEffect } from 'react'
import { styled } from '@mui/material/styles'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell, { tableCellClasses } from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { Pagination } from '@mui/material'

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}))

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}))

export default function TableComponent({ data = [] }) {
  const [dataTable, setDataTable] = useState([])
  const [page, setPage] = useState(1)
  const [count, setCount] = useState(0)
  const [perPage, setPerPage] = useState(10)

  useEffect(() => {
    setDataTable(data)
    setCount(Math.ceil(data.length / perPage))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data])

  useEffect(() => {
    setCount(Math.ceil(dataTable.length / perPage))
  }, [dataTable, perPage])

  const paginate = (array, perPage, page) => {
    return array.slice((page - 1) * perPage, page * perPage)
  }

  const handleChange = (event, value) => {
    setPage(value)
  }

  return (
    <TableContainer
      component={Paper}
      sx={{
        maxWidth: '1200px',
      }}
    >
      <Table sx={{ minWidth: 700 }} aria-label='customized table'>
        <TableHead>
          <TableRow>
            <StyledTableCell>Dessert (100g serving)</StyledTableCell>
            <StyledTableCell align='right'>Calories</StyledTableCell>
            <StyledTableCell align='right'>Fat&nbsp;(g)</StyledTableCell>
            <StyledTableCell align='right'>Carbs&nbsp;(g)</StyledTableCell>
            <StyledTableCell align='right'>Protein&nbsp;(g)</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {paginate(dataTable, perPage, page).map((row, index) => (
            <StyledTableRow key={index}>
              <StyledTableCell component='th' scope='row'>
                {row.name}
              </StyledTableCell>
              <StyledTableCell align='right'>{row.calories}</StyledTableCell>
              <StyledTableCell align='right'>{row.fat}</StyledTableCell>
              <StyledTableCell align='right'>{row.carbs}</StyledTableCell>
              <StyledTableCell align='right'>{row.protein}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>

      <Pagination count={count} page={page} onChange={handleChange} />
    </TableContainer>
  )
}
