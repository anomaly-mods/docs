import { mkSection } from './utils';


export default async () => {
    return [
        require.resolve('../plugins/watch-config'),
        require.resolve('docusaurus-plugin-sass'),
        [require.resolve("@cmfcmf/docusaurus-search-local"),
        {
            indexPages: false,
            indexDocs: true,
            indexBlog: false,
        }],
        await mkSection('scripts'),
        await mkSection('engine'),
        await mkSection('mods'),
        await mkSection('tools'),
        await mkSection('guides'),
    ]
}