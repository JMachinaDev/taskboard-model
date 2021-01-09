import sanityClient from '@sanity/client';

export class Client {
  constructor () {
    this.client = sanityClient({
      projectId: "9a6mhi26",
      dataset: "production",
      useCdn: true
    });
  }  

  fetchData = () => {
    return this.client
    .fetch(
      `*[_type == "post"]{
      title,
      slug,
      date,
      description,
      'name': author->name,
      'authorImage': author->image,
    }`);
  }
}