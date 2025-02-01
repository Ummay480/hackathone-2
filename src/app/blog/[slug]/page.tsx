// src/app/blog/[slug]/page.tsx

import { useRouter } from 'next/router'

const blogData = [
  {
    slug: "morbi-sodales-tellus-elit",
    title: "Morbi Sodales Tellus Elit, In Blandit Risus Suscipit A",
    content: "This is the content of the blog post titled 'Morbi Sodales Tellus Elit, In Blandit Risus Suscipit A'."
  },
  {
    slug: "pellentesque-non-efficitur-mi",
    title: "Pellentesque Non Efficitur Mi Aliquam Convallis Mi Quis",
    content: "This is the content of the blog post titled 'Pellentesque Non Efficitur Mi Aliquam Convallis Mi Quis'."
  },
  {
    slug: "curabitur-rutrum-velit-ac-congue",
    title: "Curabitur Rutrum Velit Ac Congue Malesuada",
    content: "This is the content of the blog post titled 'Curabitur Rutrum Velit Ac Congue Malesuada'."
  }
]

const BlogPage = () => {
  const router = useRouter()
  const { slug } = router.query
  
  // Find the blog post based on the slug
  const post = blogData.find(post => post.slug === slug)

  if (!post) {
    return <div>Blog post not found!</div>
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  )
}

export async function getStaticPaths() {
  // Generate paths for each blog post
  const paths = blogData.map(post => ({
    params: { slug: post.slug }
  }))

  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  // Get the blog post based on the slug from the URL
  const post = blogData.find(post => post.slug === params.slug)

  return {
    props: {
      post
    }
  }
}

export default BlogPage
