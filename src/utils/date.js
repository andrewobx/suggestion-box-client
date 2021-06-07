import moment from 'moment';

export const getRelativeTimeFromDate = date => {
  return moment(date).fromNow();
};
