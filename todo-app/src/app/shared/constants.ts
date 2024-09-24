export class constUrl {
    private static rootPath: string = "http://localhost:8080";
    static getRootPath(): string {
      return this.rootPath;
    }
}