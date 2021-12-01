import React from "react";
import "./index.css";
import Me from "../../assets/me.jpg";
import ReactJS from "../../assets/ReactJS.png";
import NodeJS from "../../assets/nodejs.png";
import Sass from "../../assets/sass.png";
import PostgreSQL from "../../assets/postgresql.png";
import MongoDB from "../../assets/mongoDB.png";
import AWS from "../../assets/aws.png";
import dayjs from "dayjs";
const Index = () => {
  const habilidades = [
    {
      name: "ReactJS",
      img: ReactJS,
    },
    {
      name: "NodeJS",
      img: NodeJS,
    },
    {
      name: "Sass",
      img: Sass,
    },
    {
      name: "PostgreSQL",
      img: PostgreSQL,
    },
    {
      name: "Mongo DB",
      img: MongoDB,
    },
    {
      name: "AWS",
      img: AWS,
    },
  ];

  return (
    <div className="main">
      <div className="title">
        <h2>Agustín Rodríguez Berois</h2>
        <p>Desarrollador Web Junior</p>
      </div>
      <hr />
      <div className="info">
        <img src={Me} alt="Me." />
        <div>
          <div className="about">
            <h2>¿Quién Soy?</h2>
            <p>
              ¡Bienvenid@s! Mi nombre es Agustín, tengo {dayjs().year() - 2000}{" "}
              años, y soy de Montevideo, Uruguay . Actualmente estoy estudiando
              en la Universidad ORT Uruguay, en el área de Sistemas de
              Información. Me desempeño como desarrollador web en Soft
              Evolution, una empresa de desarrollo de software en Montevideo,
              trabajamos con tecnologías como NodeJS y bases de datos SQL.
            </p>
          </div>
          <hr />
          <div className="skills">
            <h2>Mis Habilidades</h2>

            {habilidades.map((h) => {
              return (
                <div className="skill" key={h.name}>
                  <img src={h.img} alt={h.name} />
                  <p>{h.name}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
