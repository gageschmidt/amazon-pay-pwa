import {useMutation, useQuery} from '@apollo/client';
import SET_CUSTOMER_LINK from "./queries/setCustomerLink.gql";

const setCustomerLink = (buyerToken, password) => {
    const [customerLink] = useMutation(SET_CUSTOMER_LINK, {
        // fetchPolicy will ignore the cached results.
        // not sure if we want to rely on the cached config or not yet
        // when testing changes, you may need to utilize this, or remove caching altogether
        // fetchPolicy: "network-only",

        // get this from somewhereZ
        variables: {buyerToken: buyerToken, password: password}
    });

    // when this imported method is called a promise is pending.
    // the promise result will contain the query's response
    // i.e.
    // const linkMutation = setCustomerLink("1234", "!234");
    //     linkMutation.then(function (result) {
    //         result.data.setCustomerLink;
    //     })
    return customerLink({variables: {buyerToken: buyerToken, password: password}})
}

export default setCustomerLink;
