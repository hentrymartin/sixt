import React from 'react';
import TableHeader from './../TableHeader';
import TableListItem from './../TableListItem';
import './TableView.css';

const TableView = (props) => {
  const header = [
    {
      name: 'Name',
      code: 'name',
    },
    {
      name: 'Email',
      code: 'email',
    },
    {
      name: 'Phone',
      code: 'phone',
    },
    {
      name: 'Address',
      code: 'address',
    },
  ];
  return (
    <div className="table">
      <TableHeader
        header={header}
        isChecked={props.isCheckAll}
        onCheck={props.onCheckAll}
      />
      <TableListItem
        header={header}
        rows={props.rows}
        onChange={props.onChange}
        onChecked={props.onCheckRow}
      />
    </div>
  );
};

export default TableView;
