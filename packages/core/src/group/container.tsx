import React, { LegacyRef } from 'react';
import { useNode } from '@craftjs/core';

export const Container: React.FC = ({ children }) => {
  const {
    connectors: { connect },
  } = useNode();

  return (
    <div
      ref={connect as unknown as LegacyRef<HTMLDivElement>}
      style={{ width: '100%' }}>
      {children}
    </div>
  );
};
