import React, { useMemo } from 'react';
import { Grid } from '@material-ui/core';
import { Element } from '@craftjs/core';
import { GroupProps } from '@/group/group.props';
import { craft } from '@/group/craft';
import { Container } from '@/group/container';
import { Editable } from '@/components/editable';

const useChildrens = (children: JSX.Element) =>
  useMemo(() => {
    if (!children) {
      return [];
    }

    if (!Array.isArray(children)) {
      return [children];
    }

    return children;
  }, [children]);

export const Group: GroupProps = ({ children, span }) => {
  const childrens = useChildrens(children as JSX.Element);

  return (
    <Editable>
      <Grid container={true}>
        <Element is={Container} id={'GROUP_ITEM'} canvas={true}>
          {childrens.length ? (
            <Grid container={true}>
              {childrens.map(child => (
                <Grid key={child.key} item={true} xs={span} md={span} lg={span}>
                  {child}
                </Grid>
              ))}
            </Grid>
          ) : (
            '拖一个组件过来'
          )}
        </Element>
      </Grid>
    </Editable>
  );
};

Group.craft = craft;
