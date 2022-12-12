import { Routes, Route, BrowserRouter } from 'react-router-dom'
import DefaultLayout from './layouts/DefaultLayout/default-layout.layout'

export default function Router(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route path="/" element={<h1>Index</h1>} />
          <Route path="/post/:id" element={<h1>Post</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
