import React from 'react'

const buckets = [
    { 
        name: 'paper_bucket', 
        img: '/paper-bucket.png',
        id: 1
    },
    { 
        name: 'metall_bucket', 
        img: '/metall-bucket.png',
        id: 2 
    },
    { 
        name: 'regular_bucket', 
        img: '/regular_bucket.png',
        id: 3
    },
]

export const BucketGeneration = () => {
    let bucket = buckets[1]
    return (
        <div class="bucket">
            <img src={bucket.img} alt="img"></img>
        </div>
    )
}
  