import { useEffect, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { useTable } from 'react-table';
import { fetchUsers } from 'store/users/slice';

import useAppDispatch from 'hooks/useAppDispatch/useAppDispatch';
import { columns } from '../../utils/table';
import { Wrapper, Table, Tr, Th, Td } from './UserTable.styled';
import { getUsers } from 'store/users/selectors';
import AppLoader from 'components/AppLoader';

export const UserTable = () => {
  const dispatch = useAppDispatch();

  const users = useSelector(getUsers);

  const tableColumns = useMemo(() => columns, []);
  const tableData = useMemo(() => users, [users]);

  const { headerGroups, rows, getTableProps, getTableBodyProps, prepareRow } = useTable({
    columns: tableColumns,
    data: tableData,
  });

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  if (!users.length) {
    return <AppLoader />;
  }

  return (
    <Wrapper>
      <Table {...getTableProps()} cellSpacing="0">
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <Th key={column.id}>{column.render('Header')}</Th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);

            return (
              <Tr {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <Td {...cell.getCellProps()}>{cell.render('Cell')}</Td>
                ))}
              </Tr>
            );
          })}
        </tbody>
      </Table>
    </Wrapper>
  );
};

export default UserTable;
