import Link from "next/link";

function Nav(props) {
  return (
    <nav>
      <ul>
        <li><Link href="/" passHref><a className={`${props.currentURL === "/" ? 'current' : ''}`} href="/">home</a></Link></li>
        {props.categories && props.categories.map((category) => <li><Link href={`/category/${category.Name}`} passHref><a className={`${props.currentURL === `/category/${category.Name}` ? 'current' : ''}`} href={`/category/${category.Name}`}>#{category.Name}</a></Link></li>)}
      </ul>
    </nav>
  );
}
export default Nav;

