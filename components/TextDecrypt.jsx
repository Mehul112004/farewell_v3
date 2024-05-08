"use client"
import React, { useEffect } from "react";
import { useDencrypt } from "use-dencrypt-effect";
import '../app/utilities.css'

const decryptOptions = {
    chars: [
        "-",
        ".",
        "/",
        "*",
        "!",
        "?",
        "#",
        "%",
        "&",
        "@",
        "$",
        "€",
        "(",
        ")",
        "[",
        "]",
        "{",
        "}",
        "<",
        ">",
        "~",
        "0",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "a",
        "b",
        "c",
        "d",
        "e",
        "f",
        "g",
        "h",
        "i",
        "j",
        "k",
        "l",
        "m",
        "n",
        "o",
        "p",
        "q",
        "r",
        "s",
        "t",
        "u",
        "v",
        "w",
        "x",
        "y",
        "z",
    ],
};

export const TextDecrypt = ({text,classNames,interval=20}) => {
    // console.log(props);
    const [value,setValue] = useDencrypt("",{...decryptOptions,interval});
    useEffect(() => {
      setValue(text)

    },[])
    
    // console.log(value);
    // setValue(text)

    // useEffect(() => {
    //     const updateText = () => {
    //         dencrypt(props.text || "");
    //     };

    //     const action = setTimeout(updateText, 0);

    //     return () => clearTimeout(action);
    // }, [dencrypt, props.text]);

    return (
        <h1 className={classNames}>
            {value}
            {" "}
        </h1>
    );
};
