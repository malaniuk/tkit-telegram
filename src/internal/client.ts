import { Telegraf } from 'telegraf';
import { ParseMode } from 'telegraf/types';

const token = process.env.TELEGRAM_TOKEN as string;

const opts = {
  handlerTimeout: 90 * 1000,
  telegram: { webhookReply: false },
};

export const telegram = new Telegraf(token, opts).telegram;
export { ParseMode };
