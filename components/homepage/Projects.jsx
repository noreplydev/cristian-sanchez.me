import style from './projects.module.css'

async function fetchData() {
  return fetch(process.env.GITHUB_REPOS)
    .then((res) => res.json())
    .then((data) => data)
}

async function fetchUser() {
  return fetch(process.env.GITHUB_USER)
    .then((res) => res.json())
    .then((data) => data)
}

export async function Projects() {
  const repos = await fetchData()
  const user = await fetchUser()

  return (
    <div className={style.parentContainer}>
      <h2>Projects</h2> 
      <div>
        <div>
          <img src={user.avatar_url || 'Can not fetch the user'} alt="avatar"  />
          <div>
            <h3>Github</h3>
            <p>{user.login}</p>
            <p>{user.location}</p>
          </div>
        </div>
        {
          repos.map((repo, index)=> {
            return (
              <div key={index}>
                <h3>{repo.name}</h3>
                <p>{repo.description}</p>
                <p>{repo.clone_url}</p>
                <p>{repo.language}</p>
                <p>{repo.stargazers_count}</p>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}