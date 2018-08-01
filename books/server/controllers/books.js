const Book = require('mongoose').model('Book');

module.exports = {
  // grab all of resource
  index(request, response) {
    Book.find({})
      .then(books => response.json(books))
      .catch(console.log);
  },
  // create a resource
  create(request, response) {
    Book.create(request.body)
      .then(book => response.json(book))
      .catch(error => {
        const errors = Object.keys(error.errors).map(
          key => error.errors[key].message
        );

        response.status(500).json(errors);
      });
  },
  // grab singule resource
  show(request, response) {
    Book.findById(request.params.book_id)
      .then(book => response.json(book))
      .catch(console.log);
  },
  // update single resource
  update(request, response) {
    Book.findByIdAndUpdate(request.params.book_id, request.body, { new: true })
      .then(book => response.json(book))
      .catch(console.log);
  },
  // destroy single resource
  destroy(request, response) {
    Book.findByIdAndRemove(request.params.book_id)
      .then(book => response.json(book))
      .catch(console.log);
  },
};
