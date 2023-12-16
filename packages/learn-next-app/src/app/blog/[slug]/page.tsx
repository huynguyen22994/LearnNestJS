
// export async function generateStaticParams() {
//   const posts: { slug: string, title: string }[] = [
//     {
//       slug: 'test1',
//       title: 'this is test 1'
//     },
//     {
//       slug: 'test2',
//       title: 'this is test 2'
//     }
// ]

//   return posts.map((post) => {
//     return post.slug
//   })
// }

export async function generateStaticParams() {
   const posts: { slug: string, title: string }[] = [
    {
      slug: 'test1',
      title: 'this is test 1'
    },
    {
      slug: 'test2',
      title: 'this is test 2'
    }
  ]
 
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export default function Page({ params }: { params: { slug: string} }) {
    return <div>
      My Post: {params.slug}
    </div>
  }