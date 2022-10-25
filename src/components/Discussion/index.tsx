import React, { FC } from "react";
import Giscus from "@giscus/react";

import discussions from "./discussions.json";

console.log(discussions)

export const Discussion: FC = (title: { title: string }) => {
    const number = `${discussions[title.title]}`;

    return <Giscus
        id="comments"
        repo="anomaly-mods/docs"
        repoId="MDEwOlJlcG9zaXRvcnkzODc4NzYxNDU="
        category="Blog Articles"
        categoryId="DIC_kwDOFx6FMc4CRecj"
        mapping="number"
        term={number}
        reactionsEnabled="1"
        emitMetadata="1"
        inputPosition="top"
        theme="preferred_color_scheme"
        lang="en"
        loading="lazy"
    />
}