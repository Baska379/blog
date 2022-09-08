import client from "./sanity";

export const getAllPosts = async function () {
  const post = await client.fetch(
    `*[_type=="post"]{_createdAt , title , subtitle, date , "image": cover_image.asset->url , "slug":slug.current, "publisher": publisher->{title , "picture": picture.asset->url}}`
  );
  return post;
};
