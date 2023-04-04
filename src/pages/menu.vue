<route lang="yaml">
meta:
  layout: sidemenu
name: menu
</route>

<script setup lang="ts">
import { useRouteQuery } from '@vueuse/router'

const page = useRouteQuery('page', 'Inbox')
</script>

<template>
  <IonPage>
    <IonHeader :translucent="true">
      <IonToolbar>
        <IonButtons slot="start">
          <IonMenuButton />
        </IonButtons>
        <IonTitle>{{ page }}</IonTitle>
      </IonToolbar>
    </IonHeader>

    <IonContent :fullscreen="true">
      <IonHeader collapse="condense">
        <IonToolbar>
          <IonTitle size="large">
            {{ page }}
          </IonTitle>
        </IonToolbar>
      </IonHeader>

      <ExploreContainer :name="page" />
    </IonContent>
  </IonPage>
</template>

<style scoped>
#container {
  text-align: center;
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;
  color: #8c8c8c;
  margin: 0;
}

#container a {
  text-decoration: none;
}
</style>
