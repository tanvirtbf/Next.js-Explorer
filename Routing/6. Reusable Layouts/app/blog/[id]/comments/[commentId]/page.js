import React from 'react'

const CommentId = async (props) => {
    console.log(await props.params.id);
    console.log(await props.params.commentId);
  return (
    <div>CommentId</div>
  )
}

export default CommentId