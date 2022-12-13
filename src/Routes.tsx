import { Routes, Route, BrowserRouter } from 'react-router-dom'
import DefaultLayout from './layouts/DefaultLayout/default-layout.layout'
import Home from './pages/Home/home.page'
import ViewPost from './pages/ViewPost/view-post.pages'

export default function Router(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/post/:id" element={<ViewPost />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
