import React, { FC, ReactElement, ReactNode } from "react";

import styles from "./styles.module.scss";


export type DefinitionProps = {
    title?: string;
    children: React.ReactNode;
}

export const Definition: FC<DefinitionProps> = ({ title, children }) => {
    // title to lowercase, replace whitespace with -
    const href = title?.toLowerCase().replace(/\s/g, '-');
    const content = <>
        <a href={`#${href}`}><h2 id={href} className={styles.title}>{title}</h2></a>
        <div className={styles.content} style={{ display: title ? 'block' : 'inline' }}>{children}</div>
    </>

    return <aside className={styles.definition}>
        {content}
    </aside>
}