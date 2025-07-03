export interface IFilesList
{
    /**
     * Retrieves all the entries within the specified directory.
     *
     * @param {string} dir - The directory path to search for entries.
     * @return {string[]} An array containing the names of all entries found in the directory.
     */
    allIn(dir: string): string[];
}