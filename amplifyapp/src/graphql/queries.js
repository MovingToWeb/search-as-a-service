/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getSearchService = /* GraphQL */ `
  query GetSearchService($id: ID!) {
    getSearchService(id: $id) {
      name
      url
      info
      id
      category
      createdAt
      updatedAt
    }
  }
`;
export const listSearchServices = /* GraphQL */ `
  query ListSearchServices(
    $filter: ModelSearchServiceFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSearchServices(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        name
        url
        info
        id
        category
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
