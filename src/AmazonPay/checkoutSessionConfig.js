import {useQuery} from '@apollo/client';
import GET_STORE_CONFIG_DATA from "./queries/checkoutSessionConfig.gql";

const checkoutSessionConfig = (cartId = "") => {
    const { loading, error, data } = useQuery(GET_STORE_CONFIG_DATA.getConfig, {
        // fetchPolicy will ignore the cached results.
        // not sure if we want to rely on the cached config or not yet
        // when testing changes, you may need to utilize this, or remove caching altogether
        // fetchPolicy: "network-only",

        // get this from somewhere
        variables: {cartId: cartId}
    });

    if (error) {
        console.log(error)
    }

    // the requests are asynchronous.
    // if we try to read the data before it is successfully retrieved, we get an error of course
    // this isn't common with cached queries, but if it's the first run or the fetchPolicy is to ignore the cache
    // may run into some issues
    if (data) {
        const queryResponse = data.checkoutSessionConfig;
        if (queryResponse) {
            console.log(queryResponse.config);
            return queryResponse.config;
        }
    }

}

export default checkoutSessionConfig;
