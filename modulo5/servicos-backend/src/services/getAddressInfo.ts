import axios from "axios"

async function getAddressInfo(cep:string) {
    try{
        const {data} = await   axios.get(`https://viacep.com.br/ws/${cep}/json/`);
    return {
       logradouro: data.logradouro,
       bairro: data.bairro,
       cidade: data.localidade,
       estado: data.uf
    }
    }catch(e:any){
        throw new Error(e.message);        
    }
    
    
    
}

export default getAddressInfo