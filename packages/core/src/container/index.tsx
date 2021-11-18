import React, { LegacyRef } from 'react';
import { useNode, useEditor } from '@craftjs/core';
import { Grid } from '@material-ui/core';

export const Container: React.FC = ({ children }) => {
  const {
    connectors: { connect },
  } = useNode();
  const {
    query: {
      history: { canUndo },
    },
  } = useEditor();

  return (
    <div
      style={{ height: '100%' }}
      ref={connect as unknown as LegacyRef<HTMLDivElement>}>
      {!canUndo() ? (
        <Grid
          style={{ height: '100%' }}
          container={true}
          justifyContent={'center'}
          alignItems={'center'}
          direction={'column'}>
          从左边菜单拖拽组件到画布中
        </Grid>
      ) : (
        children
      )}
    </div>
  );
};
