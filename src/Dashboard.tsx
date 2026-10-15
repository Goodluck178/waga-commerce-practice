import React, { useContext } from "react";
import {
  IonButtons,
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonCard,
  IonCardHeader,
  IonMenuButton,
  IonCardTitle,
  IonCardContent,
  IonItem,
  IonLabel,
  IonButton,
} from "@ionic/react";

import { CartContext } from "./CartContext";

const Dashboard: React.FC = () => {
  const { paidHistory, clearHistory } = useContext(CartContext);

  
  // CLEAR HISTORY HANDLER
  
  const handleClearHistory = () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to clear all purchase history?"
    );

    if (confirmDelete === true) {
      clearHistory();
      alert("Purchase history cleared");
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Purchased Orders</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent class="ion-padding">
        <h2 style={{ textAlign: "center", fontWeight: "bold" }}>
          Total Orders: {paidHistory.length}
        </h2>

        {paidHistory.length > 0 && (
          <IonButton
            shape="round"
            color="danger"
            onClick={handleClearHistory}
          >
            Clear All History
          </IonButton>
        )}

        {paidHistory.length === 0 && (
          <IonItem>
            <IonLabel>No purchased orders yet</IonLabel>
          </IonItem>
        )}

        {paidHistory.map((item: any, index: number) => (
          <IonCard key={index}>  
            <IonCardHeader>
              <IonCardTitle>Order #{index + 1}</IonCardTitle>
            </IonCardHeader>

            <IonCardContent>
              <p>Package: {item.packageType.join(", ")}</p>
              <p>Quantity: {item.quantity}</p>
              <p>Address: {item.address}</p>
              <p>Gender: {item.gender}</p>
              <p>Total Paid: €{item.total}</p>
            </IonCardContent>
          </IonCard>
        ))}
      </IonContent>
    </IonPage>
  );
};

export default Dashboard;
