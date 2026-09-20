const taskinput = document.getElementById('taskinput') ;
const addbtn = document.getElementById('addbtn') ;
const tasklist = document.getElementById('tasklist') ;

function addTask(){
    const tasktext = taskinput.value.trim() ;

    if(tasktext === ''){
        alert('Please! Write the task') ;
        return ;
    }

    const li = document.createElement('li') ;
    const taskspan = document.createElement('span') ;
    taskspan.textContent = tasktext ;

    taskspan.addEventListener('click' , function(){
        li.classList.toggle('completed') ;
    })

    const deleteBtn = document.createElement('button') ;
    deleteBtn.textContent = "Delete" ;
    deleteBtn.className = 'delete-btn' ;

    deleteBtn.addEventListener('click' , function(){
        li.remove() ;
    })

    li.appendChild(taskspan) ;
    li.appendChild(deleteBtn) ;

    tasklist.appendChild(li) ;

    taskinput.value = '' ;
}

addbtn.addEventListener('click' , addTask) ;

taskinput.addEventListener('keypress' , function(e){
    if(e.key === 'Enter'){
        addTask()
    }
})