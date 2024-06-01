
export default async function handleSubmit(event: any) {
    event.preventDefault();
    const formData = new FormData(event.target);

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const response = await fetch("api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
    });
    const result = await response.json();
    
    if (result.success) {
        console.log(result);
    }
}