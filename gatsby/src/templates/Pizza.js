import React from 'react'
import { graphql } from 'gatsby'

export default function SinglePizzaPage({ data }) {
  const { pizza } = data
  console.log(pizza)
  return <div>Single pizza here</div>
}

export const query = graphql`
  query($slug: String!) {
    pizza: sanityPizza(slug: { current: { eq: $slug } }) {
      name
      id
      image {
        asset {
          fluid(maxWidth: 800) {
            ...GatsbySanityImageFluid
          }
        }
      }
      toppings {
        name
        id
        vegetarian
      }
    }
  }
`
