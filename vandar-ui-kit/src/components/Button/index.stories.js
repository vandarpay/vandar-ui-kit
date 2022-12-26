import vanButton from './index.vue';

export default {
  title: 'Components/button',
  component: vanButton,
  // argTypes
  argTypes: {
    onClick: {},
    color: {
      control: 'select',
      options: ["teal", "neutral", "red", "white"],
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
    type: {
      control: 'select',
      options: ["fill", "ghost", "outlined"],
    },
  },
};

// templates
const Template = (args) => ({
  // Components 
  components: {
    vanButton
  },
  //  map
  setup() {
    return {
      args
    };
  },
  // bound
  template: '<van-button v-bind="args" />',
});

export const button = Template.bind({});
// args
button.args = {
  size: 'medium',
  type: 'fill',
  color: 'teal',
  disabled: false,
  loading: false,
  label: 'متن دکمه',
};