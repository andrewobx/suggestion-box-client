import * as jwt from 'jsonwebtoken';
import { LOCAL_STORAGE } from '../constants';

export const isTokenValid = () => {
  const token = localStorage.getItem(LOCAL_STORAGE.ACCESS_TOKEN);
  return token && !!jwt.decode(token);
};

export const isTokenExpired = () => {
  const token = localStorage.getItem(LOCAL_STORAGE.ACCESS_TOKEN);
  if (isTokenValid()) {
    const expiry = jwt.decode(token).exp;
    const now = new Date();
    return now.getTime() > expiry * 1000;
  }
  return true;
};

export const isTokenAboutToExpire = () => {
  const accessToken = localStorage.getItem(LOCAL_STORAGE.ACCESS_TOKEN);
  if (!accessToken) return false;
  const now = new Date();
  const nowInSeconds = now.getTime() / 1000;
  const tokenExpireInSeconds = jwt.decode(accessToken).exp;
  const minutesTillExpire = (tokenExpireInSeconds - nowInSeconds) / 60;
  return minutesTillExpire >= 0 && minutesTillExpire < 10;
};
