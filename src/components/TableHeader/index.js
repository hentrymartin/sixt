import React from 'react';
import './TableHeader.css';

const TableHeader = (props) => {
  return (
    <div className="table-header">
      <div className="table-header__checkbox">
        <input
          type="checkbox"
          onChange={props.onCheck.bind(this, props.isChecked)}
          checked={props.isChecked}
        />
      </div>
      {
        props.header.map((header, index) => {
          return (
            <div key={index} className="table-header__column">
              {header.name}
            </div>
          );
        })
      }
    </div>
  );
};

export default TableHeader;
