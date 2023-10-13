import { allPosts } from "contentlayer/generated"
import { compareDesc } from "date-fns"

import PostCard from "@/components/post-card"

export default function BlogPage() {
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  )

  return (
    <div className="mx-auto max-w-xl py-8">
      {posts.map((post, idx) => (
        <PostCard key={idx} {...post} />
      ))}
    </div>
  )
}
