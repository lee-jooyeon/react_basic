import { setupWorker } from 'msw';
import { handlers } from './handlers';
import {domainApiHandlers} from './admin';
import {handler as loginHandler} from './login';
// This configures a Service Worker with the given request handlers.
export const worker = setupWorker(...handlers, ...domainApiHandlers, ...loginHandler);
