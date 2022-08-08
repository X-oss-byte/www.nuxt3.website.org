import { h } from 'vue';

const Icon = (props, context) => {
  const svg = require(`../assets/images/${props.path}.svg`).default;
  return h('span', { ...context.attrs, class: 'common-icon' }, [
    h(svg, { class: 'h-[inherit] w-[inherit]' }, [h(svg)]),
  ]);
};

Icon.props = {
  path: {
    type: String,
    required: true,
  },
  width: {
    type: String,
    default: '',
  },
  height: {
    type: String,
    default: '',
  },
  size: {
    type: String,
    default: '',
  },
};

export default Icon;
