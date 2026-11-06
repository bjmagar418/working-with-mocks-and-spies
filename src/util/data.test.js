// import {describe,test,expect,vi } from  'vitest';
// import { generateReportData } from '../app.js';

// //import { generateReportData } from '../data';

// describe('generateReportData()',() => {
//     test('should execute logFn if provided',() => {

//         const logger =vi.fn();
//         generateReportData(logger);
//         expect(logger).tobeCalled();
//     });
// });
import { describe, test, expect, vi } from "vitest";
import { generateReportData } from "../data.js"; // Adjust this relative path to point to your source file

describe("generateReportData()", () => {
  test("should execute logFn if provided", () => {
    const logger = vi.fn(() => {});
    
    generateReportData(logger);

    // Fixed typo: tobeCalled -> toHaveBeenCalled
    // expect(logger).toHaveBeenCalled();
    // expect(logger).toHaveBeenCalledWith("Some dummy data for this demo app");
  
    expect(logger).toBeCalled();

});
});