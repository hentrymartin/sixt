import {
  ON_CHANGE,
  ON_TOGGLE_ALL,
  ON_TOGGLE_ROW,
  ON_VALIDATE,
} from './../actions';

export default function AppReducer(state = {
  rows: [{
    name: {
      value: '',
      error: false,
    },
    email: {
      value: '',
      error: false,
    },
    phone: {
      value: '',
      error: false,
    },
    address: {
      value: '',
      error: false,
    },
  },{
    name: {
      value: '',
      error: false,
    },
    email: {
      value: '',
      error: false,
    },
    phone: {
      value: '',
      error: false,
    },
    address: {
      value: '',
      error: false,
    },
  }],
  isCheckAll: false,
}, action) {
  switch(action.type) {
    case ON_CHANGE:
      console.log(action.rows);
      return Object.assign({}, state, {
        rows: state.rows.map((item, index) => {
          if (index !== action.index) return item;
          item[action.property].value = action.value;
          return item;
        }),
      });
    case ON_TOGGLE_ALL:
      const isCheckAll = !action.isChecked;
      return Object.assign({}, state, {
        isCheckAll,
        rows: state.rows.map((item) => {
          item.isChecked = isCheckAll;
          return item;
        }),
      });
    case ON_TOGGLE_ROW:
      const rows = state.rows.map((item, index) => {
        if (index !== action.index) return item;
        item.isChecked = !item.isChecked;
        return item;
      });
      const rowNotToggled = rows.filter((item) => {
        return !item.isChecked;
      });
      return Object.assign({}, state, {
        isCheckAll: rowNotToggled.length === 0,
        rows,
      });
    case ON_VALIDATE:
      return Object.assign({}, state, {
        rows: state.rows.map((row) => {
          row.name.error = !!!row.name.value;
          row.email.error = !!!row.email.value;
          row.phone.error = !!!row.phone.value;
          row.address.error = !!!row.address.value;
          return row;
        }),
      }); 
    default:
      return state;
  }
}