import { useEffect, useState } from 'react';

import Header from '../Header'
import Nav from '../Nav'
import PostList from '../PostList'

import { ThemeProvider } from 'styled-components';
import { dayTheme, nightTheme } from '../theme.js';
import { GlobalStyles } from '../global';
import { API_URL } from '../../utils/urls';

export default function Category(props) {
  console.log(props)
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
    console.log(props)
  }, []);

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
        <Header />
        <Nav 
          categories={props.categories} 
          currentURL={'/category/' + props.currentCategory}
          />
        <main>
          <PostList posts={props.posts} />
        </main>
        <footer>
          Copyright &copy; 2021 Muhammad Rizqi Ardiansyah
      </footer>
      </div>
    </ThemeProvider>
  )
}

export async function getStaticProps({ params: { category } }) {
  const res = await fetch(`${API_URL}/categories?Name=${category}`);
  const posts = await res.json();
  console.log(posts[0].Posts)

  const category_res = await fetch(`${API_URL}/categories`);
  const categories = await category_res.json();

  return {
    props: {
      posts: posts[0].Posts,
      categories: categories,
      currentCategory: category
    }
  }
};

export async function getStaticPaths() {
  const res = await fetch(`${API_URL}/categories`);
  const categories = await res.json();

  return {
    paths: categories.map((category) => {
      return {
        params: { category: String(category.Name) }
      }
    })
    , fallback: false
  }
}

