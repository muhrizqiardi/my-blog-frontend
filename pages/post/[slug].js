import { useEffect, useState } from 'react';

import Header from '../../components/Header'
import Nav from '../../components/Nav'

import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from '../../theme/global'
import { API_URL } from '../../utils/urls';

import ReactMarkdown from 'react-markdown'
import gfm from 'remark-gfm'

const dayTheme = {
  theme: "day",
  body: '#f5f5f5',
  text: '#141414',
  toggleBorder: '#141414',
}

const nightTheme = {
  theme: "night",
  body: '#141414',
  text: '#f5f5f5',
  toggleBorder: '#f5f5f5',
}

export default function PostContent(props) {
  const [theme, setTheme] = useState('day');
  const [riseup, setRiseup] = useState();

  // The function that toggles between themes
  const toggleTheme = (e) => {
    // if the theme is not light, then set it to night
    if (theme === 'day') {
      setTheme('night');
      // otherwise, it should be day
    } else {
      setTheme('day');
    }
    setRiseup(1);
  }

  useEffect(() => {
    setTheme(window.matchMedia('(prefers-color-scheme: dark)').matches ? "night" : "day")
    // console.log(theme)
  }, []);

  // console.log(props.post.Thumbnail.formats.large.url)
  return (
    <ThemeProvider theme={theme === 'night' ? nightTheme : dayTheme}>
      <GlobalStyles />
      <div className="container">
        <div className="top-option">
          <div className="btn day-night-toggle" onClick={toggleTheme}>
            {(theme === 'night' ?
              <img className="day riseup" src="/other/sun.svg" alt="Switch to day mode" onAnimationEnd={() => setRiseup(0)} riseup={riseup} srcset="" />
              :
              <img className="night riseup" src="/other/moon.svg" alt="Switch to night mode" onAnimationEnd={() => setRiseup(0)} riseup={riseup} srcset="" />
            )}
          </div>
        </div>
        <Header
          title={props.post.Title}
          description={props.post.Snippet}
        />
        <Nav categories={props.categories} />
        <main>
          <article className="post-full">
            <img className="main" src={`${API_URL}` + props.post.Thumbnail.formats.large.url} alt={props.post.ImageAlt} />
            <h1>{props.post.Title}</h1>
            <span>By {props.post.User.username} at {new Date(Date.parse(props.post.updated_at)).toLocaleString()}, {props.post.Categories && props.post.Categories.map((category) => <a href={`/category/${category.Name}`}>#{category.Name} </a>)}</span>
            <div className="content">
              <ReactMarkdown plugins={[gfm]}>{props.post.Content}</ReactMarkdown>
            </div>
          </article>
        </main>
        <footer>
          Copyright &copy; 2021 Muhammad Rizqi Ardiansyah
      </footer>
      </div>
    </ThemeProvider>
  )
}

export const getStaticProps = async ({ params: { slug } }) => {
  const post_res = await fetch(`${API_URL}/posts?slug=${slug}`);
  const found = await post_res.json();
  const category_res = await fetch(`${API_URL}/categories`);
  const categories = await category_res.json();



  return {
    props: {
      post: found[0],
      categories: categories
    }
  }
};

export const getStaticPaths = async () => {
  const post_res = await fetch(`${API_URL}/posts`);
  const posts = await post_res.json();

  return {
    paths: posts.map((post) => ({
      params: { slug: String(post.slug) }
    })),
    fallback: false
  }
}