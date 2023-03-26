import { Cell, CellProps, Column } from 'react-table';
import dayjs from 'dayjs';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';

import { colors } from 'styles/constants';
import { User } from 'store/users/reducers';
import ActionsCell from '../components/ActionsCell';

export const columns: Column<User>[] = [
  {
    Header: 'Name',
    accessor: 'name',
  },
  {
    Header: 'Surname',
    accessor: 'surname',
  },
  {
    Header: 'Date of birth',
    accessor: 'dateOfBirth',
    // @ts-ignore
    Cell: (cell: Cell<User>) => dayjs(cell.value).format('DD-MM-YYYY'),
  },

  {
    Header: 'City',
    accessor: 'city',
  },
  {
    Header: 'Street',
    accessor: 'street',
  },
  {
    Header: 'Active',
    accessor: 'isActive',
    Cell: (cell: CellProps<User>) =>
      cell.value ? <CheckIcon sx={{ color: colors.azure }} /> : <CloseIcon />,
  },
  {
    Header: 'Actions',
    id: 'actions',
    Cell: (props: CellProps<User>) => <ActionsCell {...props} />,
  },
];

export const MOCK_DATA = [
  {
    id: 1,
    name: 'John',
    surname: 'Doe',
    dateOfBirth: new Date('1990-05-01'),
    city: 'New York',
    street: 'Main Street',
    isActive: true,
  },
  {
    id: 2,
    name: 'Jane',
    surname: 'Doe',
    dateOfBirth: new Date('1995-02-14'),
    city: 'Los Angeles',
    street: 'Broadway',
    isActive: true,
  },
  {
    id: 3,
    name: 'Bob',
    surname: 'Smith',
    dateOfBirth: new Date('1984-11-23'),
    city: 'Chicago',
    street: 'Michigan Avenue',
    isActive: true,
  },
  {
    id: 4,
    name: 'Emily',
    surname: 'Jones',
    dateOfBirth: new Date('2007-09-03'),
    city: 'Houston',
    street: 'Fannin Street',
    isActive: false,
  },
  {
    id: 5,
    name: 'David',
    surname: 'Lee',
    dateOfBirth: new Date('1993-07-08'),
    city: 'San Francisco',
    street: 'Market Street',
    isActive: true,
  },
  {
    id: 6,
    name: 'Anna',
    surname: 'Taylor',
    dateOfBirth: new Date('1998-01-19'),
    city: 'Miami',
    street: 'Collins Avenue',
    isActive: true,
  },
  {
    id: 7,
    name: 'Tom',
    surname: 'Wilson',
    dateOfBirth: new Date('1989-12-07'),
    city: 'Seattle',
    street: 'Pike Street',
    isActive: true,
  },
  {
    id: 8,
    name: 'Linda',
    surname: 'Davis',
    dateOfBirth: new Date('1977-04-26'),
    city: 'Boston',
    street: 'Beacon Street',
    isActive: true,
  },
  {
    id: 9,
    name: 'Mark',
    surname: 'Brown',
    dateOfBirth: new Date('2005-08-12'),
    city: 'Philadelphia',
    street: 'Market Street',
    isActive: false,
  },
  {
    id: 10,
    name: 'Sarah',
    surname: 'Williams',
    dateOfBirth: new Date('1996-03-30'),
    city: 'Washington D.C.',
    street: 'Pennsylvania Avenue',
    isActive: true,
  },
];
