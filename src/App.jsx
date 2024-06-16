import { useEffect } from 'react'
import './App.css'
import { getThreads } from './utils/threads.js'

function App() {
  const initialURL = "https://railway.bulletinboard.techtrain.dev/threads?offset=0";

  useEffect(() => {
    const fetchThreads = async () => {
      let res = await getThreads(initialURL);
      console.log(res);
    }
    fetchThreads();
  },[])

  return (
    <>
      <h1>TechTrain ReactStation1</h1>
    </>
  )
}

export default App
