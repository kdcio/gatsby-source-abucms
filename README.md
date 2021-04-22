# gatsby-source-abucms

Source plugin for pulling data from [AbuCMS](https://github.com/kdcio/abu) into [GatsbyJS](https://www.gatsbyjs.com/). It creates links between models and asset so they can be queried in Gatsby using GraphQL.

:warning: This plugin only works on Gatsby v3+.

## Install

```bash
npm install gatsby-source-abucms
```

## Configuration

```js
// gatsby-config.js
module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-abucms`,
      options: {
        baseUrl: "https://xxxxxxxx.execute-api.us-east-1.amazonaws.com",
        apiBase: "prod", // deployemnt stage
        models: ["blog", "home_page", "about_page", "social_profile"], // modelId
        apiKey: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
        useCache: false, // default is true. set to false if you want to debug.
      },
    },
  ],
};
```

## Example

[Gatsby's blog starter with AbuCMS](https://github.com/kdcio/gatsby-starter-blog-abucms)
