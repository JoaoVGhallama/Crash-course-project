import {useState} from 'react'


function Counter() { 
const [count, setCount] = useState(1)
const [valueInput, setValueInput] = useState('Alex')

const sub = () => {
    if (count <= 0 ){
        alert('nao pode')
    }else {
        setCount(count - 1)
    }
   
}
const add = () => {
    setCount(count + 1)
}

const change = (e) => {
    setValueInput(e.target.value)
}
    return (
        <div className="counter_container">
            <h2 onClick={add}>{count}</h2>
            <h2 onClick={sub}>sub</h2>
            <div>
                <input type="text" onChange={change}/>
                <h2>{valueInput}</h2>
            </div>
            
        </div>
    )
}

export default Counter