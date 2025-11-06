let input=document.getElementById("Input");
let div =document.getElementById("main");
let name =document.createElement("p");
let followers =document.createElement("p");
let following =document.createElement("p");
let email =document.createElement("p");
let repos =document.createElement("p");
let profileLabel=document.createElement("span");
let profileLink=document.createElement("a");
let profile=document.createElement("p");
let img=document.createElement("img");
function checkuser(){
    fetch(`https://api.github.com/users/${input.value}`)
    .then(response=>{
        if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json()
    })
    .then(data => {
        profileLink.href=`https://github.com/${input.value}`
        profileLink.textContent=`github.com/${input.value}`
        profileLink.target="_blank"
        profileLabel.textContent="Profile: "
        profile.append(profileLabel,profileLink);
        email.textContent=`Email: ${data.email}`
        followers.textContent=`Followers: ${data.followers}`
        following.textContent=`Following: ${data.following}`
        repos.textContent=`Public Repos: ${data.public_repos}`
        name.textContent=`Name: ${data.name}`
        img.src=data.avatar_url
        div.append(img,name,email,followers,following,repos,profile);
    })
    .catch(error => {
        console.error('Fetch error:', error);
        name.textContent="User Not Found"
        // div.children.remove()
        div.innerHTML=''
        div.append(name) 
    });

}