import * as fs from "node:fs";
import path from "path";

export class Acherus
{
    constructor(private outputDir: string)
    {
    }

    make(name: string)
    {
        const applicationDir: string = path.join(this.outputDir, 'Application');
        fs.mkdirSync(applicationDir, { recursive: true });

        fs.writeFileSync(path.join(applicationDir, name + '.ts'), '');
        fs.writeFileSync(path.join(this.outputDir, name + '.test.ts'), '');
    }
}
