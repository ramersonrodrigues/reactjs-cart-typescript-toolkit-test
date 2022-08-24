// A mock function to mimic making an async request for data
export function fetchCount(amount = 1) {
  return new Promise<{ data: number }>((resolve) =>
    setTimeout(() => resolve({ data: amount }), 500)
  );
}

export function fetchProducts(page = 1) {
  fetch("https://mks-frontend-challenge-api.herokuapp.com/api/v1/products?page=1&rows=5&sortBy=name&orderBy=ASC")
    .then((response) => {
      console.log("response", response)
    }).catch(error => {
      console.log("Error", error)
    })
}