import { useEffect, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { useTable } from 'react-table';
import { useNavigate } from 'react-router-dom';
import { fetchUsers } from 'store/users/slice';

import { useAppDispatch } from 'hooks';
import { getUsers } from 'store/users/selectors';
import { AppLoader } from 'components';
import { columns } from 'features/users/utils/table';
import { Wrapper, Table, Tr, Th, Td, AddUserButton, Title } from './UserTable.styled';
import AppLayout from 'components/AppLayout/AppLayout';

export const UserTable = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const users = useSelector(getUsers);

  const tableColumns = useMemo(() => columns, []);
  const tableData = useMemo(() => users, [users]);

  const { headerGroups, rows, getTableProps, getTableBodyProps, prepareRow } = useTable({
    columns: tableColumns,
    data: tableData,
  });

  const handleAddNewUserClick = () => {
    navigate('/user/0');
  };

  useEffect(() => {
    if (!users.length) {
      dispatch(fetchUsers());
    }
  }, [dispatch]);

  if (!users.length) {
    return <AppLoader />;
  }

  return (
    <AppLayout>
      <Wrapper>
        <Title>Users</Title>

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

        <AddUserButton variant="contained" onClick={handleAddNewUserClick}>
          Add new user
        </AddUserButton>
      </Wrapper>
    </AppLayout>
  );
};

export default UserTable;
