const btnCreatePost = document.getElementById('btnCreatePost');




const CreatePost = async(e)=>{
    e.preventDefault();

    const Title = document.getElementById('txtPostTitle').value;
    const Description = document.getElementById('txtPostDescript').value
    console.log(Title, Description);

    if(Title, Description){
        const response = await fetch('http://localhost:3001/api/post/create',{
            method:'POST',
            body: JSON.stringify({Title, Description}),
            headers:{'Content-Type':'application/json'},
        });
        if(response.ok){
            console.log('looks good');
        }else{
            console.log('doesnt look well');
        }

    }
}




btnCreatePost.addEventListener('click',CreatePost)