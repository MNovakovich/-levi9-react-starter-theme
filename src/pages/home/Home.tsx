import React, { useState} from 'react'
import { AppLayout } from 'components/Layouts'
import Button from 'components/Button'

const Home = () => {
    const [ item, setItem] = useState(false)

   
   
  return (
    <AppLayout>
        Home
        <Button onClick={() =>{
            setItem(!item);
        }}> Click</Button><br />

    </AppLayout>
  )
}

export default Home