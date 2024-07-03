import { useState } from 'react'
import axios from 'axios'

function NewThread() {
  const [newThread, setNewThread] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    axios.post('https://railway.bulletinboard.techtrain.dev/threads', {
      title: newThread
    })
      .then((res) => {
        console.log(res)
        alert('スレッドを作成しました')
      })
      .catch((err) => {
        console.log(err)
        alert('スレッドの作成に失敗しました')
      })

    setNewThread('')
  }
  return (
    <>
      <h2>スレッド新規作成</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" value={newThread} onChange={e => setNewThread(e.target.value)} required placeholder="スレッド名" />
        <br /><br />
        <input type="submit" value="作成" />
      </form>
    </>
  )
}

export default NewThread