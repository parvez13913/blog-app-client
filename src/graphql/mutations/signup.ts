import { gql } from "@apollo/client";

export const SIGNUP_MUTATION = gql`
  mutation Signup(
    $name: String!
    $email: String!
    $password: String!
    $bio: String
  ) {
    signup(name: $name, email: $email, password: $password, bio: $bio) {
      token
      userError
    }
  }
`;
