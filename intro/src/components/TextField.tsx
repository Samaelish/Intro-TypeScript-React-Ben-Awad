import React, { useState, useRef } from 'react'

interface Person { // interface prop
    firstName: string
    lastName: string
}

interface Props {
    text: string;
    ok?: boolean; // optional prop
    i?: number;
    fn?: (bob: string) => string;
    // obj: {
    //     f1: string,
    // };
    person: Person;
}

interface TextNode {
    text: string
}

export const TextField: React.FC<Props> = ({}) => {
    const [count, setCount] = useState<TextNode>({text: 'hello'});
    const inputRef = useRef<HTMLInputElement>(null);


    return (
        <div>
            <input ref={inputRef}/>
        </div>
    )
}