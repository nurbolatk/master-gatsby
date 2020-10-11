import React from 'react'
import { graphql, Link, useStaticQuery } from 'gatsby'
import styled from 'styled-components'

const ToppingsStyles = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 4rem;

  a {
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 0 1rem;
    align-items: center;
    background: var(--grey);
    padding: 5px;
    border-radius: 2px;

    .count {
      background: white;
      padding: 2px 5px;
      border-radius: 2px;
    }

    .active {
      background: var(--yellow);
    }
  }
`

function countPizzasByToppings(pizzas) {
  const count = pizzas
    .map((pizza) => pizza.toppings)
    .flat()
    .reduce((acc, topping) => {
      if (acc[topping.id]) {
        acc[topping.id].count += 1
      } else {
        acc[topping.id] = {
          ...topping,
          count: 1,
        }
      }
      return acc
    }, {})
  const sorted = Object.values(count).sort(
    (a, b) => b.count - a.count
  )
  return sorted
}

export default function ToppingList() {
  const { pizzas } = useStaticQuery(graphql`
    query {
      pizzas: allSanityPizza {
        nodes {
          toppings {
            id
            name
            vegetarian
          }
        }
      }
    }
  `)

  const toppingsWithCount = countPizzasByToppings(pizzas.nodes)
  console.log('ToppingList -> toppingsWithCount', toppingsWithCount)

  return (
    <ToppingsStyles>
      {toppingsWithCount.map((topping) => (
        <Link to={`/topping/${topping.name}`} key={topping.id}>
          <span className="name">{topping.name}</span>
          <span className="count">{topping.count}</span>
        </Link>
      ))}
    </ToppingsStyles>
  )
}
