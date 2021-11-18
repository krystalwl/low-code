import React from 'react';
import { Button as MaterialButton } from '@material-ui/core';
import { craft } from '@/button/craft';
import { ButtonProps } from '@/button/button.props';
import { Editable } from '@/components/editable';

export const Button: ButtonProps = ({ children, ...rest }) => (
  <Editable>
    <MaterialButton {...rest}>{children}</MaterialButton>
  </Editable>
);

Button.craft = craft;
