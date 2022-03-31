import {useQuery} from '@apollo/client';
import CHECKOUT_SESSION_SIGN_IN from './queries/checkoutSessionSignIn.gql'

const checkoutSessionSignIn = (buyerToken) => {
    const { loading, error, data } = useQuery(CHECKOUT_SESSION_SIGN_IN.checkoutSessionSignIn, {
        // fetchPolicy will ignore the cached results.
        // not sure if we want to rely on the cached config or not yet
        // when testing changes, you may need to utilize this, or remove caching altogether
        // fetchPolicy: "network-only",

        // get this from somewhere
        variables: {buyerToken: buyerToken}
    });

    // the requests are asynchronous.
    // if we try to read the data before it is successfully retrieved, we get an error of course
    // this isn't common with cached queries, but if it's the first run or the fetchPolicy is to ignore the cache
    // may run into some issues
    if (data) {
        const queryResponse = data.checkoutSessionSignIn;
        if (queryResponse) {
            return queryResponse.response;
        }
    }

}

export default checkoutSessionSignIn
