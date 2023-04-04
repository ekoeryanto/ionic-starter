<route lang="yaml">
meta:
  layout: tabs
name: tab1
</route>

<script setup lang="ts">
import type { Photo } from '@capacitor/camera'
import { Camera, CameraResultType } from '@capacitor/camera'
import { IonImg } from '@ionic/vue'
import { cameraOutline } from 'ionicons/icons'

const photo = ref<Photo>()

async function openCamera() {
  photo.value = await Camera.getPhoto({
    resultType: CameraResultType.Uri,
  })
}
</script>

<template>
  <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonTitle>Tab 1</IonTitle>
        <IonButtons slot="end">
          <IonButton @click="openCamera">
            <IonIcon :icon="cameraOutline" />
          </IonButton>
        </IonButtons>
      </IonToolbar>
    </IonHeader>
    <IonContent :fullscreen="true">
      <IonHeader collapse="condense">
        <IonToolbar>
          <IonTitle size="large">
            Tab 1
          </IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonImg v-if="photo" :src="photo?.webPath" />
      <ExploreContainer v-else name="Tab 1 page" />
    </IonContent>
  </IonPage>
</template>
