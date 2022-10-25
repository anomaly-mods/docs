import React from 'react';
// Import the original mapper
import MDXComponents from '@theme-original/MDXComponents';
import { Callout } from '@site/src/components/Callout';
import { Definition } from '../components/Definition';
import { Discussion } from '../components/Discussion';
import { Snip } from '../components/Snip';
import { Funcs } from '../components/Funcs';

export default {
    // Re-use the default mapping
    ...MDXComponents,
    // Map the "highlight" tag to our <Highlight /> component!
    // `Highlight` will receive all props that were passed to `highlight` in MDX
    callout: Callout,
    definition: Definition,
    discussion: Discussion,
    snip: Snip,
    funcs: Funcs,
};