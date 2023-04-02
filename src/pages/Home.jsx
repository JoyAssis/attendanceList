import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import * as S from "../styles/HomeStyle";

export default function Home() {
  const [studentName, setStudentName] = useState("");
  //um estado que vai receber/armazenar o nome do aluno que for digitado no input

  const [students, setStudents] = useState([]);
  //estado que vai armazenar a LISTA de alunos

  const [user, setUser] = useState({ name: "", avatar: "" });

  //função que com dois objetos, um que pega o nome do estudante lá de STUDENTNAME e outor que as pega horas em tempo real (ver sobre new Date())
  function handleAddStudent() {
    //cada novo estudante adicionado na lista de alunos essas duas propriedades serão armazenadas no state e mostradas na tela
    if (studentName !== "") {
      const newStudent = {
        name: studentName,
        time: new Date().toLocaleTimeString("pt-BR", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })
      };
      //setStudents([newStudent]); esse novo estudante é adicionado na lista de alunos mais ela é substituido por o novo estudante (imutabilidade)
      setStudents((prevState) => [...prevState, newStudent]);
      setStudentName("");
      // rescupera o nome do estudante que foi digitado no input e junta com o novo estudante então traz o novo valor, recupera o que tinha antes e cria um novo valor com o antigo e o novo valor.
      //prevState (pode ser qualquer nome) - aqui vai ser armazenado a lista de alunos antiga.
      //...(spread operator) - pega o conteudo e espalha/despeja na lista nova.
    } else{
      alert("Digite um nome");
    }
  }

  /** execultado quando o componente for carregado
  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://api.github.com/users/JoyAssis");
      const data = await response.json();
      console.log("DADOS =>", data);

      setUser({
        name: data.name,
        avatar: data.avatar_url,
      });
    }

    fetchData();
  }, []) */ //ele vai depender do estado que está ali para ser execultado

  return (
    <div>
      <S.GlobalStyle />
      <S.Header>
        <h1>Lista de Presença</h1>
        <S.Perfil>
          <p>
            <span>Instrutor(a):</span> Joy Assis
          </p>
          <img src="https://github.com/JoyAssis.png" alt="foto-de-perfil" />
          <p>
            <span>Facilitador(a):</span> João Pedro Belo
          </p>
          <img src="https://github.com/silvajpedro.png" alt="foto-de-perfil" />
        </S.Perfil>
      </S.Header>
      <S.Main>
        <S.Div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <input
              type="text"
              placeholder="Digite o nome do aluno"
              value={studentName}
              onChange={(e) => setStudentName(e.target.value)}
            />
            <button onClick={handleAddStudent}>Presente</button>
          </form>
        </S.Div>

        {/* percorre cada item da lista para exibir */}
        {students.map((student) => (
          <Card key={student.time} name={student.name} time={student.time} />
        ))}
      </S.Main>
    </div>
  );
}
