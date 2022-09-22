import { gql } from "@apollo/client";

export const CREATE_LINK_MUTATION = gql`
  mutation PostMutation(
    $comment: String!
    $created_at: timestamptz!
    $image_url: String!
    $name: String!
  ) {
    insert_check_in(
      objects: {
        comment: $comment
        created_at: $created_at
        image_url: $image_url
        name: $name
      }
    ) {
      returning {
        id
        comment
        created_at
        image_url
        name
      }
    }
  }
`;

export const GET_CHARACTERS = gql`
  {
    check_in(order_by: { id: desc }) {
      comment
      created_at
      id
      image_url
      name
    }
  }
`;
