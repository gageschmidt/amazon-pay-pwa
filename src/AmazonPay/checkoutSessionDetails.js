import {useQuery} from '@apollo/client';
import GET_CHECKOUT_SESSION_DETAILS from './queries/checkoutSessionDetails.gql'

const checkoutSessionDetails = (amazonSessionId, queryTypes) => {
    const { loading, error, data } = useQuery(GET_CHECKOUT_SESSION_DETAILS.getCheckoutSessionDetails, {
        // fetchPolicy will ignore the cached results.
        // not sure if we want to rely on the cached config or not yet
        // when testing changes, you may need to utilize this, or remove caching altogether
        fetchPolicy: "network-only",

        // get this from somewhere
        variables: {amazonSessionId: amazonSessionId, queryTypes: queryTypes}
    });

    // the requests are asynchronous.
    // if we try to read the data before it is successfully retrieved, we get an error of course
    // this isn't common with cached queries, but if it's the first run or the fetchPolicy is to ignore the cache
    // may run into some issues
    if (data) {
        const queryResponse = data.checkoutSessionDetails;
        if (queryResponse) {
            console.log(queryResponse.response);
            return queryResponse.response;
        }
    }

}

export default checkoutSessionDetails;
