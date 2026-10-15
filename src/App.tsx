import { Redirect, Route } from "react-router-dom";
import React, { useContext } from "react";

import {
  IonApp,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonMenu,
  IonMenuToggle,
  IonPage,
  IonRouterOutlet,
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonTitle,
  IonToolbar,
  IonBadge,
  setupIonicReact,
} from "@ionic/react";

import { IonReactRouter } from "@ionic/react-router";

import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Dashboard from "./pages/Dashboard";
import Gallery from "./pages/Gallery";

import { CartProvider, CartContext } from "./pages/CartContext";

import { cart, chevronForward, grid, image, home } from "ionicons/icons";

import "@ionic/react/css/core.css";
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";
import "@ionic/react/css/palettes/dark.system.css";

import "./theme/variables.css";

setupIonicReact();

const App: React.FC = () => {
  const { cartCount } = useContext(CartContext);

  return (
    <CartProvider>
      <IonApp>
        {/* SIDE MENU */}
        <IonMenu contentId="main" type="overlay">
          <IonHeader>
            <IonToolbar color="primary">
              <IonTitle>Waga SkillStack Hub</IonTitle>
            </IonToolbar>
          </IonHeader>

          <IonContent>
            <IonList>
              <IonMenuToggle autoHide={false}>
                <IonItem routerLink="/home" routerDirection="forward">
                  <IonIcon icon={home} slot="start" />
                  <IonLabel>Home</IonLabel>
                  <IonIcon icon={chevronForward} slot="end" />
                </IonItem>
              </IonMenuToggle>

              <IonMenuToggle autoHide={false}>
                <IonItem routerLink="/dashboard" routerDirection="forward">
                  <IonIcon icon={grid} slot="start" />
                  <IonLabel>Dashboard</IonLabel>
                  <IonIcon icon={chevronForward} slot="end" />
                </IonItem>
              </IonMenuToggle>

              <IonMenuToggle autoHide={false}>
                <IonItem routerLink="/cart" routerDirection="forward">
                  <IonIcon icon={cart} slot="start" />
                  <IonLabel>Cart</IonLabel>

                  {cartCount > 0 && (
                    <IonBadge color="danger" slot="end">
                      {cartCount}
                    </IonBadge>
                  )}

                  <IonIcon icon={chevronForward} slot="end" />
                </IonItem>
              </IonMenuToggle>

              <IonMenuToggle autoHide={false}>
                <IonItem routerLink="/gallery" routerDirection="forward">
                  <IonIcon icon={image} slot="start" />
                  <IonLabel>Gallery</IonLabel>
                  <IonIcon icon={chevronForward} slot="end" />
                </IonItem>
              </IonMenuToggle>
            </IonList>
          </IonContent>
        </IonMenu>

        <IonReactRouter>
          {/* MAIN CONTENT WITH TABS */}
          <IonPage id="main">
            <IonTabs>
              <IonRouterOutlet>
                <Route exact path="/home">
                  <Home />
                </Route>

                <Route exact path="/cart">
                  <Cart />
                </Route>

                <Route exact path="/dashboard">
                  <Dashboard />
                </Route>

                <Route exact path="/gallery">
                  <Gallery />
                </Route>

                <Route exact path="/">
                  <Redirect to="/home" />
                </Route>
              </IonRouterOutlet>

              <IonTabBar slot="bottom">
                <IonTabButton tab="home" href="/home">
                  <IonIcon icon={home} />
                  <IonLabel>Home</IonLabel>
                </IonTabButton>

                <IonTabButton tab="cart" href="/cart">
                  <IonIcon icon={cart} />

                  {cartCount > 0 && (
                    <IonBadge color="danger" style={{ position: "absolute", top: "2px", right: "20px" }}>
                      {cartCount}
                    </IonBadge>
                  )}

                  <IonLabel>Cart</IonLabel>
                </IonTabButton>

                <IonTabButton tab="gallery" href="/gallery">
                  <IonIcon icon={image} />
                  <IonLabel>Gallery</IonLabel>
                </IonTabButton>
              </IonTabBar>
            </IonTabs>
          </IonPage>
        </IonReactRouter>
      </IonApp>
    </CartProvider>
  );
};

export default App;
