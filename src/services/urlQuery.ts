function query<T = any>(input: string | T): T {
  if (typeof input === "string") {
    const inputArray = input.split("&");
    
    return inputArray.reduce((acc: Record<string, string>, item: string) => {
      const result = item.split("=");

      return {
        ...acc,
        [result[0]]: result[1],
      }
    }, {});
  }

  const keys = Object.keys(input);

  return keys.reduce((acc: string, item: string) => {
    const result = `${item}=${input[item]}`;

    if (acc.length === 0) {
      return result;
    }

    return `${acc}&${result}`;
  }, "");
}

export default query;
