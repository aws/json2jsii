export class Code {
  public readonly lines = new Array<string>();
  private indent = 0;

  public open(text: string = '') {
    this.line(text);
    this.indent += 2;
  }

  public close(text: string = '') {
    this.indent -= 2;
    this.line(text);
  }

  public openBlock(text: string) {
    this.open(`${text} {`);
  }

  public closeBlock() {
    this.close('}');
  }

  public line(text: string = ''): void {
    const line = text.length > 0
      ? ' '.repeat(this.indent) + text // only indent if line has content
      : text;
    this.lines.push(line.trimEnd());
  }

  public render(): string {
    return this.lines.join('\n');
  }
}