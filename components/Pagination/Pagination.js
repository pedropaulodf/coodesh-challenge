import React, { useEffect } from 'react'
import { StyledPaginationButton, StyledUl } from './PaginationStyles';

const MAX_ITENS = 9;
const MAX_LEFT = (MAX_ITENS - 1) / 2;

//Referência https://www.youtube.com/watch?v=v91BLoapVDw
export default function Pagination({limit, total, offset, setOffset, actualPage}) {
  
  const currentPage = offset ? (offset / limit) + 1 : 1;
  const pages = Math.ceil(total / limit);
  const first = Math.max(currentPage - MAX_LEFT, 1);

  function onPageChange(page){
    setOffset((page - 1) * limit);
    actualPage(page);
  }

  return (
    <StyledUl>

      {/* <li>
        <StyledPaginationButton 
          onClick={() => onPageChange(1)}
          disabled={currentPage === 1}
        >
          Primeiro
        </StyledPaginationButton>
      </li> */}

      <li>
        <StyledPaginationButton 
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Anterior
        </StyledPaginationButton>
      </li>

      {Array.from({ length: Math.min(MAX_ITENS, pages) })
      .map((_, index) => index + first)
      .map((page) => (
        <li key={page}>
          <StyledPaginationButton 
            onClick={() => onPageChange(page)}
            className={page === currentPage ? 'active': ''}
            disabled={page === currentPage ? true : page > total ? true : false}
          >
            {page}
          </StyledPaginationButton>
        </li>
      ))}

      <li>
        <StyledPaginationButton
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === pages || currentPage === total}
        >
          Próximo
        </StyledPaginationButton>
      </li>

      {/* <li>
        <StyledPaginationButton
          onClick={() => onPageChange(total)}
          disabled={currentPage === total}
        >
          Último
        </StyledPaginationButton>
      </li> */}

    </StyledUl>
  )
}
