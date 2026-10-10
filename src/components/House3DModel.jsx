import { useRef, useState, useEffect, useCallback } from 'react'

/**
 * A CSS-3D house model that users can drag to rotate.
 * No WebGL — works in any browser and the sandbox preview.
 * Built with CSS transforms and perspective.
 */
export default function House3DModel() {
  const containerRef = useRef(null)
  const rotRef = useRef({ x: -15, y: 25 })
  const [rot, setRot] = useState({ x: -15, y: 25 })
  const [isDragging, setIsDragging] = useState(false)
  const dragStartRef = useRef({ x: 0, y: 0, rotX: 0, rotY: 0 })
  const autoRotateRef = useRef(null)

  const handleStart = useCallback((clientX, clientY) => {
    setIsDragging(true)
    dragStartRef.current = {
      x: clientX,
      y: clientY,
      rotX: rotRef.current.x,
      rotY: rotRef.current.y,
    }
  }, [])

  const handleMove = useCallback((clientX, clientY) => {
    if (!isDragging) return
    const dx = clientX - dragStartRef.current.x
    const dy = clientY - dragStartRef.current.y
    rotRef.current = {
      x: dragStartRef.current.rotX - dy * 0.4,
      y: dragStartRef.current.rotY + dx * 0.4,
    }
    // Clamp vertical rotation
    rotRef.current.x = Math.max(-60, Math.min(20, rotRef.current.x))
    setRot({ ...rotRef.current })
  }, [isDragging])

  const handleEnd = useCallback(() => {
    setIsDragging(false)
  }, [])

  // Mouse events
  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    const onMouseDown = (e) => handleStart(e.clientX, e.clientY)
    const onMouseMove = (e) => handleMove(e.clientX, e.clientY)
    const onMouseUp = () => handleEnd()

    el.addEventListener('mousedown', onMouseDown)
    window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('mouseup', onMouseUp)
    return () => {
      el.removeEventListener('mousedown', onMouseDown)
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('mouseup', onMouseUp)
    }
  }, [handleStart, handleMove, handleEnd])

  // Touch events
  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    const onTouchStart = (e) => {
      if (e.touches.length === 1) handleStart(e.touches[0].clientX, e.touches[0].clientY)
    }
    const onTouchMove = (e) => {
      if (e.touches.length === 1) {
        e.preventDefault()
        handleMove(e.touches[0].clientX, e.touches[0].clientY)
      }
    }
    const onTouchEnd = () => handleEnd()

    el.addEventListener('touchstart', onTouchStart, { passive: true })
    el.addEventListener('touchmove', onTouchMove, { passive: false })
    el.addEventListener('touchend', onTouchEnd)
    return () => {
      el.removeEventListener('touchstart', onTouchStart)
      el.removeEventListener('touchmove', onTouchMove)
      el.removeEventListener('touchend', onTouchEnd)
    }
  }, [handleStart, handleMove, handleEnd])

  // Auto-rotate when not dragging
  useEffect(() => {
    if (isDragging) {
      clearInterval(autoRotateRef.current)
      return
    }
    autoRotateRef.current = setInterval(() => {
      rotRef.current.y += 0.3
      setRot({ ...rotRef.current })
    }, 50)
    return () => clearInterval(autoRotateRef.current)
  }, [isDragging])

  const transform = `rotateX(${rot.x}deg) rotateY(${rot.y}deg)`

  return (
    <div
      ref={containerRef}
      className="css3d-scene"
      style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
    >
      <div className="css3d-perspective">
        <div className="css3d-house" style={{ transform }}>
          {/* Ground */}
          <div className="css3d-face css3d-ground" />

          {/* Main building — ground floor */}
          <div className="css3d-box css3d-box-main">
            <div className="css3d-face css3d-face-front css3d-wall" />
            <div className="css3d-face css3d-face-back css3d-wall" />
            <div className="css3d-face css3d-face-left css3d-wall-dark" />
            <div className="css3d-face css3d-face-right css3d-wall-glass" />
            <div className="css3d-face css3d-face-top css3d-roof-slab" />
            <div className="css3d-face css3d-face-bottom" />
          </div>

          {/* Main building — upper floor */}
          <div className="css3d-box css3d-box-upper">
            <div className="css3d-face css3d-face-front css3d-wall-glass-upper" />
            <div className="css3d-face css3d-face-back css3d-wall" />
            <div className="css3d-face css3d-face-left css3d-wall" />
            <div className="css3d-face css3d-face-right css3d-wall-glass" />
            <div className="css3d-face css3d-face-top css3d-roof-slab" />
            <div className="css3d-face css3d-face-bottom css3d-wall" />
          </div>

          {/* Roof overhang slab */}
          <div className="css3d-box css3d-box-overhang">
            <div className="css3d-face css3d-face-front css3d-dark" />
            <div className="css3d-face css3d-face-back css3d-dark" />
            <div className="css3d-face css3d-face-left css3d-dark" />
            <div className="css3d-face css3d-face-right css3d-dark" />
            <div className="css3d-face css3d-face-top css3d-dark" />
            <div className="css3d-face css3d-face-bottom css3d-dark" />
          </div>

          {/* Flat roof on top */}
          <div className="css3d-box css3d-box-roof">
            <div className="css3d-face css3d-face-front css3d-navy" />
            <div className="css3d-face css3d-face-back css3d-navy" />
            <div className="css3d-face css3d-face-left css3d-navy" />
            <div className="css3d-face css3d-face-right css3d-navy" />
            <div className="css3d-face css3d-face-top css3d-navy-light" />
            <div className="css3d-face css3d-face-bottom css3d-navy" />
          </div>

          {/* Gold accent pillar */}
          <div className="css3d-box css3d-box-pillar">
            <div className="css3d-face css3d-face-front css3d-gold" />
            <div className="css3d-face css3d-face-back css3d-gold" />
            <div className="css3d-face css3d-face-left css3d-gold" />
            <div className="css3d-face css3d-face-right css3d-gold" />
            <div className="css3d-face css3d-face-top css3d-gold" />
            <div className="css3d-face css3d-face-bottom css3d-gold" />
          </div>

          {/* Pool */}
          <div className="css3d-box css3d-box-pool">
            <div className="css3d-face css3d-face-front css3d-pool-side" />
            <div className="css3d-face css3d-face-back css3d-pool-side" />
            <div className="css3d-face css3d-face-left css3d-pool-side" />
            <div className="css3d-face css3d-face-right css3d-pool-side" />
            <div className="css3d-face css3d-face-top css3d-pool-water" />
            <div className="css3d-face css3d-face-bottom css3d-pool-side" />
          </div>

          {/* Pool deck */}
          <div className="css3d-box css3d-box-deck">
            <div className="css3d-face css3d-face-front css3d-deck" />
            <div className="css3d-face css3d-face-back css3d-deck" />
            <div className="css3d-face css3d-face-left css3d-deck" />
            <div className="css3d-face css3d-face-right css3d-deck" />
            <div className="css3d-face css3d-face-top css3d-deck-top" />
            <div className="css3d-face css3d-face-bottom css3d-deck" />
          </div>

          {/* Trees */}
          <div className="css3d-tree css3d-tree-1">
            <div className="css3d-tree-trunk" />
            <div className="css3d-tree-top" />
          </div>
          <div className="css3d-tree css3d-tree-2">
            <div className="css3d-tree-trunk" />
            <div className="css3d-tree-top" />
          </div>
          <div className="css3d-tree css3d-tree-3">
            <div className="css3d-tree-trunk" />
            <div className="css3d-tree-top" />
          </div>

          {/* Hedges */}
          <div className="css3d-hedge css3d-hedge-1" />
          <div className="css3d-hedge css3d-hedge-2" />
          <div className="css3d-hedge css3d-hedge-3" />
          <div className="css3d-hedge css3d-hedge-4" />
        </div>
      </div>
    </div>
  )
}
