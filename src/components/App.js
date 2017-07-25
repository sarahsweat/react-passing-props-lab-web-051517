import React from 'react';

import FruitBasket from './FruitBasket';

export default class App extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      fruit: [],
      filters: [],
      currentFilter: null
    }
  }

  fetchFilters = () => {
    fetch('/api/fruit_types')
      .then(response => response.json())
      .then(filters => this.setState({ filters }))
  }

  fetchFruit = () => {
    fetch('/api/fruit')
      .then(response => response.json())
      .then(fruit => this.setState({ fruit }))
  }

  componentWillMount = () => {
    this.fetchFilters()
  }

  handleFilterChange = event => {
    console.log('new filter: ', event.target.value);
    this.setState({ currentFilter: event.target.value })
  }


  render() {
    return (
      <FruitBasket
        updateFilterCallback={this.handleFilterChange}
        filters={this.state.filters}
        currentFilter={this.state.currentFilter}
        fruit={this.state.fruit}
      />
    )
  }

}
