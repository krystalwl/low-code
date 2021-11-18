import React, { useEffect } from 'react';
import { useEditor, useNode } from '@craftjs/core';
import { Grid } from '@material-ui/core';

const DelBtn = ({ id }: { id: string }) => {
  const { actions } = useEditor();

  return <div onClick={() => actions.delete(id)}>删除</div>;
};

const CopyBtn = () => <div>复制</div>;
const ActionContainer = ({ id }: { id: string }) => (
  <Grid
    container={true}
    style={{
      position: 'absolute',
      width: 80,
      padding: '3px 0',
      fontSize: 12,
      right: 0,
      bottom: 0,
      backgroundColor: '#409eff',
      textAlign: 'center',
      color: '#fff',
    }}>
    <Grid item={true} xs={true}>
      <DelBtn id={id} />
    </Grid>
    <Grid item={true} xs={true}>
      <CopyBtn />
    </Grid>
  </Grid>
);

export const Editable: React.FC = ({ children }) => {
  const {
    id,
    connectors: { connect, drag },
    selected,
    hovered,
  } = useNode(node => ({
    selected: node.events.selected,
    hovered: node.events.hovered,
  }));

  const {
    actions: { selectNode },
    preview,
  } = useEditor(state => ({
    preview: state.options.enabled,
  }));

  useEffect(() => {
    selectNode(id);
  }, [id]);

  const focused = selected || hovered;

  const style: React.CSSProperties = {
    position: 'relative',
    padding: '20px 10px',
    borderColor: focused ? '#409eff' : '#99999966',
    borderStyle: focused ? 'solid' : 'dashed',
    borderWidth: '1px',
  };

  return preview ? (
    <div ref={dom => connect(drag(dom as HTMLDivElement))} style={style}>
      {children}
      {selected && <ActionContainer id={id} />}
    </div>
  ) : (
    <>{children}</>
  );
};
