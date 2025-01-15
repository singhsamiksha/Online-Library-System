const basePath = 'https://677f87360476123f76a6df69.mockapi.io/bookhubapi';

export const fetchBookById = async (id) => {
    try {
        const response = await fetch(`${basePath}/bookdata/${id}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching data:", error);
    }
    return null;
}
