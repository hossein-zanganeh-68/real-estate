import House3DModel from './House3DModel.jsx'

export default function Property3DViewer() {
  return (
    <div className="property-3d-viewer">
      <div className="property-3d-header">
        <h3>3D Interactive Model</h3>
        <p>Drag to rotate and explore the property from every angle</p>
      </div>
      <div className="property-3d-canvas">
        <House3DModel />
      </div>
    </div>
  )
}
