const URL = "https://65b8aaf1b71048505a892637.mockapi.io/Pinterest";
export async function getData() {
    const response = await fetch(URL);
    const data = await response.json();
    return data;
}