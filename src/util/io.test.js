import {test,expect} from "vitest";
import writeData from "./io";
test ('should execute the writeFile method',() => {
    const testData = 'Test';
    const testFilename = "test.txt";
    return expect(writeData(testData,testFilename)).resolves.toBeUndefined();
});