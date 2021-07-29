import React from 'react'
import Head from 'next/head';

export default function Header(props) {

  const { metasData } = props;
  
  return (
    <Head>
      <title>{metasData.title}</title>
      <meta name="description" content={metasData.description} />
    </Head>
  )
}
