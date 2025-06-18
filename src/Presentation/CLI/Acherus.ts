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
        fs.mkdirSync(applicationDir, { recursive: true });
        fs.mkdirSync(testsDir, { recursive: true });

        const useCasePath: string = path.join(applicationDir, `${ name }.ts`);
        const testPath: string = path.join(testsDir, `${ name }.test.ts`);

        fs.writeFileSync(useCasePath, `export class ${ name } {}`);
        fs.writeFileSync(testPath, `describe('${ name }', () => {});`);
    }
}
