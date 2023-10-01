import React, { useState } from 'react';
import BookCard from './BookCard';
import booksData from './data';
import '../Styles/BookList.css';

function BookList() {
  const [reviews, setReviews] = useState({});
  const [submittedReviews, setSubmittedReviews] = useState({});
  const [searchQuery, setSearchQuery] = useState('');

  const handleReviewChange = (event, bookId) => {
    const { name, value } = event.target;
    setReviews((prevReviews) => ({
      ...prevReviews,
      [bookId]: { ...prevReviews[bookId], [name]: value },
    }));
  };

  const handleReviewSubmit = (bookId) => {
    if (reviews[bookId]?.review) {
      setSubmittedReviews((prevSubmittedReviews) => ({
        ...prevSubmittedReviews,
        [bookId]: { ...reviews[bookId], submitted: true },
      }));
    }
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredBooks = booksData.filter((book) =>
    book.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search by title..."
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </div>
      <div className="book-list">
        {filteredBooks.map((book) => (
          <BookCard
            key={book.id}
            book={book}
            review={reviews[book.id]}
            onReviewChange={(e) => handleReviewChange(e, book.id)}
            onReviewSubmit={() => handleReviewSubmit(book.id)}
            submittedReview={submittedReviews[book.id]}
          />
        ))}
      </div>
    </div>
  );
}

export default BookList;



// import React, { Component } from 'react';
// import BookCard from './BookCard'; // Import the BookCard component
// import booksData from './data'; // Import the data from data.js
// import '../Styles/BookList.css'

// class BookList extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       reviews: {},
//       submittedReviews: {},
//       searchQuery : '',
//     };
//   }

//   handleReviewChange = (event, bookId) => {
//     const { name, value } = event.target;
//     this.setState((prevState) => ({
//       reviews: {
//         ...prevState.reviews,
//         [bookId]: { ...prevState.reviews[bookId], [name]: value },
//       },
//     }));
//   };

//   handleReviewSubmit = (bookId) => {
//     const { reviews } = this.state;

//     if (reviews[bookId]?.review) {
//       // If a review exists, mark it as submitted
//       this.setState((prevState) => ({
//         submittedReviews: {
//           ...prevState.submittedReviews,
//           [bookId]: { ...reviews[bookId], submitted: true },
//         },
//       }));
//     }
//   };

//   handleSearchChange = (event) => {
//     this.setState({ searchQuery: event.target.value });
//   };

//   render() {
//     const { reviews, submittedReviews, searchQuery } = this.state;
//     const filteredBooks = booksData.filter((book) =>
//       book.title.toLowerCase().includes(searchQuery.toLowerCase())
//     );

//     return (
//       <div>
//         <div className="search-bar">
//           <input
//             type="text"
//             placeholder="Search by title..."
//             value={searchQuery}
//             onChange={this.handleSearchChange}
//           />
//         </div>
//         <div className="book-list">
//           {filteredBooks.map((book) => (
//             <BookCard
//               key={book.id}
//               book={book}
//               review={reviews[book.id]}
//               onReviewChange={(e) => this.handleReviewChange(e, book.id)}
//               onReviewSubmit={() => this.handleReviewSubmit(book.id)}
//               submittedReview={submittedReviews[book.id]}
//             />
//           ))}
//         </div>
//       </div>
//     );
//   }
// }

// export default BookList;
