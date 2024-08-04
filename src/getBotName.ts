import { telegram } from './internal';

export const getBotName = async () => {
  const me = await telegram.getMe();

  return me.username;
};
