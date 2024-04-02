import { ChangeEvent, useState } from 'react';

export interface FormValues {
  [key: string]: unknown;
}

export const useForm = <T extends FormValues>(initialValue: T) => {
  const [formData, setFormData] = useState<T>(initialValue);

  const clear = () => {
    setFormData(initialValue);
  };

  const handleChange = (
    { target }: ChangeEvent<HTMLInputElement>,
    transformValue: (value: string) => string = (value) => value
  ) => {
    const value = transformValue(target.value);
    setFormData({
      ...formData,
      [target.name]: value,
    });
  };
  const handleTextAreaChange = (
    { target }: ChangeEvent<HTMLTextAreaElement>,
    transformValue: (value: string) => string = (value) => value
  ) => {
    const value = transformValue(target.value);
    setFormData({
      ...formData,
      [target.name]: value,
    });
  };

  return {
    formData,
    handleChange,
    handleTextAreaChange,
    clear,
    setFormData,
  };
};
