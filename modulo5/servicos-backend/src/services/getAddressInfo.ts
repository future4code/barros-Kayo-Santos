import axios from "axios"

async function getAddressInfo(cep:string) {
    const {data} = await   axios.get("https://viacep.com.br/ws/57081265/json/") 
    console.log(data);
    return `${data.logradouro}, ${data.bairro}, ${data.logradouro}`
    
}

export default getAddressInfo