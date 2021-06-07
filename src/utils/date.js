import moment from 'moment';

export const getRelativeTimeFromDate = date => {
  return moment(date).fromNow();
};

export const convertDate = date => {
  return moment(date).format('MMMM do, YYYY [at] h:mm a');
};
