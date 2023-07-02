export async function getProduct(searchParam){
    const _Response = await fetch("http://127.0.0.1:3333/products/");
    const data = await _Response.json();

    return data;
}