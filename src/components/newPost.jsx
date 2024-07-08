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
