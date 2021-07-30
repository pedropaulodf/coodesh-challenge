import React from 'react'

import { useRouter } from 'next/router'

export default function Single() {
  
  const router = useRouter()
  const { id } = router.query

  return (
    <p>Post Id: {id}</p>
  )

}
