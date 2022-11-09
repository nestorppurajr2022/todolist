let addNameBtn = document.querySelector("#addBtn");
addNameBtn.addEventListener("click", addName);

function addName() {
    // get value from input
    let firstName = document.querySelector("#firstName").value;

    // get parent node
    let nameList = document.querySelector("#nameList");

    //create child nodes
    let nameItem = document.createElement("div");
    let nameInput = document.createElement("input");
    nameInput.type = "text";
    nameInput.setAttribute("disabled", ""); //add disabled attribute
    nameInput.value = firstName;
    nameInput.defaultValue = firstName; // to save the defaultValue

    // create edit btn
    let editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.classList = "editBtn";
    editBtn.addEventListener("click", editValue);

    // append child nodes
    nameList.appendChild(nameItem);
    nameList.appendChild(nameInput);
    nameList.appendChild(editBtn);

    function editValue () {
        // remove disabled attribute
        nameInput.removeAttribute("disabled", "");

        // disabled edit button, to avoid multiple save button
        editBtn.setAttribute("disabled","");

        //create save btn
        let saveBtn = document.createElement("button");
        saveBtn.textContent = "Save";
        saveBtn.classList = "saveBtn";
        saveBtn.addEventListener("click", saveValue);

        // append save btn
        nameItem.appendChild(saveBtn);

        function saveValue() {
            let text = "Are you sure you want to save changes " + nameInput.value + " as name?";

            if (confirm(text)== true) {
                // enable edit button again
                editBtn.removeAttribute("disabled","");
    
                //get new Value
                let newValue = nameInput.value;
                nameInput.defaultValue = newValue;
                console.log(newValue);
    
                //disable input type
                nameInput.setAttribute("disabled","");
    
                //hide save button
                //saveBtn.setAttribute("display", "none");
                nameItem.removeChild(saveBtn);

                // add text to alert
                text = "Saved successfully!";
            } else {
                text = "Cancelled";
                //enable edit button again
                editBtn.removeAttribute("disabled", "");

                //disable input type
                nameInput.setAttribute("disabled","");
                
                //hide save button
                //saveBtn.setAttribute("display", "none");
                nameItem.removeChild(saveBtn);

                nameInput.value = nameInput.defaultValue;
            }
            alert(text);
        }
    }
}