import fs from "node:fs";
import path from "path";
import { IFilesList } from "Tests/FileSystem/Contracts/IFilesList";

export class FilesList implements IFilesList
{
    /**
     * @inheritDoc
     */
    public allIn(dir: string): string[]
    {
        let results: string[] = [];

        for (const file of fs.readdirSync(dir)) 
        {
            const fullPath: string = path.join(dir, file);
            const stat: fs.Stats = fs.statSync(fullPath);

            if (!stat.isDirectory()) 
            {
                results.push(file);
            }
            else 
            {
                results = results.concat(this.allIn(fullPath));
            }
        }

        return results;
    }
}