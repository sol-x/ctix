import path from 'path';
import ts from 'typescript';

export default function getTsconfigRootDir(
  compilerOptions: ts.CompilerOptions,
): string | undefined {
  // If set rootDir, use it
  if (compilerOptions.rootDir !== undefined && compilerOptions.rootDir !== null) {
    const rootDir = path.resolve(compilerOptions.rootDir);
    return rootDir;
  }

  // If set rootDirs, use first element of array
  if (compilerOptions.rootDirs !== undefined && compilerOptions.rootDirs !== null) {
    const [head] = compilerOptions.rootDirs;
    const rootDir = path.resolve(head);
    return rootDir;
  }

  return undefined;
}
