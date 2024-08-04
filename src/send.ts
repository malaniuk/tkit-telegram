import { chatId, telegram } from './internal';

export const send = (message: string) =>
  telegram.sendMessage(chatId, message, { parse_mode: 'HTML' });
