import { ICustomInputProps } from "@/types/input";

export const fields: ICustomInputProps[] = [
    {
      id: 'first-name',
      name: 'first_name',
      placeholder: 'Enter first name',
      label: 'First Name',
      type: 'text',
    },
    {
      id: 'last-name',
      name: 'last_name',
      placeholder: 'Enter last name',
      label: 'Last Name',
      type: 'text',
    },
    {
      id: 'gender',
      name: 'gender',
      label: 'Gender',
      options: [
        {
          label: 'Male',
          value: 'male',
        },
        {
          label: 'Female',
          value: 'female',
        },
      ],
      type: 'select',
    },
    {
      id: 'age',
      name: 'age',
      placeholder: 'Enter age',
      label: 'Age',
      type: 'number',
    },
    {
      id: 'occupation',
      name: 'occupation',
      placeholder: 'Enter occupation',
      label: 'Occupation',
      type: 'text',
    },
    {
      id: 'interests',
      name: 'interests',
      placeholder: 'Enter interests',
      label: 'Interests',
      type: 'text',
    },
    {
      id: 'email',
      name: 'email',
      placeholder: 'Enter email',
      label: 'Email',
      type: 'email',
    },
    {
      id: 'country',
      name: 'country',
      label: 'Country',
      options: [
        {
          label: 'India',
          value: 'india',
        },
        {
          label: 'Brazil',
          value: 'brazil',
        },
        {
          label: 'USA',
          value: 'usa',
        },
      ],
      type: 'select',
    },
    {
      id: 'city',
      name: 'city',
      placeholder: 'Enter city',
      label: 'City',
      type: 'text',
    },
    {
      id: 'postalcode',
      name: 'postalcode',
      placeholder: 'Enter postal code',
      label: 'Postal Code',
      type: 'number',
    },
  ];