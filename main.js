const SocialMediaLinks = {
    github: 'cjsdiniz',
    youtube: 'cjsdiniz',
    instagram: 'cjsdiniz',
    twitter: 'cjsdiniz'
}

function changeSocialMediaLinks(){
    // document.getElementById('userName').textContent='Jorge Silva'

   for (let li of socialLinks.children){
        const social = li.getAttribute('class')
        li.children[0].href=`https://${social}.com/${SocialMediaLinks[social]}/`
   }
}

changeSocialMediaLinks()


function getGithubUserInfo(){
    const url = `https://api.github.com/users/${SocialMediaLinks.github}`
    
    fetch(url)
    .then(response =>  response.json() ) // Convert to json
    // .then(data => alert(data.bio))
    .then(data => 
        { 
            userName.textContent = data.name
            userBio.textContent = data.bio
            userLink.href = data.html_url
            userId.textContent = data.login
            userImage.src = data.avatar_url
        })
    // .then(data => avatar. = data.name)


}

getGithubUserInfo()