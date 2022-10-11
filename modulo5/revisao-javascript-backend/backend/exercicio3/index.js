const contas = [
    {
      email: "astrodev@labenu.com",
      password: "abc123"
    },
    {
      email: "bananinha@gmail.com",
      password: "bananinha"
    }
  ];
  
  const login = (email, password) => {
    const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    const regexpassword = /^(?=.*[0-9])(?=.*[az])$/;
  
    if (typeof email !== "string" || regex.test(email) === false) {
      return `e-mail inválido`;
    } else if (typeof password !== "string") {
      return `senha inválida`;
    } else if (password.length < 6) {
      return `senha deve possuir no mínimo 6 caracteres`;
    } else {
      for (let i = 0; i < contas.length; i++) {
        if (contas[i].email === email && contas[i].password === password) {
          return `login bem-sucedido`;
        } else {
          return `e-mail ou senha incorretos.`;
        }
      }
    }
  };
  
  console.log(login("astrodev@labenu.com", "abc123"));
  console.log(login("bananinha@gmail.com", "banana"));
  console.log(login("astrodev.labenu.com", "abc123"));
  console.log(login("bananinha@gmail.com", "ba"));