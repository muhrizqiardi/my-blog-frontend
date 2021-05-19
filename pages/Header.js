import Head from "next/head";
import Link from "next/link";
function Header(props) {
  return (
    <>
      <header>
        <Head>
          <title>{props.title ? (props.title.slice(0, 45) + (props.title.length <= 45 ? " " : "...") + " | ") : ("")}muhrizqiardi's blog</title>
          <meta name="description" content={props.description ? props.description : "I'm Muhammad Rizqi Ardiansyah, and welcome to my blog! This is where I share my personal opinion, tips on life, and programming tutorials!"} />
          <link rel="icon" href="/favicon/favicon.ico" />

          {/* Fonts */}
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Raleway:wght@400;700&display=swap" rel="stylesheet" />
        </Head>
        <div className="logo">
          <Link href="/" passHref>
            <a href="/">
              <img src="/brand/signature_black_fg.png" alt="" />
            </a>
          </Link>
        </div>
        <div className="title">
          <p className="blog-title">//muhrizqiardi blog</p>
          <p className="blog-subtitle">I'm Muhammad Rizqi Ardiansyah, and welcome to my blog! This is where I share my personal opinion, tips on life, and programming tutorials!</p>
        </div>
      </header>
    </>
  );
}
export default Header;
