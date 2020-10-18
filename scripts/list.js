
const inputType = document.querySelector(`.input-type`)
const itemNames = document.querySelector(`#item-list`)
const myForm = document.querySelector(`#myform`);
const submitBtn = document.querySelector(`.submit`);
const feedback = document.querySelector(`#message`);
const clearBtn = document.querySelector(`.clear-item`);

feedback.style.backgroundColor = "pink"
myForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const itemname = inputType.value;

    //check if value is empty

    if (itemname === '') {

        feedback.innerHTML = "please enter a value";
        return false;
    } else {

        addItem(itemname);
        feedback.innerHTML = `${itemname} added to the list`
        return true;
    }
});
const delBtn = document.getElementsByClassName(`delete-item`);
console.log(delBtn);

// clear items
clearBtn.addEventListener('click', function () {
    while (itemNames.children.length > 0) {
        itemNames.removeChild(itemNames.children[0]);
        
        feedback.innerHTML = `all items removed from the list`
    }
});

console.log(itemNames);

// add to list
function addItem(itemname) {
    const div = document.createElement('div');
    div.innerHTML = `
    <div class="list-content"><h5 class="item-name">${itemname}</h5>
                            <div class="item-icons">
                             <a href="#" class="add-item item-icon"><i class="fa fa-check-circle"></i></a>
                             <a href="#" class="edit-item item-icon"><i class="fa fa-edit"></i></a>
                             <a href="#" class="delete-item item-icon"><i class="fa fa-times-circle"></i></a>
                             </div></div>`

    itemNames.appendChild(div);
    inputType.value = '';
    //    showFeedback(feedback, 'item added to the list', 'alert-success');
};
// del items
itemNames.addEventListener('click', function (event) {
    const itemName = document.querySelector('.item-name');
    // const value = inputType.value;
    if (event.target.parentElement.classList.contains('delete-item')) {
        let parent = event.target.parentElement.parentElement.parentElement.parentElement;
        // itemNames.removeChild(parent);
        parent.remove()
        //  let text = event.target.parentElement.previousElementSibling.textContent;
        // text.remove()
        feedback.classList.add('showItem')
        feedback.innerHTML = `${itemName.textContent} removed from the list`
    }
});


// edit event listener
itemNames.addEventListener('click', function(e) {
    e.preventDefault()
    // const itemName = document.querySelector('.item-name');
            const editData = document.getElementsByClassName('edit-item');
    for (let i = 0; i < editData.length; i++) {
        editData[i].addEventListener('click', function(e) {
            e.preventDefault()   
        let parent = e.target.parentElement.parentElement.parentElement.parentElement;
        inputType.value = parent.firstElementChild.textContent;
        parent.remove();
        })
    }
    // // itemNames = itemNames.filter(function (item) {
    // //     return item !== itemname;
    // });
});

