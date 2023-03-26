import { LoadingButton } from '@mui/lab';
import Checkbox from '@mui/material/Checkbox';

import { TextField, Select, DatePicker } from 'components';
import { Form, Label, RowWrapper } from './AddUserForm.styled';
import useAddUserForm from 'features/users/hooks/useAddUserForm';
import options from 'features/users/utils/formSelectOptions';

export const AddUserForm = () => {
  const {
    values,
    isSubmitting,
    errors,
    nameError,
    surnameError,
    cityError,
    streetError,
    handleSubmit,
    handleChange,
    handleBlur,
    setFieldValue,
  } = useAddUserForm();

  return (
    <Form onSubmit={handleSubmit}>
      <TextField
        name="name"
        placeholder="Name"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.name}
        errorMessage={nameError}
      />

      <TextField
        name="surname"
        placeholder="Surname"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.surname}
        errorMessage={surnameError}
      />

      <DatePicker value={values.dateOfBirth} name="dateOfBirth" onChange={setFieldValue} />

      <TextField
        name="street"
        placeholder="Street"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.street}
        errorMessage={streetError}
      />

      <RowWrapper>
        <Select
          label="City"
          options={options}
          onChange={(value) => setFieldValue('city', value)}
          errorMessage={cityError}
        />

        <Label>
          <Checkbox
            value={values.dateOfBirth}
            name="isActive"
            onChange={(event) => setFieldValue('isActive', event.target.checked)}
          />
          <span>Active</span>
        </Label>
      </RowWrapper>

      <LoadingButton
        loading={isSubmitting}
        disabled={Object.keys(errors).length !== 0}
        type="submit"
        variant="contained"
      >
        Add user
      </LoadingButton>
    </Form>
  );
};

export default AddUserForm;
