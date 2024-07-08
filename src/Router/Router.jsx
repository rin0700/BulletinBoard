import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NewThread from '../page/newThread'
import Thread from '../page/Thread'
import ThreadPage from '../page/ThreadPage'

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Thread />} />
        <Route path='/threads/new' element={<NewThread />} />
        <Route path='/threads/:thread_id' element={<ThreadPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router