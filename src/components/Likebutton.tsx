"use client";
import { useState } from "react";


export default function Likes(){
    const[likes , setLikes] = useState(0)

    return(
        <button onClick={() => setLikes(likes + 1)}>
            likes : {likes}
        </button>

    )
}