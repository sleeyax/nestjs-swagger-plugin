import * as ts from 'typescript';

const [major, minor] = ts.versionMajorMinor?.split('.').map((x) => +x);

export class AbstractFileVisitor {
  updateImports(
    sourceFile: ts.SourceFile,
    factory: ts.NodeFactory | undefined,
    _: ts.Program
  ): ts.SourceFile {
    if (major <= 4 && minor < 8) {
      throw new Error('Nest CLI plugin does not support TypeScript < v4.8');
    }
    return factory.updateSourceFile(sourceFile, sourceFile.statements);
  }
}
