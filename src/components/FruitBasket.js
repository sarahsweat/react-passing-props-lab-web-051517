import React, { Component }  from 'react';

import Filter from './Filter';
import FilteredFruitList from './FilteredFruitList.js';

const FruitBasket = (props) => {

    return (
      <div className="fruit-basket">
        <Filter
          filters={props.filters}
          handleChange={props.updateFilterCallback} />
        <FilteredFruitList
          filter={props.currentFilter}
          fruit={props.fruit} />
      </div>
    )
  }
FruitBasket.defaultProps = {
  updateFilterCallback: null,
  filters: null,
  currentFilter: null,
  fruit: null
}
export default FruitBasket;
