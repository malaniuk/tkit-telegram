import { send } from './send';

export const sendError = (key: string, obj: object) =>
  send(`<b>❌ ERROR: ${key}</b>\n${JSON.stringify(obj, null, 2)}`);

export const sendUnhandledError = (err: Error) =>
  send(`<b>❌ ERROR: </b>${err.message}`);
