import { Component } from "../models/Component";
import * as THREE from 'three';


export class GameObject implements Component {
    transform: THREE.Group;
    constructor(transform: THREE.Group) {
        this.transform = transform || new THREE.Group();
    }
}