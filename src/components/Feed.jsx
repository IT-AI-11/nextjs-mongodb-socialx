


import Post from "./Post"

export default function Feed({ data }) {
  return (
    <div className='FEED-test'>
     <h1>i am a feed.jsx</h1>
     {/* <Post/>
     <Post/>
     <Post/>
     <Post/>
     <Post/>
     <Post/>
     <Post/>
     <Post/> */}


     <div className="posts-from-DB">
      {data.map((post) => (
        <Post key={post._id} post={post} />
      ))}
    </div>


    </div>
  )
}
