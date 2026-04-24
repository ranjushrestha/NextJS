type User = {
    id:number,
    name: string,
    email: string
}
const SSRPage = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users", {
        cache: "no-store",
    })

    const users: User[] = await res.json();
    const time = new Date().toLocaleString();
  return (
    <main >
        <h1>Server Side Rendering</h1>
        <p>Rendered at {time}</p>

        <ol className="p-24">
            {users.slice(0,5).map((user) => (
               <li key={user.id}>
                   <strong>{user.name}</strong> - {user.email}
               </li>
            ))}
        </ol>
    </main>
  )
}

export default SSRPage
export const dynamic = "force-dynamic"
