# FWD - MyReads

Cross-Skilling Track - Project #1

## Description:

A Bookshelf app that allows users to select and categorize books in their collection.

The project emphasizes using React to build the application and provides an API server and client library to persist information as you interact with the application.

On the main page, there are 3 different shelves, each containing a number of books:
  - Currently Reading
  - Want to Read
  - Read

Users will not only be able to view which books are in which shelf, but they'll also be able to move books to different shelves.

The main page also have a link to a search page, where users can search a database to add more books to the library.
This link takes users to a page with a search bar where they can type any name of a book.

## Package Manager used:

```js
npm
```

To get started:

- Type `npm install` into your terminal to install all the dependencies for this project.
- Type `npm start` into your terminal to start the development server.

## Available Scripts:

- `npm run start`: starts the React server in development mode.
- `npm run build`
- `npm run test` 
- `npm run eject`

## Port:

```js
React Server Port : 3000
```

## Backend Server

```js
https://reactnd-books-api.udacity.com
```

To simplify the development process, we've provided a backend server for you to develop against. The provided file [`BooksAPI.js`](src/utils/BooksAPI.js) contains the methods to perform necessary operations on the backend:

- [`getAll`](#getall)
- [`update`](#update)
- [`search`](#search)

### `getAll`

Method Signature:

```js
getAll();
```

- Returns a Promise which resolves to a JSON object containing a collection of book objects.
- This collection represents the books currently in the bookshelves in your app.

### `update`

Method Signature:

```js
update(book, shelf);
```

- book: `<Object>` containing at minimum an `id` attribute
- shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]
- Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query);
```

- query: `<String>`
- Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
- These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

## Important

The backend API uses a fixed set of cached search results and is limited to a particular set of search terms. That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebook/create-react-app/blob/main/packages/cra-template/template/README.md).