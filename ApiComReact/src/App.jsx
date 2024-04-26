import React from 'react'
import { useEffect } from 'react'

const App = () => {

  const [data, setData] = useState([])

  useEffect(()=>{
    fetch('https://ranekapi.origamid.dev/json/api/produto')
    .then(response=> response.json())
    .then(data => setData(data))
  }, [])

  return(
  <div>
      {data.map(item=>(
        <p>{item.nome}</p>
      ))}
  </div>
)

}

export default App