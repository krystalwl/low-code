import { Settings } from '@/group/settings';
import { GroupProps } from '@/group/group.props';

export const craft: GroupProps['craft'] = {
  name: 'LOW_GROUP',
  displayName: '组',
  defaultProps: {
    span: 12,
  },
  related: {
    settings: Settings,
  },
};
