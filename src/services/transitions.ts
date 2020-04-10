function transition(
  prop: string | string[],
  time: string,
  easing: string,
): string {
  if (Array.isArray(prop)) {
    return `transition: ${prop
      .map(item => `${item} ${time} ${easing}`)
      .join(", ")}`;
  }

  return `transition: ${prop} ${time} ${easing}`;
}

export default transition;
