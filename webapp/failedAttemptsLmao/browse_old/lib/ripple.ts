export function createRipple(event: React.MouseEvent<HTMLElement, MouseEvent>) {
  console.log("ripppppllllee", event);
  const button = event.currentTarget;

  const circle = document.createElement("span");
  const diameter = Math.max(button.clientWidth, button.clientHeight);
  const radius = diameter / 2;

  circle.style.width = circle.style.height = `${diameter}px`;
  circle.style.left = `${event.clientX - button.offsetLeft - radius}px`;
  circle.style.top = `${
    event.clientY + window.scrollY - button.offsetTop - radius
  }px`;
  circle.style.background =
    "linear-gradient(to top, rgba(0,0,0,0) 0%, rgba(0,0,0,0.66) 50%, rgba(0,0,0,0) 100%)";
  // "radial-gradient(at top, rgba(0,0,0,1), yellow, green, blue, indigo, violet);";
  circle.classList.add("ripple");

  console.log(event.clientX);

  const ripple = button.getElementsByClassName("ripple")[0];

  if (ripple) {
    ripple.remove();
  }

  button.appendChild(circle);
}
