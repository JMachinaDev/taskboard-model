import sanityClient from '@sanity/client';

export default sanityClient({
    projectId: "9a6mhi26",
    dataset: "production",
    useCdn: true
});

