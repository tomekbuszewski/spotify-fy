class ActionNameCreator {
  private readonly group: string;

  constructor(group: string) {
    this.group = group;
  }

  private static format(input: string): string {
    return input.replace(/ /g, "_").toUpperCase();
  }

  public get(input: string): string {
    const group = ActionNameCreator.format(this.group);
    const action = ActionNameCreator.format(input);

    return `[${group}] ${action}`;
  }
}

export default ActionNameCreator;
