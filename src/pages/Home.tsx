import React, { useState, useContext } from "react";
import { useIonRouter } from "@ionic/react";

import {
  IonAlert,
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonContent,
  IonCol,
  IonGrid,
  IonHeader,
  IonInput,
  IonItem,
  IonLabel,
  IonMenuButton,
  IonPage,
  IonRadio,
  IonRadioGroup,
  IonRow,
  IonSelect,
  IonSelectOption,
  IonTitle,
  IonToolbar
} from "@ionic/react";

import { CartContext } from "./CartContext";

const Home: React.FC = () => {
  const { addToCart } = useContext(CartContext);

  const [packageType, setPackageType] = useState<string[]>([]);
  const [quantity, setQuantity] = useState<number>(1);
  const [address, setAddress] = useState("");
  const [gender, setGender] = useState("");

  const router = useIonRouter();

  // Alert state
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  const prices: any = {
    beginner: 25,
    advanced: 50,
  };

  // Validation (converted to IonAlert)
  const validateForm = () => {
    if (packageType.length === 0) {
      setAlertMessage("Please select at least one package");
      setShowAlert(true);
      return false;
    }
    if (!quantity || quantity < 1) {
      setAlertMessage("Please enter a valid quantity");
      setShowAlert(true);
      return false;
    }
    if (address.trim() === "") {
      setAlertMessage("Please enter your address");
      setShowAlert(true);
      return false;
    }
    if (gender === "") {
      setAlertMessage("Please select gender");
      setShowAlert(true);
      return false;
    }
    return true;
  };

  // Add To Cart
  const handleAddToCart = () => {
    if (!validateForm()) return;

    let sum = 0;
    for (let i = 0; i < packageType.length; i++) {
      const selected = packageType[i];
      const price = prices[selected];
      sum = sum + price;
    }

    const total = sum * quantity;

    const newItem = {
      packageType: packageType,
      quantity: quantity,
      address: address,
      gender: gender,
      total: total,
    };

    addToCart(newItem);

    setPackageType([]);
    setQuantity(1);
    setAddress("");
    setGender("");

    router.push("/cart");
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Waga SkillStack Hub</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent class="ion-padding">

        {/* IonAlert Component */}
        <IonAlert
          isOpen={showAlert}
          header="Validation Error"
          message={alertMessage}
          buttons={[
            {
              text: "OK",
              handler: () => setShowAlert(false),
            },
          ]}
        />

        <IonGrid>
          <IonRow className="ion-justify-content-center">
            <IonCol>
              <IonCard>
                <IonCardHeader>
                  <IonCardTitle>Purchase Tutorial</IonCardTitle>
                  <IonCardSubtitle>About Us</IonCardSubtitle>
                </IonCardHeader>

                <IonCardContent>
                  <IonItem>
                    <IonLabel position="stacked">Select Package</IonLabel>
                    <IonSelect
                      multiple
                      value={packageType}
                      onIonChange={(e) => setPackageType(e.detail.value)}
                    >
                      <IonSelectOption value="beginner">
                        Beginner €25
                      </IonSelectOption>
                      <IonSelectOption value="advanced">
                        Advanced €50
                      </IonSelectOption>
                    </IonSelect>
                  </IonItem>

                  <IonItem>
                    <IonLabel position="stacked">Quantity</IonLabel>
                    <IonInput
                      type="number"
                      value={quantity}
                      onIonInput={(e: any) =>
                        setQuantity(parseInt(e.target.value))
                      }
                      min="0"
                    />
                  </IonItem>

                  <IonItem>
                    <IonLabel position="stacked">Address</IonLabel>
                    <IonInput
                      type="text"
                      value={address}
                      placeholder="Enter Delivery Address"
                      onIonInput={(e: any) => setAddress(e.target.value)}
                    />
                  </IonItem>

                  <IonRadioGroup
                    value={gender}
                    onIonChange={(e) => setGender(e.detail.value)}
                  >
                    <IonItem>
                      <IonLabel>Male</IonLabel>
                      <IonRadio slot="start" value="Male" />
                    </IonItem>

                    <IonItem>
                      <IonLabel>Female</IonLabel>
                      <IonRadio slot="start" value="Female" />
                    </IonItem>
                  </IonRadioGroup>

                  <IonButton expand="block" onClick={handleAddToCart}>
                    Add To Cart
                  </IonButton>
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Home;
