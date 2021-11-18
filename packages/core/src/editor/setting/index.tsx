import React from 'react';
import { useEditor } from '@craftjs/core';
import { Grid } from '@material-ui/core';

export const Setting = () => {
  const { selected } = useEditor(state => {
    const currentNodeId = state.events.selected;
    let currentSelected;

    if (currentNodeId) {
      currentSelected = {
        id: currentNodeId,
        name: state.nodes[currentNodeId].data.name,
        settings: state?.nodes[currentNodeId]?.related?.settings,
      };
    }

    return {
      selected: currentSelected,
    };
  });

  return (
    <div
      style={{
        padding: '20px',
        height: '100%',
        boxSizing: 'border-box',
        borderLeft: '1px solid #99999966',
        borderRight: '1px solid #99999966',
      }}>
      {selected?.settings ? (
        <div>{React.createElement(selected?.settings)}</div>
      ) : (
        <Grid
          style={{ height: '100%' }}
          container={true}
          justifyContent={'center'}
          alignItems={'center'}
          direction={'column'}>
          请选择一个组件设置属性
        </Grid>
      )}
    </div>
  );
};
