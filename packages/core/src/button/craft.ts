import { Settings } from '@/button/settings';
import { ButtonProps } from '@/button/button.props';

export const craft: ButtonProps['craft'] = {
  name: 'LOW_BUTTON',
  displayName: '按钮',
  defaultProps: {
    variant: 'contained',
    children: '按钮',
  },
  related: {
    settings: Settings,
  },
};
