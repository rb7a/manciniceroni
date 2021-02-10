import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'

export default ({ data }) => {
  return (
    <Layout>
      {/* <Helmet>
        <title>Our Mission | VeggieMedCheeses</title>
      </Helmet>
      <Title title='NEWS' /> */}
      <section className='container blog-section' style={{ marginTop: '40px', marginBottom: '180px' }}>
        {data.allWpPost.nodes.map(node => (

          <Link to={`/${node.slug}`}>
            <div key={node.slug}>

              <img className='img-blog' src={node.featuredImage.node.mediaItemUrl} width='100%' />

              <h2>{node.title}</h2>
              <div
                className='excerpt'
                dangerouslySetInnerHTML={{ __html: node.excerpt }}
              />
              <p className='read-more'>Leggi l'articolo >
              </p>
            </div>
          </Link>

        ))}
      </section>
      <style jsx='true'>{`
            .blog-section{
                width: 95%;
            }
            .blog-section h2 {
              font-size: 18px
            }
            .blog-excerpt{
                color: #777;
                position: relative;
                bottom: 10px
            }
            .read-more {
              color: var(--main-color)
            }
            .read-more:hover {
              font-weight: 500
            }
            .img-blog {
              border-radius: 35px;
              box-shadow: var(--shadow)
          }
            @media(min-width:1200px){
              .blog-section{
                width: 50%
              }
            }
            `}
      </style>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    allWpPost {
      nodes {
        title
        slug
        excerpt
        date(formatString: "MMMM DD, YYYY")
        featuredImage {
          node {
            mediaItemUrl
          }
        }
      }
    }
  }
`
