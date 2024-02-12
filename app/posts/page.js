import React from 'react'

const getPost = async () => {
    
        const response = await fetch ('https://jsonplaceholder.typicode.com/posts',
        
        {cache: "no-store",
    next:{
        revalidate: 0
    }})


        if(!response.ok){
    throw new Error("fallo la obtención de datos")
}
        return response.json()
}

const Posts = async () => {

    const posts = await getPost()


  return (
    <div>
        <h1 className='container m-auto mt-6'>Posts</h1>
        <hr/>
        <ul>
            {
                posts.map((post)=>(
                    <li key={post.id} className='my-4 
                    list-disc'>
                        {post.title}
                    </li>
                ) )
            }
        </ul>
    </div>
  )
 }
export default Posts