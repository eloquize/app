import React from 'react';
import Table from './Table';
import { mockedHistory, headers } from '../utils/table';

export default function Stats() {
  return (
    <Table display={mockedHistory} cols={headers} />
  );
}
