import React from 'react';
import { useNode } from '@craftjs/core';
import { TextField } from '@material-ui/core';

export const Settings = () => {
  const {
    actions: { setProp },
    value,
  } = useNode(node => ({
    value: node.data.props.children,
  }));

  return (
    <div>
      <TextField
        label={'名称'}
        value={value}
        onChange={e => setProp(props => (props.children = e.target.value))}
      />
    </div>
  );
};
