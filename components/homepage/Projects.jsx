import Image from 'next/image'
import style from './projects.module.css'
import GridLine from '../global/GridLine'

async function fetchRepos() {
  return fetch(process.env.GITHUB_REPOS, { 
    cache: 'no-store', 
    method: 'GET', 
    // headers: {
    //   Authorization: `Bearer ${process.env.GITHUB_TOKEN_AUTH}`
    // }
  })
    .then((res) => res.json())
    .then((data) => {
      return data.length > 1 ? data
        .sort((a, b) => {
          return new Date(b.created_at) - new Date(a.created_at)
        })
        .slice(0, 3) : []
    })
}

async function fetchUser() {
  return fetch(process.env.GITHUB_USER, {  
    method: 'GET', 
    cache: 'no-store',
    // headers: {
    //   Authorization: `Bearer ${process.env.GITHUB_TOKEN_AUTH}`
    // }
  })
    .then((res) => res.json())
    .then((data) => data)
}

async function fetchColor() {
  const url = process.env.ENVIRONMENT === 'development' 
    ? 'http://127.0.0.1:3000/api/colors' 
    : process.env.COLORS_URL 

  return fetch(url, { cache: 'no-store' })
    .then((res) => res.json())
    .then((data) => data)
}

export async function Projects() {
  const repos = await fetchRepos()
  const user = await fetchUser()
  const colorsList = await fetchColor()

  return (
    <div className={style.parentContainer}>
      <h2 className={style.sectionTitle}>Projects</h2> 
      <div className={style.projectsContainer}>
        <div className={style.leftLineContainer}>
          <GridLine lineType="vertical" position="topLeft" offset='offsetBottom' />
        </div>
        <GridLine lineType="horizontal" position="topLeft" offset='offsetRight' />
        <div className={style.userInfoContainer}>
          <img className={style.avatar} src={user.avatar_url} alt="avatar" />
          <div className={style.userDetailsContainer}>
            <h3 className={style.githubTitle}>Github</h3>
            <p className={style.username}>@{user.login || 'Can not fetch the user'}</p>
            <p>{user.location}</p>
          </div>
        </div>
        {
          repos.map((repo, index)=> {
            return (
              <div
                className={style.projectContainer} 
                key={index}
              >
                <a 
                  href={repo.clone_url} 
                  target="_blank"
                  className={style.repoName}>{repo.name}
                </a>
                <p className={style.repoDescription}>{repo.description}</p>
                <p className={style.repoUrl}>{repo.clone_url}</p>
                <div className={style.detailsContainer}>
                  <div 
                    style={{ 
                      backgroundColor: colorsList[repo?.language?.toLowerCase()]
                        ? colorsList[repo.language.toLowerCase()] 
                        : '#000000'
                    }}
                    className={style.dot}></div>
                  <p className={style.bottomDetails}>{repo.language || "Not a language"}</p>
                  <Image src="/assets/stargazer.svg" alt="github stargazer icon" width={15} height={15} />
                  <p className={style.bottomDetails}>{repo.stargazers_count}</p>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}