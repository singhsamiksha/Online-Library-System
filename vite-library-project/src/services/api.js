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

export const isImageURL = async (url) => {
    try {
        const response = await fetch(url, { method: 'HEAD', redirect: 'follow' });
        if (response.ok) {
            const contentType = response.headers.get('Content-Type');
            if (contentType && contentType.startsWith('image/')) {
                return true;
            }
        }
        return false;
    } catch {
        return false;
    }
};

export const createBook = async (apiData) => {
    try {
        const result = await fetch(`${basePath}/bookdata`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(apiData),
        });

        return result.json();
    } catch (e) {
        console.error('Error in creating book', e);
        throw e;
    }
}