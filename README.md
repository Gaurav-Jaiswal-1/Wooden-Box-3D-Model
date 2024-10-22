
# 3D Model Viewer with HDRI Lighting

This project is a 3D model viewer built using **Three.js**, which loads and displays a 3D model in **GLTF** format. The scene is enhanced with **HDRI** (High Dynamic Range Imaging) lighting for realistic reflections and lighting effects. The model can be interacted with, rotated, and viewed from different angles using mouse controls provided by **OrbitControls**.

## Features

- **3D Model Loading**: Utilizes the `GLTFLoader` to load 3D models in `.glb` or `.gltf` formats.
- **HDRI Lighting**: Adds realistic environment lighting and reflections by using an HDRI image as the environment map.
- **Orbit Controls**: Allows users to rotate, zoom, and pan around the 3D model using mouse or touch gestures.
- **Responsive Rendering**: Adjusts the renderer and camera aspect ratio on window resize for a smooth experience across different screen sizes.
- **Model Rotation**: Automatically rotates the 3D model for dynamic visualization.

## Technologies Used

- [Three.js](https://threejs.org/) – A JavaScript library for creating 3D graphics in the browser.
- [GLTFLoader](https://threejs.org/docs/#examples/en/loaders/GLTFLoader) – To load 3D models in `.glb`/`.gltf` format.
- [RGBELoader](https://threejs.org/docs/#examples/en/loaders/RGBELoader) – For loading HDRI environments to enhance lighting.
- [OrbitControls](https://threejs.org/docs/#examples/en/controls/OrbitControls) – Allows interactive control over the camera.
  
## How to Run the Project

1. **Clone the repository**:
    ```bash
    https://github.com/Gaurav-Jaiswal-1/Wooden-Box-Using-ThreeJS-.git
    ```

2. **Install Dependencies**: (If you're using a bundler like Webpack or any package manager like npm/yarn)
    ```bash
    npm install
    ```

3. **Run a Local Server**: Ensure you're running a local development server (e.g., `live-server`) to serve assets properly.
    ```bash
    live-server
    ```

4. **Open the Project in Your Browser**:
    Navigate to `http://localhost:8080` or the appropriate URL shown by your server.

## File Structure

```bash
├── index.html          # Entry point for the web app
├── main.js             # Main JavaScript file containing Three.js logic
├── models/             # Directory containing 3D models (.glb files)
├── textures/           # Directory containing HDRI textures
└── styles.css          # Custom styles for the project
```

## Future Enhancements

- Add support for multiple model formats.
- Include texture/material customization options for models.
- Improve the user interface for better interaction with 3D models.

## Video



## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
