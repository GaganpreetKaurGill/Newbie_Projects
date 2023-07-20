// This event is fired when we select the list item and submit button on the index page.
document.addEventListener('DOMContentLoaded', () => {
    const li = document.querySelectorAll("li"); // querySelectorAll will put all the list items in the li.
    let selectedItem = null;
    let selectedText = null;

    // loopThrough function is used to check the condition of all the "li" elements.
    function loopThroughLi(){
        for (let i = 0; i < li.length; i++) {

            //in the element, we passed every li element.
            const element = li[i];

            //the addEevntListener will be triggered if the "li" will be selected by the user. 
            element.addEventListener("click", function(){

                //the following if statement is used to restrain the user selecting more than one item.
                if(selectedItem !=null){
                    // if true, the following statement will help to remove the class from the selected item.
                    selectedItem.classList.remove("FinishTask");
                }

                //the following statment will assign the class name "FinishTask" to the selected "li". 
                element.classList.toggle("FinishTask");

                //the selectedItem variable helps to check if the element is not null.
                //I would like to only parse the textContent of the element to the "result.html". Therefore, textContent.trim() has been used.
                selectedItem = element;
                selectedText = element.textContent.trim();

                console.log(element);
                console.log(selectedText);
            });
        }
    }

    //follwing function is used to send the selectedText when the user clicks "Submit" button.
    document.getElementById("submitButton").addEventListener("click", () => {

        console.log("selectedText");

        //if-else statement will ensure that user must select a value before submitting
        if(selectedText !== null){

            //encodeURIComponent helps to include selectedText as a part of the URL string.
            const encodeText = encodeURIComponent(selectedText);

            //the encodeText will be past to the url using 'selected' parameter which is used in "script" included in the "result.html"
            const url = `result.html?selected=${encodeText}`;

            // window.location.href is used to navigate to the web page given in the URL string (in this case, it is "result.html")
            window.location.href = url;
        }else{
            alert('Please select rating before sending.');
        }
    })

    loopThroughLi();
});


