import Docxtemplater from "docxtemplater";
import PizZip from "pizzip";
import { saveAs } from "file-saver";

function GenerateDocumentProtected(props) {
  const {
    documentValue, date, result, allStudents,
  } = props;

  const reader = new FileReader();
  if (documentValue.files.length === 0) {
    alert("No files selected")
  }
  reader.readAsBinaryString(documentValue.files.item(0));

  reader.onerror = function (evt) {
    console.log("error reading file", evt);
    alert("error reading file" + evt)
  };

  reader.onload = function (evt) {
    const content = evt.target.result;

    function replaceErrors(key, value) {
      if (value instanceof Error) {
        return Object.getOwnPropertyNames(value).reduce(function(error, key) {
          error[key] = value[key];
          return error;
        }, {});
      }
      return value;
    }

    function errorHandler(error) {
      console.log(JSON.stringify({error: error}, replaceErrors));

      if (error.properties && error.properties.errors instanceof Array) {
        const errorMessages = error.properties.errors.map(function (error) {
          return error.properties.explanation;
        }).join("\n");
        console.error('errorMessages', errorMessages);
      }
      throw error;
    }

    const zip = new PizZip(content);
    let doc;
    try {
      doc = new Docxtemplater(zip);
    } catch(error) {
      // Catch compilation errors (errors caused by the compilation of the template : misplaced tags)
      errorHandler(error);
    }

    doc.setData({
      date,
      ...result,
      "students": allStudents,
    });
    try {
      // render the document (replace all occurences of {first_name} by John, {last_name} by Doe, ...)
      doc.render();
    }
    catch (error) {
      // Catch rendering errors (errors relating to the rendering of the template : angularParser throws an error)
      errorHandler(error);
    }

    const docName = `График защиты [${date}]`
    const out = doc.getZip().generate({
      type:"blob",
      mimeType: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    });
    saveAs(out,`${docName}.docx`);
  };
}

export default GenerateDocumentProtected;
