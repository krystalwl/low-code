import React from 'react';
import { Button as MaterialButton } from '@material-ui/core';
import { useEditor } from '@craftjs/core';
import { Button as LowButton } from '@/button';

export const MenuButton = () => {
  const { connectors } = useEditor();

  return (
    <MaterialButton
      variant={'outlined'}
      fullWidth={true}
      ref={ref =>
        connectors.create(ref as unknown as HTMLDivElement, <LowButton />)
      }>
      按钮
    </MaterialButton>
  );
};
