# gatsby-source-abucms

Source plugin for pulling data from [AbuCMS](https://github.com/kdcio/abu) into [GatsbyJS](https://www.gatsbyjs.com/). It creates links between models and asset so they can be queried in Gatsby using GraphQL.

[![ver](https://img.shields.io/npm/v/@kdcio/gatsby-source-abucms)](https://www.npmjs.com/package/@kdcio/gatsby-source-abucms) [![size](https://badgen.net/bundlephobia/minzip/@kdcio/gatsby-source-abucms)](https://bundlephobia.com/result?p=@kdcio/gatsby-source-abucms) [![build](https://img.shields.io/github/workflow/status/kdcio/gatsby-source-abucms/CI)](https://github.com/kdcio/gatsby-source-abucms/actions?query=workflow%3ACI) [![Known Vulnerabilities](https://snyk.io/test/github/kdcio/gatsby-source-abucms/badge.svg?targetFile=package.json)](https://snyk.io/test/github/kdcio/gatsby-source-abucms?targetFile=package.json) [![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=kdcio_gatsby-source-abucms&metric=alert_status)](https://sonarcloud.io/dashboard?id=kdcio_gatsby-source-abucms) [![Code Smells](https://sonarcloud.io/api/project_badges/measure?project=kdcio_gatsby-source-abucms&metric=code_smells)](https://sonarcloud.io/dashboard?id=kdcio_gatsby-source-abucms) [![Coverage](https://sonarcloud.io/api/project_badges/measure?project=kdcio_gatsby-source-abucms&metric=coverage)](https://sonarcloud.io/dashboard?id=kdcio_gatsby-source-abucms) [![license](https://img.shields.io/github/license/kdcio/gatsby-source-abucms)](https://github.com/kdcio/gatsby-source-abucms/blob/master/LICENSE)

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
