const { cli } = require('tasksfile')


import { ensureDiscussions } from './ensureDiscussions';
import { extractAPI } from './extractAPI';

cli({
    ensureDiscussions,
    extractAPI,
})