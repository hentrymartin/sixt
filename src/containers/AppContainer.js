import AppWrapper from './../components/AppWrapper';
import {
  onChange,
  onCheckAll,
  onCheckRow,
  onValidate,
} from './../actions';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  rows: state.AppReducer.rows,
  isCheckAll: state.AppReducer.isCheckAll,
});

const mapDispatchToProps = dispatch => ({
  onChange: (property, index, event) => {
    dispatch(onChange(property, index, event.target.value));
  },
  onCheckAll: (isChecked) => {
    console.log(isChecked, 'isChecked');
    dispatch(onCheckAll(isChecked));
  },
  onCheckRow: (index) => {
    dispatch(onCheckRow(index));
  },
  onValidate: () => {
    dispatch(onValidate());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(AppWrapper);
