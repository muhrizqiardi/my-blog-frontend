import Head from "next/head";
import Link from "next/link";
function Header(props) {
  return (
    <>
      <header>
        <Head>
          <title>{props.title ? (props.title.slice(0, 45) + (props.title.length <= 45 ? " " : "...") + " | ") : ("")}muhrizqiardi's blog</title>
          <meta name="description" content={props.description ? props.description : "I'm Muhammad Rizqi Ardiansyah, and welcome to my blog! This is where I share my personal opinion, tips on life, and programming tutorials!"} />

          {/* OpenGraph / Facebook Meta*/}
          <meta property="og:type" content="website" />
          {/* <meta property="og:url" content="https://metatags.io/" /> */}
          <meta property="og:title" content={`${props.title ? (props.title.slice(0, 45) + (props.title.length <= 45 ? " " : "...") + " | ") : ("")}muhrizqiardi's blog`} />
          <meta property="og:description" content={props.description ? props.description : "I'm Muhammad Rizqi Ardiansyah, and welcome to my blog! This is where I share my personal opinion, tips on life, and programming tutorials!"} />
          <meta property="og:image" content="/LinkPreview.png" />

          {/* Twitter Meta */}
          <meta property="twitter:card" content="summary_large_image" />
          {/* <meta property="twitter:url" content="https://metatags.io/" /> */}
          <meta property="twitter:title" content={`${props.title ? (props.title.slice(0, 45) + (props.title.length <= 45 ? " " : "...") + " | ") : ("")}muhrizqiardi's blog`} />
          <meta property="twitter:description" content={props.description ? props.description : "I'm Muhammad Rizqi Ardiansyah, and welcome to my blog! This is where I share my personal opinion, tips on life, and programming tutorials!"} />
          <meta property="twitter:image" content="/LinkPreview.png" />

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
          <p className="blog-title">muhrizqiardi's blog</p>
          <p className="blog-subtitle">I'm Muhammad Rizqi Ardiansyah, and welcome to my blog! This is where I share my personal opinion, tips on life, and programming tutorials!</p>
        </div>
      </header>
    </>
  );
}
export default Header;
