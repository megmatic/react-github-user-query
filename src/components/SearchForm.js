import { Component } from 'react'
const axios = require("axios")

export default class SearchForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: "",
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    axios
      .get(`https://api.github.com/users/${this.state.username}`)
      .then((res) => {
        this.props.onSubmit(res.data)
        this.setState({ username: "" })
      })
  }
  handleChange = e => {
    this.setState({username: e.target.value})
  }
  render() {
    return (
      <div>
        <h1>Github User Query</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            required
            type="text"
            placeholder="Search username"
            value={this.state.username}
            onChange={this.handleChange}
          >
          </input>
          <input type="submit" />
        </form>
      </div>
    )
  }
}
