import React from 'react';
import NavBar from './NavBar';
import Table from './Table';
import { mockedHistory, headers } from '../utils/table';

export default function Stats() {
  return (
    <div>
      <NavBar />
      <Table display={mockedHistory} cols={headers} />
    </div>
  );
}
