<h1 align="center">
  Portfolio Victor
</h1>

Second iteration of my portfolio's website built with Gatsby.

## Develop

> You'll need [Node](https://nodejs.org/en/),
> [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) and [Gatsby](https://www.gatsbyjs.com/docs/tutorial/part-0/#gatsby-cli) installed

- run `npm install` to install dependencies
- run `gatsby develop` to start development environment

## Build

> You'll need [Node](https://nodejs.org/en/),
> [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) and [Gatsby](https://www.gatsbyjs.com/docs/tutorial/part-0/#gatsby-cli) installed

- run `npm install` to install dependencies
- run `gatsby build` to build app for production (output is in `public` directory, ready to be deployed)
- run `gatsby serve` to preview site as it will appear once deployed

# Deployment to GitHub Pages

There is a custom script named `gatsby deploy` that builds the site and moves the output content in the `public` folder to a `gh-pages` branch on GitHub ready to be deployed on a GitHub Page named `username.github.io/reponame` ([see Gatsby docs guide](https://www.gatsbyjs.com/docs/how-to/previews-deploys-hosting/how-gatsby-works-with-github-pages/)).

In order to change the repository that the script will deploy to, do the following:

1. Edit the custom script on `package.json`. If the deployment repository is the same as the development repository:

```sh
"scripts": {
  "deploy": "gatsby build --prefix-paths && gh-pages -d public"
}
```

Otherwise, if you want to deploy to a different repository:

```sh
"scripts": {
  "deploy": "gatsby build --prefix-paths && gh-pages -d public -r <repository name>"
}
```

2. Edit the `pathPrefix` variable on `gatsby-config.js` with your `/reponame`. All the links on the project will be prefixed with this variable when building the site so it can be properly deployed to GitHub Pages.

For a repository named like `username.github.io`, you don’t need to specify `pathPrefix` and your website needs to be pushed to the `main` branch.
