import React from 'react'
import Head from 'next/head';

export default function HeaderSEO({metasData, headType}) {

  return (
    <Head>
      
      {headType !== 'post-single' 
      ? (
        <>
          <title>{metasData.title ? `${metasData.title} | Translation, Inc`: 'Translation, Inc'}</title>
          
          <meta property="og:title" content={metasData.title ? `${metasData.title} | Translation, Inc`: 'Translation, Inc'} />
          
          <meta name="description" content={metasData.description} />
          
          <link
            rel="icon"
            type="image/png"
            sizes="38x38"
            href="../images/favicon.png"
          />
        </>
        )
      : (
        <>
          <title>{`${metasData.title} | Translation, Inc`}</title>
          <meta name="description" content={metasData.description} />
        
          {/* Twitter */}
          {/* <meta name="twitter:card" content="summary" key="twcard" />
          <meta name="twitter:creator" content={twitterHandle} key="twhandle" /> */}

          {/* Open Graph */}
          {/* <meta property="og:url" content={currentURL} key="ogurl" />
          <meta property="og:image" content={previewImage} key="ogimage" />
          <meta property="og:site_name" content={siteName} key="ogsitename" />
          <meta property="og:title" content={pageTitle} key="ogtitle" />
          <meta property="og:description" content={description} key="ogdesc" /> */}
        </>
      )
      }
    </Head>
  )
}
