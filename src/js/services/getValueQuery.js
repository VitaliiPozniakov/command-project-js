import MoviesApiService from './moviesAPIService';

const moviesApiService = new MoviesApiService();

const searchForm = document.querySelector(`#search-form`);

searchForm.addEventListener('submit', onFormSubmit);

export default function onFormSubmit(e) {
  e.preventDefault();

  moviesApiService.searchQuery = e.currentTarget.elements.query.value.trim();
  console.log(moviesApiService.searchQuery)

  if (
    moviesApiService.searchQuery === null ||
    moviesApiService.searchQuery === ``
  ) {
    return;
  }

//   console.log(moviesApiService.searchQuery);

  searchForm.reset();
  return moviesApiService.searchQuery;
}
