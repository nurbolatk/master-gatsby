import React from 'react'
import { graphql } from 'gatsby'
import PizzaList from '../components/PizzaList'
import ToppingList from '../components/ToppingList'

const PizzasPage = ({ data }) => {
  const pizzas = data.pizzas.nodes
  return (
    <>
      <ToppingList />
      <PizzaList pizzas={pizzas} />
    </>
  )
}

export default PizzasPage

export const query = graphql`
  query PizzaQuery {
    pizzas: allSanityPizza {
      nodes {
        name
        id
        slug {
          current
        }
        price
        toppings {
          id
          name
        }
        image {
          asset {
            fluid(maxWidth: 400) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
`
