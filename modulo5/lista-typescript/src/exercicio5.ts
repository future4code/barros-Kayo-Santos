type usuario = {
    name: string;
    email: string;
    role: string;
  };
  
  const usuarios: usuario[] = [
    { name: "Rogério", email: "roger@email.com", role: "user" },
    { name: "Ademir", email: "ademir@email.com", role: "admin" },
    { name: "Aline", email: "aline@email.com", role: "user" },
    { name: "Jéssica", email: "jessica@email.com", role: "user" },
    { name: "Adilson", email: "adilson@email.com", role: "user" },
    { name: "Carina", email: "carina@email.com", role: "admin" }
  ];
  
  function buscaAdmin(usuarios: usuario[]) {
    let admin: usuario[] = usuarios.filter((adm) => {
      return adm.role === "admin";
    });
    let adminEmail = admin.map((email) => {
      return email.email;
    });
    return adminEmail;
  }
  
  console.log(buscaAdmin(usuarios));