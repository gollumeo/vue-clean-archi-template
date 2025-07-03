import * as fs from "node:fs";
import path from "path";

export class Acherus
{
    constructor(private outputDir: string)
    {
    }

    /**
     * Creates a new application directory and generates TypeScript files for the specified name.
     *
     * @param {string} name - The name used for the generated application file and its corresponding test file.
     * @return {void} This method does not return any value.
     */
    make(name: string): void
    {
        const applicationDir: string = path.join(this.outputDir, 'Application');
        fs.mkdirSync(applicationDir, { recursive: true });

        fs.writeFileSync(path.join(applicationDir, name + '.ts'), '');
        fs.writeFileSync(path.join(this.outputDir, name + '.test.ts'), '');
    }
}
