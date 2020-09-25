import { FaPizzaSlice as icon } from 'react-icons/fa';
import PriceInput from '../components/PriceInput';

export default {
  name: 'pizza',
  title: 'Pizza',
  icon,
  type: 'document',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Pizza name',
      description: 'The name of the pizza',
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug for pizza page',
      options: {
        source: 'name',
        maxLength: 100,
      },
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image for pizza page',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'price',
      type: 'number',
      title: 'Price',
      inputComponent: PriceInput,
      description: 'Price of the pizza in cents',
      validation: (Rule) => Rule.min(1000).max(50000),
    },
    {
      name: 'toppings',
      title: 'Toppings',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'topping' }] }],
    },
  ],
  preview: {
    select: {
      name: 'name',
      image: 'image',
      topping0: 'toppings.0.name',
      topping1: 'toppings.1.name',
      topping2: 'toppings.2.name',
      topping3: 'toppings.3.name',
    },
    prepare: ({ name, image, ...toppings }) => {
      const tops = Object.values(toppings).filter(Boolean);
      return {
        title: name,
        media: image,
        subtitle: tops.join(', '),
      };
    },
  },
};
