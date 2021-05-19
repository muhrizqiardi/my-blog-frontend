import PostItem from "./PostItem";

function PostList(props) {
  // console.log(props)
  return (
    <div className="post-list">
      { props.posts && props.posts.map((post) => (
        <PostItem
          href={`/post/${post.slug}`}
          title={post.Title}
          author={post.User.username}
          date={post.updatedAt}
          content={post.Snippet}
          categories={post.Categories}
        />
      ))}
    </div>
  );
}

export default PostList;



