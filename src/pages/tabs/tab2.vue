<route lang="yaml">
meta:
  layout: tabs
name: tab2
</route>

<script setup lang="ts">
import { menuOutline } from 'ionicons/icons'
</script>

<template>
  <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonTitle>Tab 2</IonTitle>
        <IonButtons slot="end">
          <IonButton router-link="/menu/Inbox">
            <IonIcon :icon="menuOutline" />
          </IonButton>
        </IonButtons>
      </IonToolbar>
    </IonHeader>
    <IonContent :fullscreen="true">
      <IonHeader collapse="condense">
        <IonToolbar>
          <IonTitle size="large">
            Tab 2
          </IonTitle>
        </IonToolbar>
      </IonHeader>

      <ExploreContainer name="Tab 2 page" />
    </IonContent>
  </IonPage>
</template>
