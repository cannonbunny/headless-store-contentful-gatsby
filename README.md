This is a template for a store/blog with data pulled from Contentful CMS via graphql. The template is built on the already really very awesome gatsby starter.

Be sure to create a Contentful CMS entry first or the code will 100% crash unless. Create a simple Content model with title(text), description(text/rich text), image(media),  date(date) and slug. After this is done, go to your local host and check if the graphql setting is correct using__graphql at the end of localhost:port/.

Change the settings in the gatsby-config and package files.

Change the graphql in index/data to match your own Contentful data, especially to replace allContentfulItem with your Contentful Model.

All pages are the main pages, all subpage are in components/static.

Update layout/seo as requred.
