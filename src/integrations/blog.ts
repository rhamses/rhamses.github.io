export default async function () {
  const blogPostsRaw = await fetch("https://rhamses-blog.pages.dev/posts.json");
  const blogPosts = await blogPostsRaw.json();
  return blogPosts.posts
    .map((post: any) => {
      const { title, slug } = post;
      const url = blogPosts.site + "/" + slug;
      const image = blogPosts.site + "/assets/blog/" + slug + "/capa.webp";
      https: return {
        title,
        url,
        image,
      };
    })
    .slice(0, 2);
}
