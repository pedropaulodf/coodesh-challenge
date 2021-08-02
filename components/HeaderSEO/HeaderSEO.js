import React, { useEffect, useState } from 'react'
import Head from 'next/head';

export default function HeaderSEO({metasData, headType}) {

  const [metas, setMetas] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    
    const metasObject = Object.keys(metasData).map(function(key, index) {
      // console.log(<meta key={index} name={key} content={metasData[key]} />);
      return <meta key={index} name={key} content={metasData[key]} />
    })
    
    setMetas(metasObject);
    setLoading(false);

  }, [])

  return (
    <Head>
      
      {loading 
      ? null
      : headType !== 'post-single' 
        ? (
          <>
            <title>{metasData.title ? `${metasData.title} | Translation, Inc`: 'Translation, Inc'}</title>
            <meta property="og:title" content={metasData.title ? `${metasData.title} | Translation, Inc`: 'Translation, Inc'} />
            <meta name="description" content={metasData.description} />
            <link rel="icon" type="image/png" sizes="38x38" href="../images/favicon.png"/>
            
          </>
          )
        : (
          <>
            <title>{`${metas.title} | Translation, Inc`}</title>
            <meta property="og:title" content={`${metas.title} | Translation, Inc`} />
            <meta name="description" content={metas.description} />
    
            <link rel="icon" type="image/png" sizes="38x38" href="../images/favicon.png"/>
          
          {}

            {console.log(metas)}
          
            {/* {metasData.map((meta,index) => (
              <meta name={meta} content={metasData[index]} />
            ))} */}

            {/* <meta name="ampUrl" content={metasData.ampUrl} />
            <meta name="article:author" content={metasData.ampUrl} />
            <meta name="article:publisher" content={metasData.ampUrl} />
            <meta name="article:section" content={metasData.ampUrl} />
            <meta name="article:tag"content={metasData.ampUrl} />
            <meta name="canonical" content={metasData.ampUrl} />
            <meta name="description" content={metasData.ampUrl} />
            <meta name="og:description" content={metasData.ampUrl} />
            <meta name="og:image" content={metasData.ampUrl} />
            <meta name="og:image:alt" content={metasData.ampUrl} />
            <meta name="og:image: height"content={metasData.ampUrl} />
            <meta name="og:image:secure_url" content={metasData.ampUrl} />
            <meta name="og:image: width"content={metasData.ampUrl} />
            <meta name="og:locale" content={metasData.ampUrl} />
            <meta name="og:site_name" content={metasData.ampUrl} />
            <meta name="og:title" content={metasData.ampUrl} />
            <meta name="og:type" content={metasData.ampUrl} />
            <meta name="title" content={metasData.ampUrl} />
            <meta name="twitter:card" content={metasData.ampUrl} />
            <meta name="twitter:creator" content={metasData.ampUrl} />
            <meta name="twitter:site" content={metasData.ampUrl} /> */}


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
