type Comments = {
    id: number,
    name: string
}

const ISRPage = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/comments")
    const comments: Comments[] = await res.json()
    const time = new Date().toLocaleTimeString()
  return (
   <main>
    <h1>Incremental Static Regeneration</h1>
    <p>Rendered at: {time}</p>

    <ol className="p-24">
        {comments.slice(0,5).map((c) => (
            <li key={c.id}>
                - {c.name}
            </li>
        ))}
    </ol>
   </main>
  )
}

export default ISRPage
