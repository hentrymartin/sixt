import React from 'react';
import './TableListItem.css';

const TableListItem = (props) => {
  return (
    <div className="table-list">
    {
      props.rows.map((row, index) => {
        console.log(row, 'row');
        return (
          <div key={index} className="table-list__item">
            <div className="table-list__item__checkbox">
              <input
                type="checkbox"
                onChange={props.onChecked.bind(this, index)}
                checked={row.isChecked}
              />
            </div>
            {
              props.header.map((header, innerIndex) => {
                return (
                  <div key={innerIndex} className="table-list__item__column">
                    <input type="text" value={row[header.code].value} onChange={props.onChange.bind(this, header.code, index)}/>
                    {
                      row[header.code].error &&
                      <div className="table-list__item__column__error-message">Please fill this field</div>
                    }
                  </div>
                );
              })
            }
          </div>
        );
      })
    }
    </div>
  );
};

TableListItem.defaulProps = {
  onChange: () => {},
};

export default TableListItem;
