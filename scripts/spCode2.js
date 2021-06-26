// getSpace .. artifacting
export function spCode() {
  let geoSize = 0.4;
  let s = getSpace();
  let force = 0.3;
  let n = force * (0.5 * noise(s * 2 + vec3(0, 0, 0)));
  //let n = force * (0.5 * noise(s * 2 + vec3(0, 0, time)));
  shine(0.8);
  metal(0.5);
  rotateY(time * n * 2);
  color(s);
  box(geoSize, geoSize, geoSize);
}
