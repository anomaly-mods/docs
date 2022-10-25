import React, { FC, useEffect, useState } from "react";

export type FuncsProps = {
    filename: string;
}

export type FuncData = {
    name: string;
    start: number;
    end: number;
}


export const Funcs: FC<FuncsProps> = ({ filename }) => {
    // find all public lua functions in the file
    // return a list of them

    const [ funcs, setFuncs ] = useState<FuncData[]>([]);

    useEffect(() => {
        fetch(`/docs/scripts/${filename}.script`)
            .then(res => res.text())
            .then(text => {
                const lines = text.split("\n");
                const funcs: FuncData[] = [];
                let func: FuncData | undefined;
                lines.forEach((line, i) => {
                    if (line.startsWith("function ")) {
                        func = {
                            name: line.split(" ")[1],
                            start: i,
                            end: 0
                        };
                    } else if (line.startsWith("end")) {
                        if (func) {
                            func.end = i;
                            funcs.push(func);
                            func = undefined;
                        }
                    }
                });
                setFuncs(funcs);
            });
    }, []);

    return (
        <pre>
            {funcs.map((func, i) => <div key={i}>{func.name}</div>)}
        </pre>
    );
}