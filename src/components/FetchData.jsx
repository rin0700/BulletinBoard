  const [data, setData] = useState([])

  useEffect(() => {
    fetch('https://railway.bulletinboard.techtrain.dev/threads?offset=0')
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch(() => alert('データの取得に失敗しました'))
  }, [])
