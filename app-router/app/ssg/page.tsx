type Posts = {
    id: number,
    title: string,
    body: string
}


const SSGPage = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts")
    const posts: Posts[] =  await res.json()
    const time = new Date().toLocaleTimeString()
  return (
    <main>
        <h1>Static Site Generation</h1>
        <p>Rendered at: {time}</p>

        <ol className="p-24">
            {posts.slice(0,5).map((post) => (
                <li key={post.id}>
                    <h2>- {post.title}</h2>
                    <p>- {post.body}</p>
                </li>
            ))}
        </ol>
    </main>
  )
}

export default SSGPage
