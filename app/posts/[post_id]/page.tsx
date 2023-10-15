export default function PostDetail({params}: {params: {post_id: string}}) {
  return (
    <div>
      PostDetail : {params.post_id}
    </div>
  )
}
