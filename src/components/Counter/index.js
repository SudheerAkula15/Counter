import {Component} from 'react'
import './index.css'

class Counter extends Component {
  onIncrement = () => {
    let num = parseInt(document.getElementById('count').textContent)
    num = num + 1
    document.getElementById('count').textContent = num
  }
  onDecrement = () => {
    let num = parseInt(document.getElementById('count').textContent)
    num = num - 1
    document.getElementById('count').textContent = num
  }
  onReset = () => {
    let num = parseInt(document.getElementById('count').textContent)
    num = 0
    document.getElementById('count').textContent = num
  }
  render() {
    return (
      <div className="container">
        <h1 className="heading">Counter</h1>
        <p className="count" id="count">
          0
        </p>
        <div>
          <button className="button" onClick={this.onIncrement}>
            Increment
          </button>
          <button className="button" onClick={this.onReset}>
            Reset
          </button>
          <button className="button" onClick={this.onDecrement}>
            Decrement
          </button>
        </div>
      </div>
    )
  }
}
export default Counter
