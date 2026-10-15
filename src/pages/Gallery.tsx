import {
  IonButtons,
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCardContent,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonNote,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";

import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  Pagination,
  Navigation,
  Keyboard,
  Scrollbar,
  Zoom,
} from "swiper/modules";

//module has no definition/ typescript cannot find the type
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import "swiper/css/keyboard";
import "swiper/css/scrollbar";
// import "swiper/css/zoom";

const books = [
  {
    title: "Python",
    subtitle: "Learn Automation",
    image: "/assets/image1.png",
  },
  { title: "C", subtitle: "learning C", image: "/assets/image2.png" },
  { title: "Javascript", subtitle: "learn js", image: "/assets/image3.png" },
  { title: "Oracle 11g", subtitle: "Database", image: "/assets/image4.png" },
  { title: "Machine Language", subtitle: "Zeros", image: "/assets/image5.png" },
  { title: "Web Development", subtitle: "web", image: "/assets/image6.png" },
  {
    title: "Networking",
    subtitle: "troubleshooting networks",
    image: "/assets/image7.png",
  },
  {
    title: "Computer System",
    subtitle: "Learning hardware",
    image: "/assets/image8.png",
  },
];

const Gallery: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Gallery</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent class="ion-padding">
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Welcome to our Gallery!</IonCardTitle>
            <IonCardSubtitle>
              At Waga SkillStack Hub, we believe learning is a journey—one
              filled with creativity, collaboration, and hands-on experience.
            </IonCardSubtitle>
          </IonCardHeader>
        </IonCard>

        <Swiper
          modules={[
            Autoplay,
            Pagination,
            Navigation,
            Keyboard,
            Scrollbar,
            Zoom,
          ]}
          slidesPerView={1}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          navigation={true}
          keyboard={true}
          scrollbar={true}
          zoom={true}
          loop={true}
        >
          {books.map((book, index) => (
            <SwiperSlide key={index}>
              <IonCard>
                <img src={book.image} alt={book.title} />
                <IonCardTitle>{book.title}</IonCardTitle>
                <IonNote>{book.subtitle}</IonNote>
              </IonCard>
            </SwiperSlide>
          ))}
        </Swiper>
        <IonCard>
          <IonCardContent>
            Explore moments from our coding classes, workshops, student
            projects, and community events. Every image reflects our mission:
            empowering students with the skills to build the future through
            technology.
          </IonCardContent>
        </IonCard>
        {/* <p>
          Explore moments from our coding classes, workshops, student projects,
          and community events. Every image reflects our mission: empowering
          students with the skills to build the future through technology.
        </p> */}
      </IonContent>
    </IonPage>
  );
};

export default Gallery;
