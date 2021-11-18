import React from 'react';
import { Button as MaterialButton } from '@material-ui/core';
import { useEditor } from '@craftjs/core';
import { Group as LowGroup } from '@/group';

export const MenuGroup = () => {
  const { connectors } = useEditor();

  return (
    <MaterialButton
      variant={'outlined'}
      fullWidth={true}
      ref={ref =>
        connectors.create(ref as unknown as HTMLDivElement, <LowGroup />)
      }>
      组
    </MaterialButton>
  );
};
