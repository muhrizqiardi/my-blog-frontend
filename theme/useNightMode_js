import { useEffect, useState } from "react";

export const useNightMode = () => {
  const [theme, setTheme] = useState('day');

  // The function that toggles between themes
  const toggleTheme = (e) => {
    // if the theme is not light, then set it to night
    if (theme === 'day') {
      setTheme('night');
      // otherwise, it should be day
    } else {
      setTheme('day');
    }
  }
  useEffect(() => {
    setTheme(window.matchMedia('(prefers-color-scheme: dark)').matches ? "night" : "day")
    console.log(theme)
  }, []);
  return [theme, toggleTheme];
}