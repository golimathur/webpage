import * as React from 'react';
import { ContextualMenu, DefaultButton, IContextualMenuProps, IIconProps } from 'office-ui-fabric-react';

export interface IButtonExampleProps {
  // These are set based on the toggles shown above the examples (not needed in real code)
  disabled?: boolean;
  checked?: boolean;
  
}

const menuProps: IContextualMenuProps = {
  // For example: disable dismiss if shift key is held down while dismissing
  onDismiss: ev => {
    if (ev && ev.shiftKey) {
      ev.preventDefault();
    }
  },
  items: [
    {
      key:  'emailMessage',
      text: 'Email ',
      href: 'https://www.google.com/intl/en-GB/gmail/about/#',
      iconProps: { iconName: 'Mail'},
      
    },

    {
      key: 'calendarEvent',
      text: 'Calendar event',
      iconProps: { iconName: 'Calendar' },
    },
  ],
  directionalHintFixed: true,
};
const addIcon: IIconProps = { iconName: 'Add',};

const buttonStyles = {
  root: {
    float: 'right',
    marginTop: '20px'
  }
}

export const Button: React.FunctionComponent<IButtonExampleProps> = props => {
  const { disabled, checked } = props;

  return (
    <DefaultButton
      text="New item"
      iconProps={addIcon}
      menuProps={menuProps}
     menuAs={_getMenu}
      onMenuClick={_onMenuClick}
     allowDisabledFocus
      disabled={disabled}
      checked={checked}
      styles = {buttonStyles}

      
    />
  );
};

function _getMenu(props: IContextualMenuProps): JSX.Element {
  // Customize contextual menu with menuAs
  return <ContextualMenu {...props} />;
}

function _onMenuClick(ev?: React.SyntheticEvent<any>) {
  console.log(ev);
}

export default Button;