
import React from 'react';
import { BaseToast, ErrorToast } from 'react-native-toast-message';

export const toastConfig = {
  success: (props: any) => (
    <BaseToast
      {...props}
      style={{ borderLeftColor: '#dd9024', backgroundColor: '#000000ff'}}
      contentContainerStyle={{ paddingHorizontal: 15,}}
      text1Style={{ fontSize: 23, fontWeight: 'bold' }}
      text2Style={{ fontSize: 16, color: 'white' }}
    />
  ),
  error: (props: any) => (
    <ErrorToast
      {...props}
      style={{ borderLeftColor: 'red', backgroundColor: '#ffe6e6' }}
      contentContainerStyle={{ paddingHorizontal: 15 }}
      text1Style={{ fontSize: 16, fontWeight: 'bold' }}
      text2Style={{ fontSize: 14, color: 'gray' }}
    />
  ),
};
