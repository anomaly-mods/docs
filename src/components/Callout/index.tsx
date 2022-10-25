import React, { FC, ReactElement, ReactNode } from "react";

import styles from "./styles.module.scss";


export type CalloutProps = {
    title?: string;
    children: React.ReactNode;
}

export const Callout: FC<CalloutProps> = ({ title, children }) => {
    // get children count
    const childCount = React.Children.count(children);

    let content;

    if (title) {
        content = <>
            <span className={styles.title}>{title}</span>
            <div className={styles.content} style={{ display: title ? 'block' : 'inline' }}>{children}</div>
        </>
    } else {
        // pop first child
        const firstChild = React.Children.toArray(children)[0];

        if (typeof firstChild === "object") {
            // set title to first child text
            title = (firstChild as ReactElement).props?.children;
            // remove first child from children
            children = React.Children.toArray(children).slice(1);
            content = <>
                <span>{title}</span>
                <div className={styles.content} style={{ display: title ? 'block' : 'inline' }}>{children}</div>
            </>
        } else {
            content = <span>{firstChild}</span>
        }
    }

    return <aside className={styles.callout}>
        <span className={styles.icon}>💡</span>
        {content}
    </aside>
}