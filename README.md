<h1 align="center">Gatsby Contentful Recipes 👋</h1>

<p align="center">
    <a href="http://commitizen.github.io/cz-cli/" target="_blank">
        <img alt="Commitizen friendly" src="https://img.shields.io/badge/commitizen-friendly-brightgreen.svg"/>
    </a>
    <a href="https://github.com/prettier/prettier" target="_blank">
        <img alt="code style: prettier" src="https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square">
    </a>
    <a href="https://app.netlify.com/sites/prstbt-recipes/deploys" target="_blank">
        <img alt="Netlify Status" src="https://api.netlify.com/api/v1/badges/cd827ace-5367-42b0-bc5a-14b0be709ff6/deploy-status">
    </a>
</p>

## ✨ Demo

[https://prstbt-recipes.netlify.app/](https://prstbt-recipes.netlify.app/)

## 🚀 Quick start

1.  **CMS Configuration**

    1. Create an account and a space on [Contentful](https://www.contentful.com/).

    2. Create a `.env` locally with your credentials as follows:

       ```shell
       export CONTENTFUL_SPACE_ID=xxx000xxx0x0
       export CONTENTFUL_DELIVERY_API=xXXXXxxXXxXx0XxXXXx0xxxxxXxxxXxXxX00xxxXXxX
       export CONTENTFUL_PREVIEW_API=0XxXx0xxX0XxxXXxXxxxX0xxxx0xXxxxxx0Xx0xxx0x
       export DEBUG=true
       ```

       I suggest you tu use [direnv](https://direnv.net/) to manage your environment variables.

    3. Be sure contentful-cli (read [Contentful-cli](https://www.contentful.com/developers/docs/tutorials/cli/installation/) documentation) is installed and you're logged-in (read [Contenful Authentication](https://www.contentful.com/developers/docs/tutorials/cli/authentication/) documentation).

    4. Import content model provided :

       ```shell
       yarn import-cms-data
       ```

    <em>Read [Importing and exporting content with the Contentful CLI](https://www.contentful.com/developers/docs/tutorials/cli/import-and-export/) documentation)</em>

    You can export data later if you want:

    ```shell
    yarn export-cms-data
    ```

2.  **Client Installation.**

    Be sure you installed [Gatsby](https://www.gatsbyjs.com/) (`yarn global add gatsby-cli`).

    Then install project's packages:

    ```shell
    yarn
    ```

3.  **Start developing.**

    ```shell
    yarn start
    ```

4.  **Open the source code and start editing!**

    Your site is now running at [`http://localhost:8000`](http://localhost:8000)!

    Note: You'll also see a second link: [`http://localhost:8000/___graphql`](http://localhost:8000/___graphql). This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.com/tutorial/part-five/#introducing-graphiql).

## 🧐 What's inside?

A quick look at the top-level files and directories you'll see in a Gatsby project.

    .
    ├── node_modules
    ├── src
    ├── .gitignore
    ├── .prettierrc
    ├── gatsby-browser.js
    ├── gatsby-config.js
    ├── gatsby-node.js
    ├── gatsby-ssr.js
    ├── LICENSE
    ├── package-lock.json
    ├── package.json
    └── README.md

1.  **`/node_modules`**: This directory contains all of the modules of code that your project depends on (npm packages) are automatically installed.

2.  **`/src`**: This directory will contain all of the code related to what you will see on the front-end of your site (what you see in the browser) such as your site header or a page template. `src` is a convention for “source code”.

3.  **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.

4.  **`.prettierrc`**: This is a configuration file for [Prettier](https://prettier.io/). Prettier is a tool to help keep the formatting of your code consistent.

5.  **`gatsby-browser.js`**: This file is where Gatsby expects to find any usage of the [Gatsby browser APIs](https://www.gatsbyjs.com/docs/browser-apis/) (if any). These allow customization/extension of default Gatsby settings affecting the browser.

6.  **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc. (Check out the [config docs](https://www.gatsbyjs.com/docs/gatsby-config/) for more detail).

7.  **`gatsby-node.js`**: This file is where Gatsby expects to find any usage of the [Gatsby Node APIs](https://www.gatsbyjs.com/docs/node-apis/) (if any). These allow customization/extension of default Gatsby settings affecting pieces of the site build process.

8.  **`gatsby-ssr.js`**: This file is where Gatsby expects to find any usage of the [Gatsby server-side rendering APIs](https://www.gatsbyjs.com/docs/ssr-apis/) (if any). These allow customization of default Gatsby settings affecting server-side rendering.

9.  **`LICENSE`**: This Gatsby starter is licensed under the 0BSD license. This means that you can see this file as a placeholder and replace it with your own license.

10. **`package-lock.json`** (See `package.json` below, first). This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. **(You won’t change this file directly).**

11. **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.

12. **`README.md`**: A text file containing useful reference information about your project.

## 🎓 Learning Gatsby

Looking for more guidance? Full documentation for Gatsby lives [on the website](https://www.gatsbyjs.com/). Here are some places to start:

- **For most developers, we recommend starting with our [in-depth tutorial for creating a site with Gatsby](https://www.gatsbyjs.com/tutorial/).** It starts with zero assumptions about your level of ability and walks through every step of the process.

- **To dive straight into code samples, head [to our documentation](https://www.gatsbyjs.com/docs/).** In particular, check out the _Guides_, _API Reference_, and _Advanced Tutorials_ sections in the sidebar.

## 💫 Deploy

Auto publishing is on.

Deploys from master are published automatically [here](https://prstbt-recipes.netlify.app/fr-FR/).
