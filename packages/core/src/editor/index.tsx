import React, { useState } from 'react';
import { Grid } from '@material-ui/core';
import { Editor as CraftEditor, Frame } from '@craftjs/core';
import { Menu } from '@/editor/menu';
import { Stager } from '@/editor/stager';
import { Setting } from '@/editor/setting';
import { ToolBar } from '@/editor/tool-bar';

export interface EditorContextProps {
  preview: boolean;
  setPreview: React.Dispatch<React.SetStateAction<boolean>>;
}

export const EditorContext = React.createContext<EditorContextProps>({
  preview: false,
  setPreview: boolean => boolean,
});

export const Editor = () => {
  const [preview, setPreview] = useState(false);

  return (
    <EditorContext.Provider value={{ preview, setPreview }}>
      <CraftEditor resolver={{ Stager, ToolBar }}>
        <ToolBar />
        <Grid
          container={true}
          justifyContent={'flex-start'}
          style={{
            borderTop: '1px solid #99999966',
            borderBottom: '1px solid #99999966',
            height: 'calc(100vh - 70px)',
            boxSizing: 'border-box',
          }}>
          <Grid item={true} md={3} lg={3} style={{ height: '100%' }}>
            <Menu />
          </Grid>
          <Grid item={true} md={7} lg={7}>
            <Frame>
              <Stager />
            </Frame>
          </Grid>
          <Grid item={true} md={2} lg={2}>
            <Setting />
          </Grid>
        </Grid>
      </CraftEditor>
    </EditorContext.Provider>
  );
};
