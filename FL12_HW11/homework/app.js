const structure = [
    {
      'folder': true,
      'title': 'Films',
      'children': [
        {
          'title': 'Iron Man.avi'
        },
        {
          'folder': true,
          'title': 'Fantasy',
          'children': [
            {
              'title': 'The Lord of the Rings.avi'
            },
            {
              'folder': true,
              'title': 'New folder 1',
              'children': false
            }
          ]
        }
      ]
    },
    {
      'folder': true,
      'title': 'Documents',
      'children': [
        {
          'folder': true,
          'title': 'EPAM Homework answers',
          'children': null
        }
      ]
    }
];

const rootNode = document.getElementById('root');

for(const el of structure){
    const ul1 = document.createElement('ul');
    const li1 = document.createElement('li');
    rootNode.appendChild(ul1);
    li1.innerHTML = `<i class="material-icons">folder</i>${el.title}`;
    ul1.appendChild(li1);

    const open1 = function(){
        el.children.forEach(obj => {
            const ul2 = document.createElement('ul');
            const li2 = document.createElement('li');

            ul1.appendChild(ul2);
            
            if(obj.folder){
                li2.innerHTML = `<i class="material-icons">folder</i>${obj.title}`;
            }else{
                li2.innerHTML = `<i class="material-icons">insert_drive_file</i>${el.title}`;
            }
            li1.innerHTML = `<i class="material-icons">folder_open</i>${el.title}`;
            ul2.appendChild(li2);
            
            function close1(){
                console.log('clicked');
                ul2.classList.toggle('hide'); // class
                li1.classList.remove('show'); // class
                li1.innerHTML = `<i class = "material-icons">folder</i>${el.title}`;
            }

            if(ul1.lastChild === ul2){
                li1.removeEventListener('click', open1);
                li1.removeEventListener('click', close1);
            }

            function open2(event){
                if(obj.children){
                    obj.children.forEach(file => {
                        const ul3 = document.createElement('ul');
                        const li3 = document.createElement('li');
                        li2.innerHTML = `<i class="material-icons">folder_open</i>${obj.title}`;
                        ul2.appendChild(ul3);
                        function close2(){
                          ul3.classList.toggle('hide');
                          li2.innerHTML = `<i class="material-icons">folder</i>${obj.title}`;
                      }
                        if(event.target.nextSibling === ul3){
                    
                            li2.removeEventListener('click', open2);
                            li2.addEventListener('click', close2)
                        }
                        if(file.folder){
                            li3.innerHTML = `<i class="material-icons">folder</i>${file.title}`;
                        }else{
                            li3.innerHTML = `<i class="material-icons">insert_drive_file</i>${file.title}`;
                        }
                        ul3.appendChild(li3);

                        function open3(){
                            if(file.children === false && file.folder){
                                const ul4 = document.createElement('ul');
                                const li4 = document.createElement('li');
                                li3.classList.toggle('open');
                                li3.innerHTML = `<i class="material-icons">folder_open</i>${file.title}`;
                                li3.appendChild(li4);
                                li4.innerHTML = '<i class = "italic">Folder is empty</i>';
                                ul4.appendChild(li4);
                                if(event.target){
                                    ul3.removeEventListener('click', open3);
                                    li3.addEventListener('click', () => {
                                      ul4.classList.toggle('hide');
                                      li3.innerHTML = `<i class="material-icons">folder</i>${file.title}`;
                                      console.log(ul4.classList);
                                    }
                                    );
                                    console.log(li3.innerHTML);
                                }else{
                                    li3.addEventListener('click', open3);
                                }
                            }
                        }
                        ul3.addEventListener('click', open3);
                    })


                } else if(!obj.children && !obj.folder){
                  const ul3 = document.createElement('ul');
                  const li3 = document.createElement('li');
                  ul2.appendChild(ul3);

                  li3.innerHTML = `<i class = "italic">Folder is empty</i>`;
                  ul3.appendChild(li3);
                  console.log(event.target.nextSibling);
                  li2.innerHTML = `<i class="material-icons">folder_open</i>${obj.title}`;
                  if(event.target.nextSibling === ul3 || event.target.nextSibling.nextSibling === ul3){
                    
                    li2.removeEventListener('click', open2);
                    li2.addEventListener('click', () => {
                      ul3.classList.toggle('hide');
                      li2.innerHTML = `<i class="material-icons">folder</i>${obj.title}`;
                    })
                  }
                }
            }
            li2.addEventListener('click', open2);
        })
    };
    li1.addEventListener('click', open1);
}