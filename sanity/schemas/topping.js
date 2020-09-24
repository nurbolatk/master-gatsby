import { FaPepperHot as icon } from 'react-icons/fa';

console.log(icon);
export default {
  name: 'topping',
  title: 'Topping',
  icon,
  type: 'document',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Topping name',
    },
    {
      name: 'vegetarian',
      type: 'boolean',
      option: {
        layout: 'checkbox',
      },
    },
  ],
  preview: {
    select: {
      name: 'name',
      vegetarian: 'vegetarian',
    },
    prepare: ({ name, vegetarian }) => ({
      title: `${name} ${vegetarian ? '🌱' : ''}`,
    }),
  },
};
