import React, { useState} from 'react'
import { AppLayout } from 'components/Layouts'
import Button from 'components/Button'

const Home = () => {
    const [ item, setItem] = useState(false)

   
   
  return (
    <AppLayout>
        Home
        <Button /> <br />
        <button onClick={() =>{
            setItem(!item);
        }}>click</button>
    </AppLayout>
  )
}

export default Home