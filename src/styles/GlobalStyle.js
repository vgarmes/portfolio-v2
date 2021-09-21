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

body {
  color: var(--clr-primary-2-lighter);
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
    color: var(--clr-primary-4)
  }
}

h1,
h2,
h3,
h4,
h5,
h6 {
  letter-spacing: var(--spacing);
  text-transform: capitalize;
  line-height: 1.25;
  margin-bottom: 0.75rem;
}

p {
  font-family: var(--ff-secondary);
  margin-bottom: 1.25rem;
 
}
.big-heading {
    margin: 0;
    font-size: clamp(40px, 8vw, 80px);
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
      padding: 125px 25px;
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
        padding: 0 25px;
      }
    }
  }


body {
    margin: 0;
    width: 100%;
    min-height: 100%;
    overflow-x: hidden;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    background-color: var(--clr-primary-1);
    color: var(--clr-primary-2-lightest);
    font-family: var(--ff-primary);
    font-size: var(--fz-xl);
    line-height: 1.3;
    @media (max-width: 480px) {
      font-size: var(--fz-lg);
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
  background: var(--clr-primary-5);
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
/* page links */

/* social links */


/*
=============== 
Hero
===============
*/
/* underline added to globals */
.hero {
  margin-top: -5rem;
  padding-top: 5rem;
  height: 100vh;
  background: var(--clr-primary-10);
  position: relative;
}

.hero-center {
  height: 100%;
  display: grid;
  align-items: center;
}

.hero .underline {
  margin-bottom: 0.5rem;
  margin-left: 0;
}
.hero-info {
  background: var(--clr-primary-10);
}
.hero-img {
  display: none;
}
.hero-img-svg {
  display: none;
}
.hero-img {
  display: none;
}
.hero-info h4 {
  color: var(--clr-grey-5);
}
.hero-icons {
  justify-items: flex-start;
}
.hero .btn {
  margin-top: 1.25rem;
}

@media screen and (min-width: 992px) {
  .hero::before {
    content: "";
    position: absolute;
    top: 0;
    left: 60%;
    right: 0;
    bottom: 0;
    background: var(--clr-white);
  }
  .hero-center {
    grid-template-columns: repeat(12, 1fr);
  }

  .hero h4 {
    font-size: 0.85rem;
  }
  .hero-info {
    grid-row: 1/1;
    grid-column: 1 / span 8;
  }
  .hero-img {
    display: block;
    grid-row: 1/1;
    grid-column: 7/-1;
  }
  .hero-img-svg {
    width: 100%;
    height: 400px;
    position: relative;
    display: block;
    grid-row: 1/1;
    grid-column: 7/-1;
  }
}
@media screen and (min-width: 1170px) {
  .hero h4 {
    font-size: 1rem;
  }

  .hero-info {
    grid-column: 1 / span 8;
  }

  .hero h4 {
    line-height: 1;
  }
}

/*
=============== 
Services
===============
*/
.service {
  background: var(--clr-white);
  padding: 3rem 1.5rem;
  margin-bottom: 2rem;
  border-radius: var(--radius);
  text-align: center;
  -webkit-transition: var(--transition);
  transition: var(--transition);
}
.service-icon {
  font-size: 2rem;
  margin-bottom: 1.5rem;
}
.service .underline {
  width: 3rem;
  height: 0.12rem;
  -webkit-transition: var(--transition);
  transition: var(--transition);
}
.service p {
  -webkit-transition: var(--transition);
  transition: var(--transition);
}
.service:hover {
  background: var(--clr-primary-5);
  color: var(--clr-primary-9);
}
.service:hover p {
  color: var(--clr-primary-9);
}
.service:hover .underline {
  background: var(--clr-primary-9);
}
@media screen and (min-width: 676px) {
  .services-center {
    display: grid;
    grid-template-columns: 1fr 1fr;
    -webkit-column-gap: 2rem;
    -moz-column-gap: 2rem;
    column-gap: 2rem;
  }
}
@media screen and (min-width: 992px) {
  .services-center {
    grid-template-columns: 1fr 1fr 1fr;
  }
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



/*
===============
Footer
===============
*/
.footer {
  height: 9rem;
  background: #222;
  text-align: center;
  display: grid;
  place-items: center;
}
.footer h4 {
  margin-top: 0.5rem;
  color: var(--clr-white);
  font-weight: normal;
  text-transform: uppercase;
}
.footer h4 span {
  color: var(--clr-primary-5);
}
.footer-links {
  margin: 0 auto 1rem auto;
}
.footer .social-link {
  color: var(--clr-white);
}
.footer .social-link:hover {
  color: var(--clr-primary-5);
}

${TransitionStyles}
`

export default GlobalStyle
