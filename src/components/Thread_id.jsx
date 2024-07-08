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
