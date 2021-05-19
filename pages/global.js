import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
  }
  table,
  tr,
  td,
  th {
    border: 2px solid ${({ theme }) => theme.text};
  }
  blockquote {
    border-left: 2px solid ${({ theme }) => theme.text};
  }
  header .logo img {
    filter: ${({ theme }) => (theme.theme === "night" ? "invert(100%)" : "none")};
  }
  .btn {
    color: ${({ theme }) => theme.text};
  }
  .top-option {
    border-bottom: 2px solid ${({ theme }) => theme.text};
  }
  header {
    border-bottom: 3px solid ${({ theme }) => theme.text};
  }
  nav {
    border-bottom: 3px solid ${({ theme }) => theme.text};
  }
  nav ul li a {
    color: ${({ theme }) => theme.text};
  }
  main .post-list .post-item {
    border-bottom: 2px solid ${({ theme }) => theme.text};
  }
  footer {
    border-top: 2px solid ${({ theme }) => theme.text};
  }
`;