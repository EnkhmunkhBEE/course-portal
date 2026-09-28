"use client";
import { useState } from "react";
type Props = {
    value : string,
    onchange: (value: string) => void;
}

export default function Searchbox({value , onchange}:Props){

    return(
        <main>
            <input 
            type="text" 
            placeholder="Search....." 
            value={value}
            onChange={(val) => onchange(val.target.value)}  
            />
        </main>
    );
};