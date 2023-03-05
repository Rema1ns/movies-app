import React, {Component} from 'react'
import './search-form.css'

export default class SearchForm extends Component {
  state = {
    label: '',
  }

  onChange = (e) => {
    this.setState({
      label: e.target.value,
    })
  }

  onSubmit = (e) => {
    e.preventDefault()
    this.props.searchMovie(this.state.label)
    this.setState({label: ''})
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input
          value={this.state.label}
          type="text"
          onChange={this.onChange}
          className="search-form"
          placeholder="Type to search..."
        />
      </form>
    )
  }
}
