import { getServerSideSitemap } from "next-sitemap";
import api from "../../services/api";
import siteUrlComplete from "../../utils/siteUrlComplete";

export const getServerSideProps = async (ctx) => {
  const response = await api
    .get("posts")
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
      return false;
    });
    
  const fields = response.data.map((post) => ({
    loc: `${siteUrlComplete}/${post.id}`,
    lastmod: post.modified != '' ? post.modified : post.published,
  }));
  
  return getServerSideSitemap(ctx, fields);
};

export default function index() {}
