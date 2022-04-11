/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createSearchService = /* GraphQL */ `
  mutation CreateSearchService(
    $input: CreateSearchServiceInput!
    $condition: ModelSearchServiceConditionInput
  ) {
    createSearchService(input: $input, condition: $condition) {
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
export const updateSearchService = /* GraphQL */ `
  mutation UpdateSearchService(
    $input: UpdateSearchServiceInput!
    $condition: ModelSearchServiceConditionInput
  ) {
    updateSearchService(input: $input, condition: $condition) {
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
export const deleteSearchService = /* GraphQL */ `
  mutation DeleteSearchService(
    $input: DeleteSearchServiceInput!
    $condition: ModelSearchServiceConditionInput
  ) {
    deleteSearchService(input: $input, condition: $condition) {
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
