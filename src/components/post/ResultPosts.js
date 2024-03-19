import { useState } from "react"
import CurrentPosts from "./CurrentPost"
import InputPosts from "./InputPosts"

const ResultPosts=()=>{


    const [posts, setPosts]=useState([])

    const SubmitPost=(element)=>{

        setPosts(
            [
                ...posts,
                element
            ]
           
        )
        
    }
    return(

        <>

        <section>
            <InputPosts Addpost={SubmitPost}/>
        </section>

        <section>
            {
                posts.map((value)=>{
                    return(
                        <CurrentPosts title={value.ttl} lectorname={value.lect} description={value.desc} />
                    )
                })
            }
        </section>
        </>
    )
}

export default ResultPosts