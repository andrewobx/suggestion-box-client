const colors = {
  primary: '#0060a8',
  secondary: '#43b1fe',
  default: '#fff',
};

const viewports = {
  smartphone: '360px',
  tablet: '720px',
  desktop: '1280px',
};

const forms = {
  labelColor: colors.light,
  errorColor: colors.danger,
};

const theme = Object.freeze({
  colors,
  forms,
  viewports,
});

export default theme;
