import React, { useState } from "react";
import {
  IonInput,
  IonTextarea,
  IonButton,
  IonIcon,
  IonAvatar,
} from "@ionic/react";
import { Tache } from "../model/Tache";
import { camera } from "ionicons/icons";
import { CameraResultType } from "@capacitor/core";
import { useCamera } from "@ionic/react-hooks/camera";

interface Props {
  nouvelleTache: (tache: Tache) => void;
}

const AjoutTache = ({ nouvelleTache }: Props) => {
  const [titre, setTitre] = useState<string>();
  const [auteur, setAuteur] = useState<string>();
  const { photo, getPhoto } = useCamera();
  return (
    <>
      <IonIcon
        icon={camera}
        onClick={() => {
          getPhoto({
            quality: 100,
            allowEditing: false,
            resultType: CameraResultType.Base64,
          }).then((tof) => console.log(tof));
        }}
      ></IonIcon>
      <div>
        {photo && (
          <IonAvatar slot="start">
            <img alt="" src={`data:image/png;base64, ${photo.base64String}`} />
          </IonAvatar>
        )}
      </div>
      <IonInput
        placeholder="titre"
        onIonChange={(e) => setTitre(e.detail.value!)}
      ></IonInput>
      <IonTextarea
        placeholder="auteur"
        onIonChange={(e) => setAuteur(e.detail.value!)}
      ></IonTextarea>
      <IonButton
        onClick={() =>
          nouvelleTache({
            titre: titre!,
            auteur: auteur!,
            photo: photo?.base64String,
          })
        }
      >
        Ajouter
      </IonButton>
    </>
  );
};

export default AjoutTache;
