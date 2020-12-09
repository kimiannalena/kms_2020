export class Category {
  constructor(title: string) {
    this.id = Category.taskCounter++;
    this.title = title;
  }
  private static taskCounter = 1;
  id: number;
  title: string;
}
