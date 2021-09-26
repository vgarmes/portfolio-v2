import { createGlobalStyle } from "styled-components"
import variables from "./variables"
import TransitionStyles from "./TransitionStyles"

const GlobalStyle = createGlobalStyle`
  ${variables};

  *,
  ::after,
  ::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    margin: 0;
    width: 100%;
    min-height: 100%;
    overflow-x: hidden;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    background-color: var(--color-background);
    color: var(--color-text);
    font-family: var(--ff-primary);
    font-size: var(--fz-lg);
    line-height: 1.3;
    @media (max-width: 480px) {
      font-size: var(--fz-md);
    }
    &.hidden {
      overflow: hidden;
    }
    &.blur {
      overflow: hidden;
      header {
        background-color: transparent;
      }
      #content > * {
        filter: blur(5px) brightness(0.7);
        transition: var(--transition);
        pointer-events: none;
        user-select: none;
      }
    }
  }

  main {
    margin: 0 auto;
    width: 100%;
    max-width: 1600px;
    min-height: 100vh;
    padding: 200px 150px;
    @media (max-width: 1080px) {
      padding: 200px 100px;
    }
    @media (max-width: 768px) {
      padding: 150px 50px;
    }
    @media (max-width: 480px) {
      padding: 125px 15px;
    }
    &.fillHeight {
      padding: 0 150px;
      @media (max-width: 1080px) {
        padding: 0 100px;
      }
      @media (max-width: 768px) {
        padding: 0 50px;
      }
      @media (max-width: 480px) {
        padding: 0 15px;
      }
    }
  }


  ul {
    list-style-type: none;
  }
  a {
    text-decoration: none;
    color: inherit;
    transition: var(--transition);

    &:hover,
    &:focus {
      color: var(--color-primary);
    }
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    letter-spacing: var(--spacing);
    line-height: 1.25;
    margin-bottom: 0.75rem;
    color: var(--color-gray-1000);
    font-weight: 700;
  }

  p {
    margin-bottom: 1.25rem;
  }

  /*  global classes */

  .center-btn {
    display: block;
    width: 12rem;
    text-align: center;
    margin: 0 auto;
    margin-top: 3rem;
  }
  /* section */
  section {
      margin: 0 auto;
      padding: 100px 0;
      max-width: 1000px;
      @media (max-width: 768px) {
        padding: 80px 0;
      }
      @media (max-width: 480px) {
        padding: 60px 0;
      }
    }

  .underline {
    width: 5rem;
    height: 0.25rem;
    margin-bottom: 1.25rem;
    background: var(--color-secondary);
    margin-left: auto;
    margin-right: auto;
  }
  .section-title {
    margin-bottom: 4rem;
    text-align: center;
  }
  .bg-grey {
    background: var(--clr-grey-10);
  }

  /*
  =============== 
  Jobs
  ===============
  */

  .jobs-center {
    width: 80vw;
    margin: 0 auto;
    max-width: var(--max-width);
  }
  .btn-container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    margin-bottom: 4rem;
  }
  .job-btn {
    background: transparent;
    border-color: transparent;
    text-transform: capitalize;
    font-size: 1.25rem;
    letter-spacing: var(--spacing);
    margin: 0.5rem;
    transition: var(--transition);
    cursor: pointer;
    padding: 0.25rem 0;
    line-height: 1;
  }
  .job-btn:hover {
    color: var(--clr-primary-5);
    box-shadow: 0 2px var(--clr-primary-5);
  }
  .active-btn {
    color: var(--clr-primary-5);
    box-shadow: 0 2px var(--clr-primary-5);
  }
  .job-info {
    /* min-height: 420px; */
  }
  .job-info h3 {
    font-weight: 400;
  }
  .job-info h4 {
    text-transform: uppercase;
    color: var(--clr-grey-5);
    background: var(--clr-grey-9);
    display: inline-block;
    padding: 0.375rem 0.75rem;
    border-radius: var(--radius);
  }
  .job-date {
    font-size: 0.75rem;
    letter-spacing: 1px;
  }
  .job-desc {
    display: grid;
    grid-template-columns: auto 1fr;
    column-gap: 2rem;
    align-items: center;
    margin-bottom: 1.25rem;
  }
  .job-desc p {
    margin-bottom: 0;
    color: var(--clr-grey-3);
  }
  .job-icon {
    color: var(--clr-primary-5);
  }
  @media screen and (min-width: 992px) {
    .jobs-center {
      width: 90vw;
      display: grid;
      grid-template-columns: 200px 1fr;
      column-gap: 4rem;
    }
    .btn-container {
      flex-direction: column;
      justify-content: flex-start;
    }

    .active-btn {
      box-shadow: -2px 0 var(--clr-primary-5);
    }
    .job-btn:hover {
      box-shadow: -2px 0 var(--clr-primary-5);
    }
    .job-date {
      font-size: 1rem;
      letter-spacing: var(--spacing);
    }
  }

  ${TransitionStyles}
`

export default GlobalStyle
