import Link from 'next/link';

function PostItem(props) {
  return (
    <Link href={props.href} passHref>
      <div className="post-item">
        <a className="post-item-anchor" href={props.href}>
          <h2>{props.title}</h2>
          <span>By {props.author ? props.author : "Unknown"} at {new Date(Date.parse(props.date)).toLocaleString()}{props.categories ? ",":" "} {props.categories && props.categories.map((category) => <a href="#">#{category.Name} </a>)}</span>
          <p>{props.content}</p>
        </a>
      </div>
    </Link>
  );
}
export default PostItem;
