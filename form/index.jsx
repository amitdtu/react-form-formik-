import React from 'react';
import {
  EmailInput,
  PasswordInput,
  TextInput,
  NumberInput,
  RangeInput,
  SelectInput,
} from '../../form-elements';
import { useFormik } from 'formik';
import * as yup from 'yup';
import createYupSchema from '../utils';
import { CombinedFields } from './index.styles';
import BaseButton from '../../button';

function Form({
  className,
  SubmitButton,
  form: { formData, button },
  buttonData,
  children,
  ...props
}) {
  const renderFormElements = (formik) => {
    const combineDivs = [];

    const form = formData.map((item, index) => {
      const fieldMap = {
        text: TextInput,
        email: EmailInput,
        password: PasswordInput,
        number: NumberInput,
        range: RangeInput,
        select: SelectInput,
      };
      const Component = fieldMap[item.type];
      const isLast = index !== formData.length - 1;

      let data = {
        ...formik.getFieldProps(item.id),
        key: index,
        id: item.id,
        name: item.id,
        placeholder: item.placeholder,
        label: item.label,
        labelDesc: item.labelDesc,
        value: formik.values && formik.values[item.id],

        isError: formik.touched[item.id] && formik.errors[item.id],
        errorMsg: formik.errors[item.id],
      };

      if (item.type === 'range') {
        data = {
          ...data,
          min: item.type === 'range' && item.min,
          max: item.type === 'range' && item.max,
          step: item.type === 'range' && item.step,
        };
      } else if (item.type === 'select') {
        data = {
          ...data,
          options: item.type === 'select' && item.options,
        };
      }

      if (item.isHalfWidth) {
        combineDivs.push(<Component {...data} />);
        if (isLast) {
          return;
        }
      }

      if (combineDivs.length) {
        return (
          <>
            <CombinedFields>
              {combineDivs && combineDivs.splice(0, combineDivs.length)}
            </CombinedFields>
            {isLast || !item.isHalfWidth ? <Component {...data} /> : null}
          </>
        );
      } else {
        return <Component {...data} />;
      }
    });

    return form;
  };

  const validationSchema = () => {
    const yepSchema = formData.reduce(createYupSchema, {});
    // console.log(yepSchema);
    return yup.object().shape(yepSchema);
  };

  const initialValues = {};
  formData.forEach((item) => {
    initialValues[item.id] = item.value || '';
  });

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      props.onSubmit(values);
    },
  });


  return (
    <form className={className} onSubmit={formik.handleSubmit}>
      {renderFormElements(formik)}
      {children}
      <BaseButton {...button} disabled={!(formik.isValid && formik.dirty)} />
    </form>
  );
}

export default Form;
