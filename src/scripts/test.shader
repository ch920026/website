		attribute float size;

			attribute vec3 customColor;
      attribute float off;
      uniform float time;
			varying vec3 vColor;

			void main() {

				vColor = customColor;
        vec4 d=vec4(off,0,off,off);
        vec4 cPosition=(vec4( position, 1.0 )+d*time);
				vec4 mvPosition = modelViewMatrix * cPosition;

				gl_PointSize = size * ( 300.0 / -mvPosition.z );

				gl_Position = projectionMatrix *mvPosition;

			}