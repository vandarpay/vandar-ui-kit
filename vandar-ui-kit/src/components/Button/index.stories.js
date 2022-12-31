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
      options: ["filled", "inlined", "outlined"],
    },
    iconType: {
      control: 'select',
      options: ["line" , "fill"],
    },
    beforeIcon: {
      control: 'string'
    },
    afterIcon: {
      control: 'string'
    }
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
  type: 'filled',
  color: 'teal',
  iconType: 'line',
  beforeIcon: 'arrow-left',
  afterIcon: 'arrow-right',
  disabled: false,
  loading: false,
  label: 'متن دکمه',
};