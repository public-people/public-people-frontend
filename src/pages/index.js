import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import Header from './../components/Header/index.jsx'
import Grid from './../components/Grid/index.jsx'
import Card from './../components/Card/index.jsx'


export default function IndexPage({ data }) {
  const rawItems = data.allMarkdownRemark.edges;
  const sortedItems = rawItems.sort((a, b) => a.node.frontmatter.order - b.node.frontmatter.order);
  const items = sortedItems.reduce(
    (result, item) => {
      const { node } = item;
      return {
        ...result,
        [node.id]: {
          size: node.frontmatter.size,
          markup: (
            <Card
              title={node.frontmatter.title} 
              highlighted={node.frontmatter.highlighted === 'true'}
            >
              <div dangerouslySetInnerHTML={{ __html: node.html }} />
            </Card>
          ),
        },
      }
    },
    {}
  );


  return (
    <div>
      <Helmet title="Homepage | Public People" />
      <Header />
      <div className="mt-30 mr-20 ml-20">
        <Grid start="tablet" {...{items}} utils="max-w-4 ml-auto mr-auto"/>
      </div>
    </div>
  )
}


export const query = graphql`
 query IndexQuery {
   allMarkdownRemark {
     edges {
       node {
         id
         html
         frontmatter {
          highlighted
          size
          title
         }
       }
     }
   }
 }
`