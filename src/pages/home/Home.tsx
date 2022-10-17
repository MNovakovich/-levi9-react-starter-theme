import React, { useContext } from 'react'
import { AppLayout } from 'components/Layouts'
import Button from 'components/Button'
import { CounterContext } from 'context/counter/CounterContext';
import Headline from 'components/Headline';

const Home = () => {
   
  const { counterState, addition, subtraction } = useContext( CounterContext );
  const { total } = counterState;
  return (
    <AppLayout>
      <Headline title='Home' />
      <div>
        Context example:
        <p>Total: {total}</p>
        <Button onClick={subtraction}>-</Button> {" "}
        <Button onClick={addition}>+</Button>
       </div>
    </AppLayout>
  )
}

export default Home