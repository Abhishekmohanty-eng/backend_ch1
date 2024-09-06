let express=require("express")

let app=express()

let port=3000

let githubPulicData={
  username:"Abhishekmohanty_eng",
  fullname:"Abhishek Mohanty",
  email:"abhishekmohanty166@gmail.com",
  repositories:24,
  gists:12,
  joined0n:"sept 2023"

}
/**
xercise 1: Profile URL

Define the function getProfileUrl to return the GitHub profile URL of the user.

Declare a GET endpoint /github-profile to use the getProfileUrl function.

Sample Endpoint: /github-profile
*/

function getProfileUrl(githubPulicData){
  return `https://github.com/${githubPulicData.username}`
}
app.get('/github-profile',(req,res)=>{
  let profileUrl=getProfileUrl(githubPulicData)
  res.json({
    profileUrl:profileUrl
  })
})

/**
Exercise 2: Public Email

Define the function getPublicEmail to return the GitHub email of the user.

Declare a GET endpoint /github-public-email to use the getPublicEmail function.

Sample Endpoint: http://localhost:3000/github-public-email
*/
function getPublicEmail(githubPulicData){
  return githubPulicData.email
}
app.get('/github-public-email',(req,res)=>{
  let publicEmail=getPublicEmail(githubPulicData)
  res.json(publicEmail)
})

/**
Exercise 3: Get Repos Count

Define the function getReposCount to return the number of repositories the user has.

Declare a GET endpoint /github-repos-count to use the getReposCount function.

Sample Endpoint: http://localhost:3000/github-repos-count
*/
function getReposCount(githubPulicData){
  return githubPulicData.repositories
}

app.get('/github-repos-count',(req,res)=>{
  let reposCount=getReposCount(githubPulicData)
  res.json(reposCount)
})

/**
Exercise 4: Get Gists Count

Define the function getGistsCount to return the number of gists the user has.

Declare a GET endpoint /github-gists-count to use the getGistsCount function.

Sample Endpoint: http://localhost:3000/github-gists-count

*/
function getGistsCount(githubPulicData){
  return githubPulicData.gists
}
app.get('/github-gists-count',(req,res)=>{
  let gistsCount=getGistsCount(githubPulicData)
  res.json(gistsCount)
})
/**
Exercise 5: Get User Bio

Define the function getUserBio to return the user's bio.

Declare a GET endpoint /github-user-bio to use the getUserBio function.

Sample Endpoint: http://localhost:3000/github-user-bio
*/
function getUserBio(githubPulicData){
  return githubPulicData.fullname
}
app.get('/github-user-bio',(req,res)=>{
  let userBio=getUserBio(githubPulicData)
  res.json(userBio)
})

/**
Exercise 6: Repository URL

Define the function getRepoUrl to return the URL of a specific repository.

Declare a GET endpoint /github-repo-url to use the getRepoUrl function.

Sample Endpoint: http://localhost:3000/github-repo-url?repoName=backend_course
*/
function getRepoUrl(githubPulicData,repoName){
  return `https://github.com/${githubPulicData.username}/${repoName}`
}
app.get('/github-repo-url',(req,res)=>{
  let repoName=req.query.repoName
  let repoUrl=getRepoUrl(githubPulicData,repoName)
  res.json(repoUrl)
})
app.listen(port,()=>{
  console.log(`Server running at http://localhost:${port}`)
})