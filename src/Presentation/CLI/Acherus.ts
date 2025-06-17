import * as fs from 'node:fs';
import path from 'path';

export class Acherus
{
    constructor(private readonly outputDir: string)
    {
    }

    make(_: string, name: string)
    {
        const applicationDir = path.join(this.outputDir, 'Application');
        fs.mkdirSync(applicationDir, { recursive: true });

        const useCasePath = path.join(applicationDir, `${ name }.ts`);
        const testPath = path.join(applicationDir, `${ name }.test.ts`);

        fs.writeFileSync(useCasePath, `export class ${ name } {}`);
        fs.writeFileSync(testPath, `describe('${ name }', () => {});`);
    }
}
