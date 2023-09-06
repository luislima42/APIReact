import React from "react";
import "./style.css";

const ConsultaCatalogo = () => {
  const [produtos, setProdutos] = React.useState([]);
  const [erro, setErro] = React.useState([]);

  React.useEffect(() => {
    const consulta = async () => {
      try {
        const resposta = await fetch("http://localhost:8080/api/v1/produtos");
        if (!resposta.ok) {
          throw new Error();
        }
        const dados = await resposta.json();
        console.log(JSON.stringify(dados));
        setProdutos(dados);
      } catch (error) {
        console.log(error);
        setErro(error.message);
      }
    };

    consulta();
  }, []);

  return (
    <div className="Catalogo">
      <h3>Consulta Catalogo</h3>
      {erro.length > 0 ? (
        <div>Erro ao acessar a API: {erro}</div>
      ) : (
        <div>{JSON.stringify(produtos)}</div>
      )}
    </div>
  );
};

export default ConsultaCatalogo;
