import { useState } from 'react'
import axios from 'axios'

function NewThread() {
  const [newThread, setNewThread] = useState('')

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