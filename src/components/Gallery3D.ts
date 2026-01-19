
import { components } from '../data/registry';
import { createExhibitFrame } from './ExhibitFrame';
import '../styles/gallery.css';

export class Gallery3D {
    private container: HTMLElement;
    private hall: HTMLElement;
    private currentScroll = 0;
    private targetScroll = 0;

    constructor(root: HTMLElement) {
        this.container = document.createElement('div');
        this.container.className = 'gallery-viewport';

        this.hall = document.createElement('div');
        this.hall.className = 'gallery-hall';

        this.container.appendChild(this.hall);
        root.appendChild(this.container);

        this.initExhibits();
        this.setupControls();
        this.loop();
    }

    private initExhibits() {
        const radius = 800; // Distance from center
        const total = components.length;
        const anglePerItem = (2 * Math.PI) / total;

        components.forEach((comp, i) => {
            const frame = createExhibitFrame(comp);
            this.hall.appendChild(frame);

            // Calculate 3D position (Cylinder layout)
            const theta = i * anglePerItem;
            const x = Math.sin(theta) * radius;
            const z = Math.cos(theta) * radius;
            const y = 0; // Keep visually flat for now or spiral: i * 50

            // Rotation to face inward
            const rotY = theta * (180 / Math.PI);

            frame.style.transform = `translate3d(${x}px, ${y}px, ${z}px) rotateY(${rotY}deg)`;
        });
    }

    private setupControls() {
        // Scroll to rotate
        window.addEventListener('wheel', (e) => {
            this.targetScroll += e.deltaY * 0.1;
        });

        // Simple drag to rotate
        let startX = 0;
        let isDragging = false;

        window.addEventListener('mousedown', (e) => {
            isDragging = true;
            startX = e.clientX;
        });

        window.addEventListener('mouseup', () => {
            isDragging = false;
        });

        window.addEventListener('mousemove', (e) => {
            if (!isDragging) return;
            const delta = e.clientX - startX;
            this.targetScroll -= delta * 0.5;
            startX = e.clientX;
        });
    }

    private loop = () => {
        // Smooth dampening
        this.currentScroll += (this.targetScroll - this.currentScroll) * 0.05;

        // Rotate the entire hall
        // We rotate negative because if items are at angle Theta, we want to rotate -Theta to bring them to front
        // 360 degrees = full rotation.
        // Map scroll pixels to degrees.
        this.hall.style.transform = `translateZ(-800px) rotateY(${- this.currentScroll * 0.2}deg)`;

        requestAnimationFrame(this.loop);
    };
}
