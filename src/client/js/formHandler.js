// Replace checkForName with a function that checks the URL
import { checkForName } from './nameChecker'
import { validateURL } from './linkcheck'

// If working on Udacity workspace, update this with the Server API URL e.g. `https://wfkdhyvtzx.prod.udacity-student-workspaces.com/api`
// const serverURL = 'https://wfkdhyvtzx.prod.udacity-student-workspaces.com/api'
const serverURL = 'https://localhost:8000/api'

const form = document.getElementById('urlForm');
form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    event.preventDefault();

    // Get the URL from the input field
    const formText = document.getElementById('name').value;
    console.log("url of client ",formText);

    // This is an example code that checks the submitted name. You may remove it from your code
    // checkForName(formText);
    
    // Check if the URL is valid
 
        // If the URL is valid, send it to the server using the serverURL constant above
        if(validateURL(formText)) {
            console.log("Valid URL:", formText);
            sendRequest('/analyze-url', {URL: formText}).then((resdata)=>showResults(resdata));
        }else {
            console.log("Invalid URL:", formText);
            alert("You are enter invalid URL.");
        }
      
}

// Function to send data to the server
const sendRequest = async (endpoint = '', payload = {}) => { 
    console.log(payload);
    const result = await fetch(endpoint, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
    });

    try {
        const parsedData = await result.json();
        console.log("recieve from server", parsedData);
        return parsedData;
    } catch (err) {
        console.log("error", err);
    }
}

function showResults(data) {
    // This function can be used to display the results on the page
    const results = document.getElementById("results")
    results.innerHTML = `${data.sentiment}`
}

// Export the handleSubmit function
export { handleSubmit };
