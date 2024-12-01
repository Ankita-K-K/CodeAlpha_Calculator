
function deleteLastCharacter(){
    let ans = document.querySelector("#ans");
    ans.value = ans.value.slice(0, -1);
}

async function calculate(){
    let ans = document.querySelector("#ans");
    try{
        ans.classList.add("text-zinc-200");
        ans.value = eval(ans.value);
        console.log(ans.value);
    }catch(e){
        ans.value = '';
    }
}