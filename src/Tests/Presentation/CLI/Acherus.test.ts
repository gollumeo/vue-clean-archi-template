import { Acherus } from "@cli/Acherus";
import * as fs from "node:fs";
import path from "path";
import { afterEach, beforeEach } from "vitest";
import { FilesList } from "../../FileSystem/FilesList";

describe('Acherus CLI', () => 
{
    const sandboxDir: string = path.resolve(path.join(__dirname, '../../../__sandbox__/Acherus'));
    const acherus: Acherus = new Acherus(sandboxDir);
    const filesList: FilesList = new FilesList();

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
        const createdFiles: string[] = filesList.allIn(sandboxDir);
        expect(createdFiles.length).toBe(2);
    });

    it('places the use case file in the Application layer', () => 
    {
        const useCaseName: string = 'MyUseCase';
        acherus.make(useCaseName);
        const expectedPath: string = sandboxDir + '/Application';

        const createdFiles: string[] = filesList.allIn(expectedPath);

        expect(createdFiles).toContain(useCaseName + '.ts');
    })
});
