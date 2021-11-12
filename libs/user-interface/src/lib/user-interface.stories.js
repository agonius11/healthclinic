import UserInterface from './user-interface';

export default {
  component: UserInterface,
  title: 'UserInterface',
};

const Template = (args) => <UserInterface {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
