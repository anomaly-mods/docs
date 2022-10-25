import React, { FC, useEffect, useState } from "react";

export type SnipProps = {
    filename: string;
    start: number;
    end: number;
}


export const Snip: FC<SnipProps> = ({ filename, start, end }) => {
    // open the file under /scripts/ and read it
    // return the lines between start and end

    const [ lines, setLines ] = useState<string[]>([]);

    useEffect(() => {
        fetch(`/docs/scripts/${filename}.script`)
            .then(res => res.text())
            .then(text => {
                setLines(text.split("\n").slice(start, end));
            });
    }, []);

    return (
        <pre>
            {lines.map((line, i) => <div key={i}>{line}</div>)}
        </pre>
    );
}