import Router, { useRouter } from 'next/router'
import React from 'react'
import Pagination from 'react-bootstrap/Pagination'

const PaginationComponent = ({ pagesCount = 100 }) => {
  const { query } = useRouter()
  const page = +query?.page || 1

  return (
    <Pagination id='pagination'>
      <Pagination.First disabled={page === 1} onClick={() => Router.push({ query: { ...query, page: 1 } })}>First</Pagination.First>
      <Pagination.Prev disabled={page === 1} onClick={() => Router.push({ query: { ...query, page: page - 1 } })}>Prev</Pagination.Prev>

      <Pagination.Item id='pagination-item'>Page {page} of {pagesCount}</Pagination.Item>

      <Pagination.Next disabled={page === pagesCount} onClick={() => Router.push({ query: { ...query, page: page + 1 } })}>Next</Pagination.Next>
      <Pagination.Last disabled={page === pagesCount} onClick={() => Router.push({ query: { ...query, page: pagesCount }})}>Last</Pagination.Last>
  </Pagination>
  )
}

export default PaginationComponent