import { gql } from '@apollo/client';


export const SET_CUSTOMER_LINK = gql`
    mutation setCustomerLink($buyerToken: String!, $password: String!){
        setCustomerLink(buyerToken: $buyerToken, password: $password) {
            success
            message
        }
    }
`;

export default SET_CUSTOMER_LINK
