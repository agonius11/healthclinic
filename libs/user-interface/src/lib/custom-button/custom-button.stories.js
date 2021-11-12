import CustomButton from './custom-button';

export default {
  component: CustomButton,
  title: 'CustomButton',
  argsTypes: {
    backgroundColor: {
      control: {type: 'color'}
    },
    color: {
      control: 'color',
    },
    alignItems: {
      options: ['center', 'start', 'end'],
      control: { type: 'radio' },
    },
    justifyContent: {
      options: [
        'right',
        'left',
        'flex-end',
        'flex-start',
        'end',
        'start',
        'center',
      ],
      control: { type: 'select' },
    },
    borderColor: {
      control: 'color',
    },
    // alignItems: {
    //   options: [
    //     'flex-start',
    //     'flex-end',
    //     'center',
    //     'space-between',
    //     'space-around',
    //     'stretch',
    //   ],  // alignItems: {
    //   options: [
    //     'flex-start',
    //     'flex-end',
    //     'center',
    //     'space-between',
    //     'space-around',
    //     'stretch',
    //   ],
    //   control: { type: 'select' },
    // },
    //   control: { type: 'select' },
    // },
  }
};

const Template = (args) => <CustomButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title: 'button',
  backgroundColor: 'red',
  color: 'green',
  alignItems: 'center',
  justifyContent: 'center',
  borderColor: 'black',
};
