import React, {Component} from 'react'
import './search-form.css'
import debounce from 'lodash.debounce'

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
  }

  lol = debounce(this.onSubmit, 800)
  render() {
    return (
      <form onSubmit={(e) => e.preventDefault()} onChange={this.lol}>
        <input
          value={this.state.label}
          type="text"
          autoFocus={true}
          onChange={this.onChange}
          className="search-form"
          placeholder="Type to search..."
        />
      </form>
    )
  }
}
