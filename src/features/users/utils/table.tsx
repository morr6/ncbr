import { Cell, Column } from 'react-table';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import { colors } from 'styles/constants';
import { User } from 'store/users/reducers';

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
    Header: 'Adult',
    accessor: 'isAdult',
    // @ts-ignore
    Cell: (cell: Cell<User>) =>
      cell.value ? <CheckIcon sx={{ color: colors.azure }} /> : <CloseIcon />,
  },
];

export const MOCK_DATA = [
  {
    id: 1,
    name: 'John',
    surname: 'Doe',
    dateOfBirth: '1990-05-01',
    city: 'New York',
    street: 'Main Street',
    isAdult: true,
  },
  {
    id: 2,
    name: 'Jane',
    surname: 'Doe',
    dateOfBirth: '1995-02-14',
    city: 'Los Angeles',
    street: 'Broadway',
    isAdult: true,
  },
  {
    id: 3,
    name: 'Bob',
    surname: 'Smith',
    dateOfBirth: '1984-11-23',
    city: 'Chicago',
    street: 'Michigan Avenue',
    isAdult: true,
  },
  {
    id: 4,
    name: 'Emily',
    surname: 'Jones',
    dateOfBirth: '2007-09-03',
    city: 'Houston',
    street: 'Fannin Street',
    isAdult: false,
  },
  {
    id: 5,
    name: 'David',
    surname: 'Lee',
    dateOfBirth: '1993-07-08',
    city: 'San Francisco',
    street: 'Market Street',
    isAdult: true,
  },
  {
    id: 6,
    name: 'Anna',
    surname: 'Taylor',
    dateOfBirth: '1998-01-19',
    city: 'Miami',
    street: 'Collins Avenue',
    isAdult: true,
  },
  {
    id: 7,
    name: 'Tom',
    surname: 'Wilson',
    dateOfBirth: '1989-12-07',
    city: 'Seattle',
    street: 'Pike Street',
    isAdult: true,
  },
  {
    id: 8,
    name: 'Linda',
    surname: 'Davis',
    dateOfBirth: '1977-04-26',
    city: 'Boston',
    street: 'Beacon Street',
    isAdult: true,
  },
  {
    id: 9,
    name: 'Mark',
    surname: 'Brown',
    dateOfBirth: '2005-08-12',
    city: 'Philadelphia',
    street: 'Market Street',
    isAdult: false,
  },
  {
    id: 10,
    name: 'Sarah',
    surname: 'Williams',
    dateOfBirth: '1996-03-30',
    city: 'Washington D.C.',
    street: 'Pennsylvania Avenue',
    isAdult: true,
  },
];
