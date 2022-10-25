import { readFileSync } from "fs";
import { inject, injectable, postConstruct } from "inversify";
import matter from 'gray-matter';

import { join } from "path";
import { SectionMetadata } from "../types";
import { SectionEntryProvider } from "./EntryProvider";


const safeJoin = (...args) => join(...args) // .replace(new RegExp('\\\\', 'g'), '/')

@injectable()
export class SectionMetadataProvider {

    @inject('SubSectionRoot')
    private subSectionRoot: string;

    @inject(SectionEntryProvider)
    entryProvider: SectionEntryProvider;

    private metadataPath: string;
    metadata: SectionMetadata

    @postConstruct()
    init() {
        this.metadataPath = safeJoin(this.subSectionRoot, 'section.json')
        this.metadata = this.getMetadata()
    }

    getIndexMeta() {
        const indexPath =
            this.entryProvider.entries.includes('index.md')
                ? safeJoin(this.subSectionRoot, 'index.md')
                : this.entryProvider.entries.includes('index.mdx')
                    ? safeJoin(this.subSectionRoot, 'index.mdx')
                    : null

        if (indexPath) {
            const indexContent = readFileSync(indexPath, 'utf-8')
            const indexMeta = matter(indexContent)
            return indexMeta.data
        }

        return {}
    }

    getSectionMeta() {
        const hasSectionFile =
            this.entryProvider.entries.includes('section.json')

        if (hasSectionFile) {
            return JSON.parse(readFileSync(this.metadataPath, 'utf-8'))
        }

        return {}
    }

    protected getMetadata() {
        let meta: any = {
            ...this.getSectionMeta(),
            ...this.getIndexMeta(),
        }

        return meta as SectionMetadata
    }
}