import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NewThread from '../page/newThread'
import Thread from '../page/Thread'

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Thread />} />
        <Route path='/threads/new' element={<NewThread />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router