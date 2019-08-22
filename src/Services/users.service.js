export function getUsersService() {
    let data = fetch("http://localhost:4000/users")
    .then(results => {
        return results.json();
    });
    return data;
}