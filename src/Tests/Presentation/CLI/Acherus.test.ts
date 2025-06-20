import { Acherus } from "@cli/Acherus";
import * as fs from "node:fs";
import path from "path";
import { afterEach, beforeEach } from "vitest";

describe('Acherus CLI', () => 
{
    const sandboxDir = path.resolve(path.join(__dirname, '../../../__sandbox__/Acherus'));
    const acherus = new Acherus(sandboxDir);

    beforeEach(() => 
    {
        fs.mkdirSync(sandboxDir, { recursive: true });

    })

    afterEach(() => 
    {
        fs.rmSync(sandboxDir, { recursive: true, force: true })
    });

    it('scaffolds a new use case and its corresponding test file', () => 
    {
        acherus.make('MyUseCase');
        const createdFiles: string[] = listAllFilesRecursively(sandboxDir);
        expect(createdFiles.length).toBe(2);
    });

    it('places the use case file in the Application layer', () => 
    {
        const useCaseName: string = 'MyUseCase';
        acherus.make(useCaseName);
        const expectedPath: string = sandboxDir + '/Application';

        const createdFiles: string[] = listAllFilesRecursively(expectedPath);

        expect(createdFiles).toContain(useCaseName + '.ts');
    })
});

function listAllFilesRecursively(dir: string): string[]
{
    let results: string[] = [];

    for (const file of fs.readdirSync(dir)) 
    {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);

        if (!stat.isDirectory()) 
        {
            results.push(file);
        }
        else 
        {
            results = results.concat(listAllFilesRecursively(fullPath));
        }
    }

    return results;
}
