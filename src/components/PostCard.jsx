import React from 'react'
import appwriteService from '../appwrite/config'
import {Link} from 'react-router-dom'

// PostCard component to display individual post information
// This $id is the 'id' which the syntax of appwrite.
function PostCard({$id, title, featuredImage}) {
  
  const imageUrl = appwriteService.getFilePreview(featuredImage)
  console.log("Image URL:", imageUrl)
  console.log("featuredImage ID:", featuredImage)
  console.log("Preview URL:", appwriteService.getFilePreview(featuredImage))

  return (
    <Link to={`/post/${$id}`}>
    <div className='w-full bg-gray-100 rounded-xl p-4'>
        <div className='w-full justify-center mb-4'>
            <img src={imageUrl} alt={title} className='rounded-xl'/>
        </div>
        <h2 className='text-xl font-bold'>{title}</h2>
    </div>
    </Link>
  )
}

export default PostCard