import { mkMenuItem } from './utils';

export default [
    mkMenuItem('scripts'),
    mkMenuItem('engine'),
    mkMenuItem('mods'),
    mkMenuItem('tools'),
    mkMenuItem('guides'),
    {
        to: `/blog`,
        position: 'right',
        label: 'news',
    },
    {
        href: 'https://github.com/anomaly-mods/docs',
        position: 'right',
        className: 'header-github-link',
        'aria-label': 'GitHub repository',
    },
]