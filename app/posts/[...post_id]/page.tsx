export default function PostDetail({params}: {params: {post_id: string}}) {
  console.log(params);
  
  return (
    <div>
      PostDetail : {params.post_id[1]}
    </div>
  )
}
