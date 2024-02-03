import { inputState } from '@/atoms/input';
import {useState} from 'react';
import { useRecoilState } from 'recoil';

export default function useInput<
  T extends HTMLInputElement | HTMLTextAreaElement,
>() {
  const [value, setValue] = useRecoilState(inputState);

  const reset = () => {
    setValue('');
  };

  const handleChange = (e: React.ChangeEvent<T>) => {
    setValue(e.currentTarget.value);
  };

  return {value, handleChange, reset, setValue};
}
