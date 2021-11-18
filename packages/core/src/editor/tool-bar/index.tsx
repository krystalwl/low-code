import React from 'react';
import { Grid, Button, Switch, FormControlLabel } from '@material-ui/core';
import { useEditor } from '@craftjs/core';

export const ToolBar = () => {
  const {
    actions: {
      history: { undo },
      setOptions,
    },
    enabled,
  } = useEditor(state => ({
    enabled: state.options.enabled,
    nodes: state.nodes,
    resolver: state.options.resolver,
  }));

  return (
    <Grid
      container={true}
      spacing={2}
      style={{ height: 50, marginBottom: 20 }}
      alignItems={'center'}>
      <Grid item={true}>
        <Button variant={'outlined'} onClick={undo}>
          撤销
        </Button>
      </Grid>
      <Grid item={true}>
        <FormControlLabel
          control={
            <Switch
              onChange={(event, checked) =>
                setOptions(props => (props.enabled = checked))
              }
            />
          }
          label={enabled ? '最终展示' : '开始编辑'}
        />
      </Grid>
    </Grid>
  );
};
