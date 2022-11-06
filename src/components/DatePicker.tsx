import DateView from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Field, ErrorMessage } from 'formik';
import TextError from './TextError';

function DatePicker(props: any) {
  const { label, name, ...rest } = props;
  return (
    <div className="form-control">
      <label htmlFor={name}>{label}</label>
      <Field name={name}>
        {({ form, field }: { form: any; field: any }) => {
          const { setFieldValue } = form;
          const { value } = field;
          return (
            <DateView
              id={name}
              {...field}
              {...rest}
              selected={value}
              onChange={(val: any) => {
                setFieldValue(name, val);
              }}
            />
          );
        }}
      </Field>
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
}

export default DatePicker;
