import { gql } from '@apollo/client';

export const CHECKOUT_SESSION_SIGN_IN = gql`
    query checkoutSessionSignIn($buyerToken: String!) {
        checkoutSessionSignIn(buyerToken: $buyerToken) {
            response
        }
    }
`;

export default {
    checkoutSessionSignIn: CHECKOUT_SESSION_SIGN_IN
}
