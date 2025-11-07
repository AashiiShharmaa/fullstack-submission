import React, { useState } from "react";
function LibraryApp() {
 const [books, setBooks] = useState([
 { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
 { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee" },
 { id: 3, title: "1984", author: "George Orwell" },
 ]);
 const [searchTerm, setSearchTerm] = useState("");
 const [newBook, setNewBook] = useState({ title: "", author: "" });
 // Filtered books based on search
 const filteredBooks = books.filter(
 (book) =>
 book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
 book.author.toLowerCase().includes(searchTerm.toLowerCase())
 );
 // Add book
 const addBook = () => {
 if (!newBook.title || !newBook.author) return;
 setBooks([
 ...books,
 { id: Date.now(), title: newBook.title, author: newBook.author },
 ]);
 setNewBook({ title: "", author: "" });
 };
 // Remove book
 const removeBook = (id) => {
 setBooks(books.filter((book) => book.id !== id));
 };
 return (
 <div className="min-h-screen bg-gray-100 flex flex-col items-center p-8">
 <h1 className="text-3xl font-bold mb-6">📚 Library Management</h1>
 {/* Search Bar */}
 <input
 type="text"
 placeholder="Search books..."
 value={searchTerm}
 onChange={(e) => setSearchTerm(e.target.value)}
 className="mb-4 w-96 px-4 py-2 border rounded-lg shadow-sm focus:ring
focus:ring-blue-300"
 />
 {/* Book List */}
 <div className="w-96 bg-white rounded-xl shadow-lg p-4 mb-6">
 <h2 className="text-xl font-semibold mb-3">Available Books</h2>
 {filteredBooks.length > 0 ? (
 <ul>
 {filteredBooks.map((book) => (
 <li
 key={book.id}
 className="flex justify-between items-center border-b py-2"
 >
 <div>
 <p className="font-medium">{book.title}</p>
 <p className="text-sm text-gray-500">{book.author}</p>
 </div>
 <button
 onClick={() => removeBook(book.id)}
 className="px-3 py-1 bg-red-500 text-white rounded-lg hover:bg-red600"
 >
 Remove
 </button>
 </li>
 ))}
 </ul>
 ) : (
 <p className="text-gray-500">No books found</p>
 )}
 </div>
 {/* Add Book */}
 <div className="w-96 bg-white rounded-xl shadow-lg p-4">
 <h2 className="text-xl font-semibold mb-3">Add New Book</h2>
 <input
 type="text"
 placeholder="Book title"
 value={newBook.title}
 onChange={(e) => setNewBook({ ...newBook, title: e.target.value })}
 className="w-full mb-2 px-4 py-2 border rounded-lg shadow-sm
focus:ring focus:ring-green-300"
 />
 <input
 type="text"
 placeholder="Author"
 value={newBook.author}
 onChange={(e) => setNewBook({ ...newBook, author: e.target.value })}
 className="w-full mb-2 px-4 py-2 border rounded-lg shadow-sm
focus:ring focus:ring-green-300"
 />
 <button
 onClick={addBook}
 className="w-full py-2 bg-green-600 text-white rounded-lg hover:bggreen-700"
 >
 Add Book
 </button>
 </div>
 </div>
 );
}
export default LibraryApp;