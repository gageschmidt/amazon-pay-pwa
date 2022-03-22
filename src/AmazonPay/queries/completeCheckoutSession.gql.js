import { gql } from '@apollo/client';


export const COMPLETE_CHECKOUT_SESSION = gql`
    mutation completeCheckoutSession($cartId: String!, $amazonSessionId: String!){
        completeCheckoutSession(cartId: $cartId, amazonSessionId: $amazonSessionId) {
            success
            message
        }
    }
`;

export default COMPLETE_CHECKOUT_SESSION;
