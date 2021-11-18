import React from 'react';
import { useNode } from '@craftjs/core';

export const Text: React.FC = ({ children }) => {
  const {
    connectors: { connect, drag },
  } = useNode();

  return (
    <div ref={dom => connect(drag(dom as HTMLDivElement))}>{children}</div>
  );
};
