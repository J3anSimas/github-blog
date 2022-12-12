import { Routes, Route, BrowserRouter } from 'react-router-dom'
import DefaultLayout from './layouts/DefaultLayout/default-layout.layout'
import Home from './pages/Home/home.page'

export default function Router(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/post/:id" element={<h1>Post</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
