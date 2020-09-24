import { MdPerson as icon } from 'react-icons/md';

export default {
  name: 'person',
  title: 'Slicemasters',
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
      name: 'description',
      type: 'text',
      title: 'Tell us a bit more about him',
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image for pizza page',
      options: {
        hotspot: true,
      },
    },
  ],
};
