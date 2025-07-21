const APIURL='http://localhost:4000'
export async function getBooks() {
    const response = await fetch (`${APIURL}/books`)
    console.log(response)
    return response.json();
    
}

export async function getBook(id) {
    const response = await fetch (`${APIURL}/books/${id}`)
    console.log(response)
    return response.json();
    
}

export async function addBooks(book) {
    const response = await fetch(`${APIURL}/books`,
        {
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body: JSON.stringify(book)
        }
    )
    console.log(response)
    return response.json();
    
}

export async function updateBooks(id) {
    const response = await fetch (`${APIURL}/books/${id}`,
        {
            method:"PUT",
            headers:{"Content-Type":"application/json"},
            body: JSON.stringify(book)
        }
    )
    console.log(response)
    return response.json();
    
}

export async function deleteBooks(id) {
    const response = await fetch (`${APIURL}/books/${id}`, 
        {method:"DELETE"}
    )
    console.log(response)
    return response.json();
    
}