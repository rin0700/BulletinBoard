import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import axios from 'axios';

const NewPost = () => {
  const { thread_id } = useParams();
  const [newPost, setNewPost] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post(`https://railway.bulletinboard.techtrain.dev/threads/${thread_id}/posts`, {
      post: newPost
    })
      .then((res) => {
        console.log(res);
        dispatch({ type: 'ADD_POST' });
        alert('スレッドを作成しました');

      })
      .catch((err) => {
        console.log('Error:', err.response ? err.response.data : err.message);
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
