document.querySelector('.get-jokes').addEventListener('click',getJokes);

function getJokes(e)
{
    const number = document.querySelector('input[type="number"]').value;
    //console.log(number)
    const lists = document.querySelector('.jokes');
    let output='';
    const xhr = new XMLHttpRequest();
    xhr.open('GET',`http://api.icndb.com/jokes/random/${number}`,true);
    xhr.onload = function(){
        if(this.status===200){
            //console.log(this.responseText);
            const jokes = JSON.parse(this.responseText);
            //console.log(jokes)
           

           if(jokes.type==='success'){
               console.log(jokes.value)
           jokes.value.forEach(function(joke){
              output+= `<li>${joke['joke']}</li>` 
           })
           }
           else{
               output+='<li>Something went wrong</li>'
           }

            lists.innerHTML=output
        }
    }
    e.preventDefault();
    xhr.send();
    
}