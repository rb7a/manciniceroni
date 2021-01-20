import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'

export default ({ data }) => {
  console.log(data)
  return (
    <Layout>
      {/* <Helmet>
        <title>Our Mission | VeggieMedCheeses</title>
      </Helmet>
      <Title title='NEWS' /> */}
      <section className='container blog-section' style={{ marginTop: '40px', marginBottom: '180px' }}>
        {data.allWpPost.nodes.map(node => (
          <li>
            <Link to={`/${node.slug}`}>
              <div key={node.slug}>
                <h2>{node.title}</h2>
                <p>{node.date}</p>
              </div>
            </Link>
          </li>
        ))}
      </section>
      <style jsx='true'>{`
            .blog-section{
                width: 95%;
            }
            .blog-excerpt{
                color: #777;
                position: relative;
                bottom: 10px
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
    allWpPost(sort: { fields: [date] }) {
      nodes {
        title
        slug
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`
