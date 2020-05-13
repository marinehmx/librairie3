import React from "react";
import { Tache } from "../model/Tache";
import { IonList, IonItem, IonLabel, IonAvatar } from "@ionic/react";

interface Props {
  taches: Tache[];
}

const Taches = ({ taches }: Props) => (
  <IonList>
    {taches.map((tache) => (
      <IonItem key={tache.titre}>
        <IonLabel>
          {tache.photo && (
            <IonAvatar slot="start">
              <img alt="" src={`data:image/png;base64, ${tache.photo}`} />
            </IonAvatar>
          )}
          <h2>{tache.titre}</h2>
          <h3>{tache.auteur}</h3>
        </IonLabel>
      </IonItem>
    ))}
  </IonList>
);

export default Taches;
