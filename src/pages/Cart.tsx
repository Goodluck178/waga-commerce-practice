import React, { useContext, useState } from "react";
import { useIonRouter } from "@ionic/react";
import {
  IonAlert,
  IonButtons,
  IonPage,
  IonHeader,
  IonMenuButton,
  IonToolbar,
  IonTitle,
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonButton,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonSelect,
  IonSelectOption,
} from "@ionic/react";
import { CartContext } from "./CartContext";

const Cart: React.FC = () => {
  const { cart, addToCart, deleteItem, editItem, payNow } =
    useContext(CartContext);  //give current value of cart stored inside CartContext
  const router = useIonRouter();

  const prices: any = { beginner: 25, advanced: 50 };

  // Edit + New Order States
  const [editingIndex, setEditingIndex] = useState(-1);
  const [pkg, setPkg] = useState<string[]>([]);
  const [qty, setQty] = useState(1);
  const [addr, setAddr] = useState("");
  const [gen, setGen] = useState("");

  const [addingNew, setAddingNew] = useState(false);//not adding  currently

  // Alert State
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [paymentAlert, setPaymentAlert] = useState(false);
  const [paymentTotal, setPaymentTotal] = useState(0);

 
  // Calculate Total
  const calculateTotal = () => {
    let sum = 0;
    for (let i = 0; i < pkg.length; i++) {
      const selected = pkg[i];
      const price = prices[selected];
      sum = sum + price;
    }
    return sum * qty;
  };

  
  // Validation (converted to IonAlert)
  const validate = () => {
    if (pkg.length === 0) {
      setAlertMessage("Please select at least one package");
      setShowAlert(true);
      return false;
    }
    if (qty < 1) {
      setAlertMessage("Quantity must be at least 1");
      setShowAlert(true);
      return false;
    }
    if (addr.trim() === "") {
      setAlertMessage("Address cannot be empty");
      setShowAlert(true);
      return false;
    }
    if (gen.trim() === "") {
      setAlertMessage("Gender cannot be empty");
      setShowAlert(true);
      return false;
    }
    return true;
  };

 
  // Load Item Into Form
  const startEditing = (i: number) => {
    const item = cart[i];
    setEditingIndex(i); //saves index in states known as EditingIndex reminds app which item is edited
    setPkg(item.packageType);
    setQty(item.quantity);
    setAddr(item.address);
    setGen(item.gender);
  };

 
  // Save Edit
  const saveEdit = () => {
    if (validate() === false) return;

    const total = calculateTotal();

    editItem(editingIndex, {
      packageType: pkg,
      quantity: qty,
      address: addr,
      gender: gen,
      total: total,
    });

    setEditingIndex(-1);
  };

  
  // Save New Order
  const saveNew = () => {
    if (validate() === false) return;

    const total = calculateTotal();

    addToCart({
      packageType: pkg,
      quantity: qty,
      address: addr,
      gender: gen,
      total: total,
    });

    setAddingNew(false);
    setPkg([]);
    setQty(1);
    setAddr("");
    setGen("");
  };

  
  // Pay Now (converted to IonAlert)
  const handlePay = () => {
    let sum = 0;
    for (let i = 0; i < cart.length; i++) {
      sum = sum + cart[i].total;
    }

    setPaymentTotal(sum);
    setPaymentAlert(true);
    payNow();
  };

  
  // Form UI (Reused)
  const renderForm = (saveFn: any, cancelFn: any) => (
    <IonCard>
      <IonCardHeader>
        <IonCardTitle>Order Form</IonCardTitle>
      </IonCardHeader>

      <IonCardContent>
        <IonItem>
          <IonLabel position="stacked">Package</IonLabel>
          <IonSelect
            multiple
            value={pkg}
            onIonChange={(e) => setPkg(e.detail.value)} 
          >
            <IonSelectOption value="beginner">Beginner €25</IonSelectOption>
            <IonSelectOption value="advanced">Advanced €50</IonSelectOption>
          </IonSelect>
        </IonItem>

        <IonItem>
          <IonLabel position="stacked">Quantity</IonLabel>
          <IonInput
            type="number"
            value={qty}
            onIonInput={(e: any) => setQty(parseInt(e.target.value))}
          />
        </IonItem>

        <IonItem>
          <IonLabel position="stacked">Address</IonLabel>
          <IonInput
            value={addr}
            onIonInput={(e: any) => setAddr(e.target.value)}
          />
        </IonItem>

        <IonItem>
          <IonLabel position="stacked">Gender</IonLabel>
          <IonInput
            value={gen}
            onIonInput={(e: any) => setGen(e.target.value)}
          />
        </IonItem>

        <IonButton expand="block" color="success" onClick={saveFn}>
          Save
        </IonButton>

        <IonButton expand="block" color="medium" onClick={cancelFn}>
          Cancel
        </IonButton>
      </IonCardContent>
    </IonCard>
  );

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Cart</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent class="ion-padding">
        {/* Validation Alert */}
        <IonAlert
          isOpen={showAlert} //Controls whether the alert is visible
          header="Validation Error"
          message={alertMessage}
          buttons={["OK"]}
          onDidDismiss={() => setShowAlert(false)} //hides alert
        />

        {/* Payment Success Alert */}
        <IonAlert
          isOpen={paymentAlert}
          header="Payment Successful!"
          message={`Total paid: €${paymentTotal}. You will now be redirected to the Dashboard.`}
          buttons={[
            {
              text: "OK",
              handler: () => router.push("/dashboard", "forward", "push"),
            },
          ]}
          onDidDismiss={() => setPaymentAlert(false)}
        />

        <h2 style={{ textAlign: "center", fontWeight: "bold" }}>
          Items in Cart: {cart.length}
        </h2>

        <IonButton expand="block" onClick={() => setAddingNew(true)}>
          Add New Order
        </IonButton>

        {addingNew === true && renderForm(saveNew, () => setAddingNew(false))}

        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Cart Items</IonCardTitle>
          </IonCardHeader>

          <IonCardContent>
            <IonList>
              {cart.length === 0 && (
                <IonItem>
                  <IonLabel>No items in cart</IonLabel>
                </IonItem>
              )}

              {cart.map((item: any, i: number) => (
                <IonCard key={i}>
                  <IonCardHeader>
                    <IonCardTitle>Order #{i + 1}</IonCardTitle>
                  </IonCardHeader>

                  <IonCardContent>
                    {editingIndex !== i && (
                      <IonItem>
                        <IonLabel>
                          <h2>Package: {item.packageType.join(", ")}</h2>
                          <p>Quantity: {item.quantity}</p>
                          <p>Address: {item.address}</p>
                          <p>Gender: {item.gender}</p>
                          <p>Total: €{item.total}</p>
                        </IonLabel>
                      </IonItem>
                    )}
                    {/* If the item we are rendering is the one being edited, 
                    then show the edit form. Otherwise, show nothing */}
                    {editingIndex === i &&
                      renderForm(saveEdit, () => setEditingIndex(-1))}

                    <IonButton
                      expand="block"
                      color="warning"
                      onClick={() => startEditing(i)}
                    >
                      Edit
                    </IonButton>

                    <IonButton
                      expand="block"
                      color="danger"
                      onClick={() => deleteItem(i)}
                    >
                      Delete
                    </IonButton>
                  </IonCardContent>
                </IonCard>
              ))}

              {cart.length > 0 && (
                <IonButton expand="block" color="success" onClick={handlePay}>
                  Pay Now
                </IonButton>
              )}
            </IonList>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Cart;
