import { FileReader } from './file-reader';
import { Constants } from './constants';
import { customer } from './interfaces';

describe('File Reader', () => {
    let fileReader: FileReader;
    console.log = jest.fn();

    const expectedCustomers: customer[] = expect.arrayContaining([
        expect.objectContaining({
            id: expect.any(String),
            lat: expect.any(Number),
            long: expect.any(Number)
        }),
      ]);

    beforeEach(() => {
        fileReader = new FileReader();
    });

    it('File Reader defined', async () => {
        expect(fileReader).toBeInstanceOf(FileReader);
    });

    it('read Customers correct file', async () => {
        const customers = await fileReader.readCustomers(Constants.filePath);
        expect(customers).toMatchObject(expectedCustomers);
    });

    it('read Customers wrong file', async () => {
        const customers = await fileReader.readCustomers("foo.txt");
        expect(console.log).toHaveBeenCalled();
        expect(customers).toEqual([]);
    });
});