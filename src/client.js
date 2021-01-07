import sanityClient from '@sanity/client';
// import React, {useEffect} from 'react';


export default sanityClient({
    projectId: "9a6mhi26",
    dataset: "production",
    useCdn: true
});

