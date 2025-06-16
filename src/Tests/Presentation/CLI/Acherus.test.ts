import { Acherus } from '@cli/Acherus';
import * as fs from 'node:fs';
import path from 'path';

describe('Acherus CLI', () => {
  const outputDir = path.resolve(__dirname, '../../../__sandbox__/Acherus');

  beforeEach(() => {
    fs.mkdirSync(outputDir, { recursive: true });
  });

  afterEach(() => {
    fs.rmSync(outputDir, { recursive: true, force: true });
  });

  it('should scaffold a basic use-case in Application and its test file', () => {
    const acherus = new Acherus(outputDir);
    const action: string = 'use-case';
    const useCaseName: string = 'IntroduceTestUseCase';

    acherus.make(action, useCaseName);

    expect(
      fs.existsSync(path.resolve(path.join(outputDir, 'Application', `${useCaseName}.ts`)))
    ).toBeTruthy();

    expect(
      fs.existsSync(path.resolve(path.join(outputDir, 'Application', `${useCaseName}.test.ts`)))
    ).toBeTruthy();
  });
});
