import React, { useEffect, useState } from 'react'
import api from '../services/api';

export async function getStaticProps(context) {


  // O que eu passar aqui, ele vai virar SEO
  const response = await api
  .get('posts/406721', {}, {"Access-Control-Allow-Origin": "*"})
  .then((response) => {
    return response.data.metas;
  })
  .catch((error) => {
    console.log(error);
    return false;
  });

  console.log(response); 
  // return response;

  return {
    props: {
      response
    }, // will be passed to the page component as props
  }
}

export default function Home({response}) {

  // const { response } = props;

  const [allPosts, setAllPosts] = useState(response);
  
  // useEffect(async ()=> {


  // },[])

  return (
    <div>
      <p>Coodesh Challenge</p>
      {allPosts.title}
    </div>
  )
}
