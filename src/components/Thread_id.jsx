
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


const ThreadPage = () => {
  const { thread_id } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchThread(thread_id).then((data) => {
      setData(data);
    }
    )
  }, [thread_id]);

  return (
    <>
      <h1>Thread Page</h1>
      <p>Thread ID: {thread_id}</p>
      <div className="fetch-post-container">
        {(!data || data.length === 0) ? (
          <div>まだ投稿はありません</div>
        ) : (
          <div className="data-list">
            {data.map((item, index) => (
              <dev key={index} className="data-item">
                {item.post}
              </dev>
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
