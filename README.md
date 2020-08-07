# Gatsby Demo with Wordpress 

This is a [decoupled Wordpress and Gatsby demo](live-wordpress-webops-demo.pantheonsite.io) for the fictional non-profit, The Arthritis Foundation.

This site is built on a gatbsy-wordpress starter that uses an early alpha version of the upcoming `gatsby-source-wordpress@v4`. [You can review the documentation for this package here](https://github.com/TylerBarnes/gatsby/blob/feat/source-wordpress-v4/packages/gatsby-source-wordpress-experimental/README.md), MaterialUI for components, and deploys to Pantheon. 

## Getting Started

Please make sure that you have up to date version of [gatsby-cli](https://www.gatsbyjs.org/docs/gatsby-cli/), [npm](https://www.npmjs.com/get-npm), and [yarn](https://yarnpkg.com/getting-started/install).

For more details on how to setup your local environment for gatsby projects, [here's a guide](https://www.gatsbyjs.org/tutorial/part-zero/).

Clone the repo locally: 
```
git clone git@github.com:pantheon-systems/gatsby-wordpress-demo.git
cd gatsby-wordpress-demo
```

Setup your environment variables file: 
```
cp .env.example .env.development
```

In `.env.development`update the `DATA_SOURCE_URL` in `env.development` to point to your WordPress install:
```
DATA_SOURCE_URL=live-wordpress-webops-demo.pantheonsite.io
```

Install the dependencies: 
```
yarn install
```

Run the site locally at on `http://localhost:8000`
```
gatsby develop
```

## Examples

Here are some examples of what you can do with the demo. 

### Connecting a Component to get data from the CMS

Only the `FeaturedPost` component is currently pulling data from our Wordpress backend. You can use it as an example to connect other components on the demo site. 

- [FeaturedPost](https://github.com/pantheon-systems/gatsby-wordpress-demo/blob/master/src/components/FeaturedPost.js) component definiton 
- [Layout Component](https://github.com/pantheon-systems/gatsby-wordpress-demo/blob/master/src/components/Layout.js) with the graphQL query to Wordpress and passing the props to the FeaturedPost. 

Please note that you'll need to create the content on your CMS to pull from. 

### Making a frontend component change 

For example, let's say we'd like to replace the subscribe modal in the header with a full width subscribe component: 

1. Remove the Subcribe Modal from the header. 

In `src/components/Header.js`, remove the following lines of code: 
```
import SubscribeModal from "./SubscribeModal"

<SubscribeModal/>
```
2. Save and confirm that the subscribe button no longer appears in the header on your local site. 
3. Include the Subscribe Block in `src/components/Layout.js`
```
import SubscribeBlock from "./SubscribeBlock"
```
4. Then add pass some content as props to the Subscribe Block: 
```
        <SubscribeBlock
          title="Keep up to date with the research."
          description=" Sign up today for email updates on arthritis research, treatment
          options, and healthy living!"
          caption="By signing up for this newsletter, you agree to receive email updates."
        />
```
5. Save and confirm that the subscribe block appears on the homepage 🎉
6. [The diff of your pull request should look like this](https://github.com/pantheon-systems/gatsby-wordpress-demo/pull/18)

## Debugging node sourcing

If you're getting errors while the nodes are being sourced, you can see which query had the error with the following options:

```
{
  resolve: `gatsby-wordpress-demo`,
  options: {
    debug: {
      graphql: {
        showQueryOnError: true,
        showQueryVarsOnError: true,
        copyQueryOnError: true,
        panicOnError: true,
      },
    },
  }
}
```
      
## Limitations/ Improvements

-  Tags and Comments are not implemented in the [starter](https://github.com/TylerBarnes/gatsby/tree/feat/source-wordpress-v4/packages/gatsby-source-wordpress-experimental) (only Categories).
-  Styling - may be handled better with styled components - discussion in [Issue #23](https://github.com/pantheon-systems/gatsby-wordpress-demo/issues/23)

## Related Links

- [gatsby-source-wordpress-experimental](https://github.com/TylerBarnes/gatsby/tree/feat/source-wordpress-v4/packages/gatsby-source-wordpress-experimental)
- [WPGatsby - WordPress Plugin](https://github.com/TylerBarnes/gatsby/tree/feat/source-wordpress-v4/packages/wp-gatsby)