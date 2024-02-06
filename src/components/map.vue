<template>
    <div id="map"></div>
  </template>
  
  <script setup>
  import { createScene } from '@/three/system/createScene.js'
  import { createCamera } from '@/three/system/createCamera.js'
  import { createRenderer } from '@/three/system/createRenderer.js'
  import { createLoop } from '@/three/system/createLoop.js'
  import { createControl } from '@/three/system/createControl.js'
  import { createLabelRenderer } from '@/three/system/createLabelRenderer'
  import { onMounted } from 'vue'
  onMounted(() => {
    const mapRef = document.getElementById('map')
    const scene = createScene()
    const camera = createCamera()
    const renderer = createRenderer(mapRef, scene)
    const controls = createControl(camera, renderer)
    const labelRenderer = createLabelRenderer(mapRef)
    const loop = createLoop(scene, camera, renderer, controls, labelRenderer)
  })
  
  
  </script>
  
  <style>
  #map {
    background-color: #d4e7fd;
  }
  </style>
  