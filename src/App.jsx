import './assets/libs/boxicons-2.1.1/css/boxicons.min.css'
import './scss/App.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import MainLayout from './layout/MainLayout'
import AddaBook from './pages/Add Book'
import BookStall from './pages/BooksStall'
import Checkout from './pages/Checkout'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route index element={<Dashboard />} />
                    <Route path="addbook" element={<AddaBook />} />
                    <Route path="books-stall" element={<BookStall />} />
                    <Route path="checkout" element={<Checkout />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
