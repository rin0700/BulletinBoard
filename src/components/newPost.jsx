import { useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const NewPost = () => {
  const { thread_id } = useParams();
  const [newPost, setNewPost] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post(`https://railway.bulletinboard.techtrain.dev/threads/${thread_id}/posts`, {
      post: newPost
    })
      .then((res) => {
        console.log(res);
        alert('スレッドを作成しました');
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
        alert('スレッドの作成に失敗しました');
      });

    setNewPost('');
  }

  return (
    <>
      <h2>投稿する</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" value={newPost} onChange={e => setNewPost(e.target.value)} required placeholder="内容" />
        <br /><br />
        <input type="submit" value="作成" />
      </form>
    </>
  )
}

export default NewPost;
