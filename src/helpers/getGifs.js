export const getGifts = async(category) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=XCIOup5S4OVFPiTYmq0kxWq7gADXeGTN&q=${category}&limit=10`

    const response = await fetch( url);
    const { data = [] } = await response.json();

    const gift = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized.url
    }));

    return gift;

}