import { FileReader } from './file-reader';
import { Constants } from './constants'

describe('File Reader', () => {
    let fileReader: FileReader;

    beforeEach(() => {
        fileReader = new FileReader();
    });

    it('File Reader defined', async () => {
        expect(fileReader).toBeInstanceOf(FileReader);
    });

    it('readCustomerss', async () => {
        const customers = await fileReader.readCustomers(Constants.filePath);
        expect(customers).toBeDefined();
    });
});