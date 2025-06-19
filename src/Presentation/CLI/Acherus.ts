import * as fs from 'node:fs';
import path from 'path';

export class Acherus
{

    constructor(private readonly outputDir: string)
    {
    }

    make(_: string, name: string): void
    {
        const applicationDir: string = path.join(this.outputDir, 'Application');
        const testsDir: string = path.join(this.outputDir, 'Tests/Application');
        this.makeDirs(applicationDir, testsDir);

        const useCasePath: string = path.join(applicationDir, `${ name }.ts`);
        const testPath: string = path.join(testsDir, `${ name }.test.ts`);
        this.writeFiles(useCasePath, testPath, name);
    }

    private makeDirs(applicationDir: string, testsDir: string): void
    {
        fs.mkdirSync(applicationDir, { recursive: true });
        fs.mkdirSync(testsDir, { recursive: true });
    }

    private writeFiles(useCasePath: string, testPath: string, name: string): void
    {
        fs.writeFileSync(useCasePath, `export class ${ name } {}`);
        fs.writeFileSync(testPath, `describe('${ name }', () => {});`);
    }
}
