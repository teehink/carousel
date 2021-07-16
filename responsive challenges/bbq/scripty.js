let emailCollector = document.getElementById("email-collector")
emailCollector.addEventListener("submit", event => {
    event.preventDefault()  

    let emailFormData = new FormData(event.target)
    let firstName = emailFormData.get("name")
    let emailAddy = emailFormData.get("emailAddress")

    let updatedContent = `
    <h2>Thanks for registering, ${firstName}! </h2>
    <p>You have taken the first step toward becoming a BBQ master!</p>
    
    <p class = "finePrint"> We will spam your inbox at ${emailAddy}</p>
    `
    let originalContent = document.getElementById("register")
    originalContent.innerHTML = updatedContent

})