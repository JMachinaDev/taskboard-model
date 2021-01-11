import imageUrlBuilder from '@sanity/image-url';
import { Client } from '../client';

const builder = imageUrlBuilder(new Client().client);

const urlFor = (source) => {
  return builder.image(source)
}

export default urlFor;
