import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import FormikControl from './FormikControl';

function EnrolmentForm() {
  const dropdownOptions = [
    { key: 'select the course', value: '' },
    { key: 'React', value: 'react' },
    { key: 'Angular', value: 'angular' },
    { key: 'Vue', value: 'vue' },
  ];

  const checkboxOptions = [
    { key: 'HTML', value: 'html' },
    { key: 'CSS', value: 'css' },
    { key: 'JavaScript', value: 'javascript' },
  ];

  const initialValues = {
    email: '',
    bio: '',
    course: '',
    skills: [],
    courseDate: null,
  };

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid Email Format').required('Required'),
    bio: Yup.string().required('Required'),
    course: Yup.string().required('Required'),
    courseDate: Yup.date().required('Required').nullable(),
  });

  const onSubmit = (values: any) => {
    console.log('Form datas:', values);
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => {
        return (
          <Form>
            <FormikControl
              control="input"
              type="email"
              name="email"
              label="Email"
            />
            <FormikControl control="textarea" name="bio" label="Bio" />
            <FormikControl
              control="select"
              name="course"
              label="Course"
              options={dropdownOptions}
            />
            <FormikControl
              control="checkbox"
              name="skills"
              label="Your Skillset"
              options={checkboxOptions}
            />
            <FormikControl
              control="date"
              name="courseDate"
              label="Course Date"
            />
            <button type="submit" disabled={!formik.isValid}>
              Submit
            </button>
          </Form>
        );
      }}
    </Formik>
  );
}

export default EnrolmentForm;
