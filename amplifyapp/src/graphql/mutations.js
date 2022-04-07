/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createMovies = /* GraphQL */ `
  mutation CreateMovies(
    $input: CreateMoviesInput!
    $condition: ModelMoviesConditionInput
  ) {
    createMovies(input: $input, condition: $condition) {
      movie_name
      movie_url
      movie_info
      id
      createdAt
      updatedAt
    }
  }
`;
export const updateMovies = /* GraphQL */ `
  mutation UpdateMovies(
    $input: UpdateMoviesInput!
    $condition: ModelMoviesConditionInput
  ) {
    updateMovies(input: $input, condition: $condition) {
      movie_name
      movie_url
      movie_info
      id
      createdAt
      updatedAt
    }
  }
`;
export const deleteMovies = /* GraphQL */ `
  mutation DeleteMovies(
    $input: DeleteMoviesInput!
    $condition: ModelMoviesConditionInput
  ) {
    deleteMovies(input: $input, condition: $condition) {
      movie_name
      movie_url
      movie_info
      id
      createdAt
      updatedAt
    }
  }
`;
