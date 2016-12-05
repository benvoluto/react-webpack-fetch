import React, { Component } from 'react';

import getData from '../util/get-data';
import ItemList from '../components/item/item-list';

// github-hosted json
const url = 'https://benvoluto.github.io/birds.json';

class List extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      loading: true,
    };
  }

  componentDidMount() {
    getData(url)
      .then((dataResponse) => {
        // sample data from github-hosted json
        this.setState({
          data: dataResponse.birds,
          loading: false,
        });
      });
  }

  render() {
    return (
      <ItemList
        loading={this.state.loading}
        items={this.state.data}
      />
    );
  }
}

export default List;
