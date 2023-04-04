import Image from 'next/image'
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

async function fetchColor() {
  const url = process.env.ENVIRONMENT === 'development' 
    ? 'http://localhost:3000/api/colors' 
    : process.env.COLORS_URL 

  return fetch(url)
    .then((res) => res.json())
    .then((data) => data)
}

export async function Projects() {
  const repos = await fetchData()
  const user = await fetchUser()
  const colorsList = await fetchColor()

  return (
    <div className={style.parentContainer}>
      <h2 className={style.sectionTitle}>Projects</h2> 
      <div className={style.projectsContainer}>
        <div className={style.userInfoContainer}>
          <img className={style.avatar} src={user.avatar_url} alt="avatar" />
          <div className={style.userDetailsContainer}>
            <h3 className={style.githubTitle}>Github</h3>
            <p className={style.username}>@{user.login || 'Can not fetch the user'}</p>
            <p>{user.location}</p>
          </div>
        </div>
        {
          repos.slice(0, 3).map((repo, index)=> {
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
                      backgroundColor: colorsList[repo.language.toLowerCase()] 
                        ? colorsList[repo.language.toLowerCase()] 
                        : '#000000'
                    }}
                    className={style.dot}></div>
                  <p className={style.bottomDetails}>{repo.language}</p>
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