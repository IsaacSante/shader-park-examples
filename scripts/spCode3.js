//displace over time .. getSpace
export function spCode() {
  let s = getSpace();
  let xPos = sin(time * 2.0) * 0.3;
  let yPos = cos(time * 2.0) * 0.3;
  color(s);

  blend(0.1);

  displace(xPos, yPos, 0);
  sphere(0.3);

  displace(mouse.x, mouse.y, 0);
  sphere(0.1);
}
