import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Header from '../components/Header';
import AddBook from '../components/AddBook';
import BooksList from '../components/BooksList';
import useLocalStorage from '../hooks/useLocalStorage';
import EditBook from '../components/EditBook';
import BooksContext from '../context/BooksContext';


const AppRouter = () => {
  const [books, setBooks] = useLocalStorage('books', []);
  
    return (
      <BrowserRouter>
        <div>
          <Header />
          <div className="main-content">
            <BooksContext.Provider value={{ books, setBooks }}>
              <Routes>
                <Route element={<BooksList/>} path="/" />
                <Route element={<AddBook/>} path="/add" />
                <Route element={<EditBook/>} path="/edit/:id" />
                <Route element={() => <Navigate to="/" />} path = "*"/>
              </Routes>
            </BooksContext.Provider>
          </div>
        </div>
      </BrowserRouter>
    );
  };
  
export default AppRouter;