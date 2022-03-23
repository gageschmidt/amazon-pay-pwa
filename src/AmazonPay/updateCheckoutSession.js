import {useMutation, useQuery} from '@apollo/client';
import UPDATE_CHECKOUT_SESSION from "./queries/updateCheckoutSession.gql";

const updateCheckoutSession = (cartId, amazonSessionId) => {
    const [updateCheckoutSession] = useMutation(UPDATE_CHECKOUT_SESSION, {
        // fetchPolicy will ignore the cached results.
        // not sure if we want to rely on the cached config or not yet
        // when testing changes, you may need to utilize this, or remove caching altogether
        // fetchPolicy: "network-only",

        // get this from somewhereZ
        variables: {cartId: cartId, amazonSessionId: amazonSessionId}
    });

    // when this imported method is called a promise is pending.
    // the promise result will contain the query's response
    // i.e.
    // const updateSessionMutation = updateCheckoutSession("1234", "!234");
    //     updateSessionMutation.then(function (result) {
    //         result.data.updateCheckoutSession;
    //     })
    return updateCheckoutSession({variables: {cartId: cartId, amazonSessionId: amazonSessionId}})
}

export default updateCheckoutSession;
