import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "../Style/FetchData.css"

const FetchData = () => {
  const [data, setData] = useState([])
  const navigate = useNavigate()

  const handleThread_id = (id) => {
    navigate(`/threads/${id}`)
  }

  useEffect(() => {
    fetch('https://railway.bulletinboard.techtrain.dev/threads?offset=0')
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch(() => alert('データの取得に失敗しました'))
  }, [])

  return (
    <div className="fetch-data-container">
      {(!data || data.length === 0) ? (
        <div>Loading</div>
      ) : (
        <div className="data-list">
          {data.map((item, index) => (
            <button key={index} onClick={() => handleThread_id(item.id)} className="data-item">
              {item.title}<br />
              {item.id}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export default FetchData
