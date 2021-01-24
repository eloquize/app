/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { useTable } from 'react-table';

function Cell(props) {
  const { cell } = props;
  return (
    <td {...cell.getCellProps()}>
      {cell.render('Cell')}
    </td>
  );
}

function Row(props) {
  const { row, prepareRow } = props;
  prepareRow(row);
  return (
    <tr {...row.getRowProps()}>
      {row.cells.map((cell) => <Cell cell={cell} />)}
    </tr>
  );
}

function Rows(props) {
  const { rows, prepareRow } = props;
  return rows.map((row) => <Row row={row} prepareRow={prepareRow} />);
}

function ColHeader(props) {
  const { column } = props;
  return (
    <th {...column.getHeaderProps()}>
      {column.render('Header')}
    </th>
  );
}

function HeaderRow(props) {
  const { headerGroup } = props;
  return (
    <tr {...headerGroup.getHeaderGroupProps()}>
      {headerGroup.headers.map((column) => <ColHeader column={column} />)}
    </tr>
  );
}

function TableHead(props) {
  const { headerGroups } = props;
  return headerGroups.map((headerGroup) => <HeaderRow headerGroup={headerGroup} />);
}

export default function Table(props) {
  const { display, cols } = props;
  const data = React.useMemo(() => display, []);
  const columns = React.useMemo(() => cols, []);
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data });

  return (
    <table {...getTableProps()}>
      <thead>
        <TableHead headerGroups={headerGroups} />
      </thead>
      <tbody {...getTableBodyProps()}>
        <Rows rows={rows} prepareRow={prepareRow} />
      </tbody>
    </table>
  );
}