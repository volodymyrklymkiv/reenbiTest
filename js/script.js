let inputUser1 = document.querySelector('.user1__form-input');
    submitUser1 = document.querySelector('.user1__form-submit');
    formUser1 = document.querySelector('.user1');
    messageToShowUser1 = document.querySelector('.mainMessage__User1');
    dataToShow = document.querySelector('.mainMessage__Data');
    myMessagesDiv = document.getElementById('myMessages');
    messageContainer = document.getElementById('messageContainer');
    idMessagesUser1 = 0;


submitUser1.addEventListener('click',(event) => {
    event.preventDefault();
    const newBlock = duplicateChildNodes('myMessages')

    let newDate = new Date();
    let messageObject = {
        name: 'User1',
        date: (newDate.getMonth()+1)+'/'+(newDate.getDate())+'/'+(newDate.getFullYear())+','+(newDate.getHours())+':'+(newDate.getMinutes())+'',
        messages: inputUser1.value
    };

    inputUser1.value = '';

    newBlock.children[0].children[0].textContent = messageObject.messages
    newBlock.children[1].children[0].textContent = messageObject.date

    messageContainer.appendChild(newBlock);

    idMessagesUser1++;

});


function duplicateChildNodes (parentId) {
    const newDiv = document.createElement('div');
    newDiv.classList.add('second')

    let parent = document.getElementById(parentId);
    NodeList.prototype.forEach = Array.prototype.forEach;
    let children = parent.childNodes;
    children.forEach(function(item){
        let cln = item.cloneNode(true);
        if (cln.nodeName !== '#text') {
            const span = document.createElement('span');
            cln.appendChild(span)
        }
        newDiv.appendChild(cln);
    });

    return newDiv;
};

