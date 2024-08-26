import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';


const ThreadPage = () => {
  const { thread_id } = useParams();
  const [data, setData] = useState([]);
  const addPost = useSelector((state) => state.addPost);

  useEffect(() => {
    fetchThread(thread_id).then((data) => {
      setData(data);
    }
    )
  }, [thread_id, addPost]);

  return (
    <>
      <h1>Thread Page:{addPost + ''}</h1>
      <p>Thread ID: {thread_id}</p>
      <div className="fetch-post-container">
        {(!data || data.length === 0) ? (
          <div>まだ投稿はありません</div>
        ) : (
          <div className="data-list">
            {data.map((item, index) => (
              <div key={index} className="data-item">
                {item.post}
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default ThreadPage;

const fetchThread = async (thread_id) => {
  try {
    const response = await fetch(`https://railway.bulletinboard.techtrain.dev/threads/${thread_id}/posts?offset=0`);
    const json = await response.json();
    return json.posts;
  } catch (error) {
    alert('データの取得に失敗しました');
    return [];
  }
}
