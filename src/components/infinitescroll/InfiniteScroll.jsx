import React, { Component, Fragment } from 'react';
import Loading from '../loading/Loading';

const LIMIT = 20;
const FIRST_PAGE = 0;

const getParams = offset => ({
  limit: LIMIT,
  offset
});

const withInfiniteScroll = WrappedComponent => (

  class WithInfiniteScroll extends Component {

    componentDidMount = () => {
      const { loadData } = this.props;
      window.addEventListener('scroll', this.onScroll, false);
      loadData(getParams(FIRST_PAGE));
    }

    componentWillUnmount = () => {
      window.removeEventListener('scroll', this.onScroll, false);
    }

    onScroll = () => {
      const { isFetching, paging: { offset, limit, total }, loadData } = this.props;
      if ( ( offset + limit < total ) &&
           ( !isFetching ) &&
           ( window.innerHeight + window.scrollY) >= (document.body.offsetHeight - 500) ) {
        loadData(getParams(offset + LIMIT));
      }
    }

    render = () => {
      const { isFetching } = this.props;
      return (
        <Fragment>
          <WrappedComponent { ...this.props } />
          { isFetching && <Loading /> }
        </Fragment>
      );
    }
  }

);

export { withInfiniteScroll };
