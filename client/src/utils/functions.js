
// function for truncating names of search results
const truncateRes = (str) => {
    if (typeof str === 'string' && str.length > 30) {
        str = str.slice(0, 30);
        return str + '...';
    } else {
        return str;
    }
}

export default truncateRes;
