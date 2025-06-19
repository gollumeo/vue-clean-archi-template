import { Acherus } from '@cli/Acherus';
import * as fs from 'node:fs';
import path from 'path';

describe('Acherus CLI', () => 
{
    const outputDir = path.resolve(__dirname, '../../../__sandbox__/Acherus');
    const acherus = new Acherus(outputDir);

    beforeEach(() => 
    {
        fs.mkdirSync(outputDir, { recursive: true });
    });

    afterEach(() => 
    {
        fs.rmSync(outputDir, { recursive: true, force: true });
    });

    it('should scaffold a basic use-case in Application and its test file', () => 
    {
        const useCaseName: string = 'IntroduceTestUseCase';

        acherus.make('', useCaseName);

        expect(
            fs.existsSync(path.resolve(path.join(outputDir, 'Application', `${ useCaseName }.ts`)))
        ).toBeTruthy();

        expect(
            fs.existsSync(path.resolve(path.join(outputDir, 'Tests', 'Application', `${ useCaseName }.test.ts`)))
        ).toBeTruthy();
    });

    it('should create the use case file in Application and its test in Tests/Application', () => 
    {
        const useCaseName: string = 'ScheduleInterview';
        acherus.make('', useCaseName);

        expect(fs.existsSync(path.join(outputDir, 'Application', `${ useCaseName }.ts`))).toBeTruthy();
        expect(fs.existsSync(path.join(outputDir, 'Tests', 'Application', `${ useCaseName }.test.ts`))).toBeTruthy();
    })

    it('should throw if the use case file already exists', (): void => 
    {
        const useCaseName: string = 'AlreadyThere';

        const fakeUseCasePath: string = path.join(outputDir, 'Application', `${ useCaseName }.ts`);
        const fakeTestPath: string = path.join(outputDir, 'Tests', 'Application', `${ useCaseName }.test.ts`);

        fs.mkdirSync(path.dirname(fakeUseCasePath), { recursive: true });
        fs.writeFileSync(fakeUseCasePath, '// pre-existing content');

        fs.mkdirSync(path.dirname(fakeTestPath), { recursive: true });
        fs.writeFileSync(fakeTestPath, '// pre-existing test');

        expect(() => acherus.make('', useCaseName)).toThrowError();
    });
});
