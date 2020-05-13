import React, { useState, useEffect } from "react";
import "./ExploreContainer.css";
import Taches from "./Todolist";
import AjoutTache from "./AjoutTache";
import { getTasks, addTask } from "../storage/db";
import { Tache } from "../model/Tache";

interface ContainerProps {
  name: string;
}

const ExploreContainer: React.FC<ContainerProps> = ({ name }) => {
  const [taches, setTaches] = useState<Tache[]>([]);

  useEffect(() => {
    getTasks().then((res) => setTaches(res));
  }, []);

  return (
    <>
      <AjoutTache nouvelleTache={(tache) => addTask(tache).then(setTaches)} />
      <Taches taches={taches}></Taches>
    </>
  );
};

export default ExploreContainer;
