import React from 'react';
import TableView from './../TableView';
import './AppWrapper.css';

const AppWrapper = (props) => {
  const onChange = (property, index, event) => {
    props.onChange(property, index, event);
  };

  return (
    <div className="app-wrapper">
      <TableView
        rows={props.rows}
        onChange={onChange}
        isCheckAll={props.isCheckAll}
        onCheckAll={props.onCheckAll}
        onCheckRow={props.onCheckRow}
      />
      <button
        className="app-wrapper__validate-btn"
        onClick={props.onValidate}
      >
        Validate
      </button>
    </div>
  );
};

export default AppWrapper;
