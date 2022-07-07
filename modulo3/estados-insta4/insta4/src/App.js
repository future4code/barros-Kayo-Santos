import React from 'react';
import Post from './components/Post';
import{MainContainer} from "./style"


function App() {
return(
  <MainContainer>
           <Post
            lista={{
              nomeUsuario:'paulinha',
              fotoUsuario: 'https://i.picsum.photos/id/721/50/50.jpg?hmac=VdKBp1FKmV3fOFChDYrEK3xSQFuoxmvzTp7BETlaoG0',
              fotoPost:'https://i.picsum.photos/id/444/200/150.jpg?hmac=e5vGz_0patbt_3MyffqAiTq2Sp5hii5HLLd2K9p-DVQ',
            }}          
                     
            />

            <Post
            lista={{
            nomeUsuario:'Kayn',
            fotoUsuario:'https://i.picsum.photos/id/473/50/50.jpg?hmac=1gFxVYXfDGti34xJhxJE7ZGZcQQKT6ke1InUsnWBFyE',
            fotoPost:'https://i.picsum.photos/id/237/200/150.jpg?hmac=cP3GW-TQQWpntUpoHauvAWmCaKSFUngooZCPRN50Om8',
          }}
            />

            <Post
            lista={{
            nomeUsuario:'Fabi',
            fotoUsuario:'https://i.picsum.photos/id/583/50/50.jpg?hmac=7scYdOqdHj12DfBFgxFDv7M8ITrBbN7DafGRxJE7XcI',
            fotoPost:'https://i.picsum.photos/id/220/200/150.jpg?hmac=ir64HWOUcVwaEo5M9cvbfO2uy_4GoBJvKbWdv7Sn4Eo',
          }}
            />

</MainContainer>

  

)

}


export default App;
