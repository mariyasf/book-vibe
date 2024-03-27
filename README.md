
# Book Vibe
## 🔗 Links
[Live Link] (https://book-vibe.surge.sh)

### About Book Vibe:
Book Vibe is a web application that allows users to explore and manage their book collection. With a user-friendly interface, users can easily view book details, mark books as read or add them to their wishlist, and visualize their reading progress with a custom shape bar chart. The application provides a seamless experience for book enthusiasts to organize and track their reading journey.

### Technologies Used:
- React.js
- Material-UI for UI components
- React Router for routing
- Local storage for data persistence
- Custom Shape Bar Chart for data visualization


## Features

- Navbar with active route highlighting
- Banner section with a clickable button
- Books section displaying cards with book details
- Clickable cards redirecting to Book Details page
- Book Details page with detailed book information
- Buttons to mark books as read or add to wishlist
- Toast notifications for successful and duplicate actions
- Listed Books page displaying books from local storage
- Tab functionality to switch between read and wishlist books
- Sort by dropdown for sorting listed books
- Custom Shape Bar Chart on Pages to Read page
- Ability to add books to favorite list and view the list
- Responsive design for desktop and mobile devices


### API Reference


| Parameter  | Description                |
| :--------  | :------------------------- |
| `bookId`  | Unique identifier for the book |
| `bookName`  |  Name of the book |
| `author`  |  URL of the book cover image |
| `image`  | Review of the book (avoid lorem ipsum text) |
| `review`  |  Total number of pages in the book |
| `totalPages`  | Your API key |
| `rating`  | Rating of the book (out of 5) |
| `category`  | Category or genre of the book |
| `tags`  | Array of tags describing the book's attributes |
| `yearOfPublishing`  |  Year of publishing of the book |
| `publisher`  | Publisher of the book |





### Installation

Install my-project with npm

```bash
  npm create vite@latest Book-Review-using-React -- --template react
  npm install react-router-dom
  npm install -D tailwindcss postcss autoprefixer
  npx tailwindcss init -p
  npm i @material-tailwind/react
  npm install --save react-toastify
```
### How to Run Locally
```bash
    npm run dev
```
### How to Run in Surg

First install surge, if you haven’t already.
```bash
    npm run build.
```
Deploy to surge by typing surge dist.




