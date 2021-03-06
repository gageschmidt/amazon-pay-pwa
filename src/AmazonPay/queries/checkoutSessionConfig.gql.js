import { gql } from '@apollo/client';

export const GET_STORE_CONFIG_DATA = gql`
    query checkoutSessionConfig($cartId: String) {
        checkoutSessionConfig(cartId: $cartId) {
            config
        }
    }
`;

export default {
    checkoutSessionConfig: GET_STORE_CONFIG_DATA
}
