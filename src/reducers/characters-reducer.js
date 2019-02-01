import update from 'immutability-helper';
import * as types from '../actions/action-types';

const initialState = {
  characters: [],
  paging: {
    limit: 0,
    offset: 0,
    total: 0
  },
  isFetching: true
};

export default (state = initialState, action) => {
  switch (action.type) {
  case types.START_GET_CHARACTERS: {
    return update(state, {
      isFetching: {$set: true}
    });
  }
  case types.END_GET_CHARACTERS: {
    const { json: { data } } = action;
    if (data.offset === 0) {
      return update(state, {
        characters: {$set: data.results},
        paging: {
          limit: {$set: data.limit},
          offset: {$set: data.offset},
          total: {$set: data.total},
        },
        isFetching: {$set: false}
      });
    }
    return update(state, {
      characters: {$push: data.results},
      paging: {
        limit: {$set: data.limit},
        offset: {$set: data.offset},
        total: {$set: data.total},
      },
      isFetching: {$set: false}
    });
  }
  default: {
    return state;
  }
  }
};
