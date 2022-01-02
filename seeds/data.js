const data = [{
  "id": 1,
  "title": "Finance",
  "date": 14/05/2021,
  "category": "Grocery"
}, {
  "id": 2,
  "title": "Finance",
  "date": 19/02/2021,
  "category": "Industrial"
}, {
  "id": 3,
  "title": "Consumer Services",
  "date": 16/03/2021,
  "category": "Sports"
}, {
  "id": 4,
  "title": "Consumer Services",
  "date": 31/12/2021,
  "category": "Sports"
}, {
  "id": 5,
  "title": "Finance",
  "date": 12/03/2021,
  "category": "Games"
}, {
  "id": 6,
  "title": "Finance",
  "date": 19/04/2021,
  "category": "Clothing"
}, {
  "id": 7,
  "title": "Miscellaneous",
  "date": 09/01/2021,
  "category": "Beauty"
}, {
  "id": 8,
  "title": "Finance",
  "date": 18/12/2021,
  "category": "Electronics"
}, {
  "id": 9,
  "title": "Consumer Services",
  "date": 12/07/2021,
  "category": "Beauty"
}, {
  "id": 10,
  "title": "Technology",
  "date": 10/12/2021,
  "category": "Automotive"
}].map(item =>({
    ...item,
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  }));
  
  module.exports = data;