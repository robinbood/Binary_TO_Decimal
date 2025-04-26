import { useState } from 'react'
import './App.css'
const App = () => {
  const [value, setValue] = useState("")
  const [decimal, setDecimal] = useState(0)
  const [error, setError] = useState("")

  setTimeout(() => {
    setError("")
  }, 10000)

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const message = value.match(/^[01]+$/)
    if (!message) {
      setError("  0s and 1s only #_#")
      setTimeout(() => {
        setError("Come On! It's just 0s and 1s")
      }, 4000)
      return
    }
   
    const digit:number = value.split('').map(Number).reverse().reduce((acc, curr,index ) :number => { return acc + curr * Math.pow(2,index) })
    setDecimal(digit)
    


    
    
  }


    return (
      <div>
        <div>
          <h3>{error}</h3>
        </div>
        <div>
          <h4>binary system works from <em>right to left</em> 1 means a value and 0 means otherwise. The <q> Values</q>  are then calculated from the index and at each index the value is two times the previous one</h4>
        </div>
        
        <h2>Practice Binary By Practicing :D</h2>
        <em>it's just  0s and 1s after all </em>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            value={value}
            onChange={({ target }) => setValue(target.value)}
            placeholder="Enter a number"
          />
          <button type="submit">Submit</button>
        </form>
        <div>
          <h3>Binary: {decimal}</h3>
        </div>
        
      </div>
    )
}


export default App;
