import React from 'react';
import BenchIndexItem from './bench_index_item';

class BenchIndex extends React.Component {

  componentDidMount () {
    this.props.fetchBenches();
  }

  render () {
    const benches = Object.keys(this.props.benches).map(benchId => {
      return (<BenchIndexItem key={benchId} bench={this.props.benches[benchId]} />);
    });

    return (
      <div>
        <ul>
          {benches}
        </ul>
      </div>
    );
  }
}

export default BenchIndex;