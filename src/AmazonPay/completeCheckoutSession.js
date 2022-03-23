import {useMutation, useQuery} from '@apollo/client';
import COMPLETE_CHECKOUT_SESSION from "./queries/completeCheckoutSession.gql";

const completeCheckoutSession = (cartId, amazonSessionId) => {
    const [completeCheckoutSession] = useMutation(COMPLETE_CHECKOUT_SESSION, {
        // fetchPolicy will ignore the cached results.
        // not sure if we want to rely on the cached config or not yet
        // when testing changes, you may need to utilize this, or remove caching altogether
        // fetchPolicy: "network-only",

        // get this from somewhereZ
        variables: {cartId: cartId, amazonSessionId: amazonSessionId}
    });

    if (error) {
        console.log(error)
    }

    // when this imported method is called a promise is pending.
    // the promise result will contain the query's response
    // i.e.
    // const linkMutation = completeCheckoutSession("1234", "!234");
    //     linkMutation.then(function (result) {
    //         result.data.completeCheckoutSession;
    //     })
    return completeCheckoutSession({variables: {cartId: cartId, amazonSessionId: amazonSessionId}})
}

export default completeCheckoutSession;
