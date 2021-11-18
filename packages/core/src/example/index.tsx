import React, { LegacyRef } from 'react';
import { useNode, Editor, Frame, Element } from '@craftjs/core';

const Text: React.FC = ({ children }) => {
  const {
    connectors: { connect, drag },
  } = useNode();

  return (
    <div ref={dom => connect(drag(dom as HTMLDivElement))}>{children}</div>
  );
};

const Card: React.FC = ({ children }) => {
  const {
    connectors: { connect },
  } = useNode();

  return (
    <div
      style={{ border: '1px solid #000', margin: 10, padding: 20 }}
      ref={connect as unknown as LegacyRef<HTMLDivElement>}>
      {children}
    </div>
  );
};

export const Example = () => (
  <Editor>
    <Frame>
      <div>
        <Element id={'WORD1'} is={Card} canvas={true}>
          <Text>文字一</Text>
        </Element>
        <Element id={'WORD2'} is={Card} canvas={true}>
          <Text>文字二</Text>
        </Element>
      </div>
    </Frame>
  </Editor>
);
