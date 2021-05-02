import csvToJson from "./csvToJson";
import generateCsv from "./generateCsv";

export const onCsvClick = () => {
  const fakeCsv = generateCsv();
  const result = csvToJson(fakeCsv);
  console.log("Csv", result);
};
