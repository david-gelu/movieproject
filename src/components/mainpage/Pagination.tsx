import React from 'react'

export default function Pagination(props: {
  page: number,
  setPage: (page: number) => void,
  currentPage: any
}) {

  const { page, setPage, currentPage } = props
  const pageMinusNr = (minusPage: number) => {
    setPage(page - minusPage)
    if (page - minusPage <= 0) setPage(1)
  }

  const pagePlusNr = (plusPage: number) => {
    setPage(page + plusPage)
    if (page + plusPage >= currentPage[0]?.total_pages) setPage(currentPage[0]?.total_pages)
  }
  return (
    <div style={{ marginTop: '1rem', display: 'flex', flexWrap: 'wrap', gap: '.5em' }}>
      {currentPage?.length && <div>
        {currentPage[0].page > 1 && <button onClick={() => pageMinusNr(2)}>page {page - 2}</button>}
        {currentPage[0].page > 1 && <button onClick={() => pageMinusNr(1)}>page {page - 1}</button>}
        <button style={{ background: 'red' }}>page {page}</button>
        {currentPage[0].page < currentPage[0].total_pages && <button onClick={() => pagePlusNr(1)}>page {page + 1}</button>}
        {currentPage[0].page < currentPage[0].total_pages && <button onClick={() => pagePlusNr(2)}>page {page + 2}</button>}
      </div>
      }
    </div>
  )
}
