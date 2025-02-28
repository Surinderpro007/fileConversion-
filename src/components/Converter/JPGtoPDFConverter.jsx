import { useState, useRef,useEffect  } from "react";
import { jsPDF } from "jspdf";
import { getDocument } from "pdfjs-dist";
import "pdfjs-dist/build/pdf.worker";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";


export default function JPGPDFConverter() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [isPDFtoJPG, setIsPDFtoJPG] = useState(false);
  const dropRef = useRef(null);

//   useEffect(() => {
//     const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
//     const tooltipList = [...tooltipTriggerList].map((tooltipTriggerEl) => new Tooltip(tooltipTriggerEl));

//     return () => {
//       tooltipList.forEach((tooltip) => tooltip.dispose());
//     };
//   }, []);


useEffect(() => {
    // Ensure Bootstrap is available before accessing Tooltip
    if (window.bootstrap) {
      const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
      const tooltipList = [...tooltipTriggerList].map(
        (tooltipTriggerEl) => new window.bootstrap.Tooltip(tooltipTriggerEl)
      );

      return () => {
        tooltipList.forEach((tooltip) => tooltip.dispose());
      };
    }
  }, []);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    if (event.dataTransfer.files.length > 0) {
      setSelectedFile(event.dataTransfer.files[0]);
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const convertJPGToPDF = async () => {
    if (!selectedFile) return alert("Please select a JPG file");
    const reader = new FileReader();
    reader.readAsDataURL(selectedFile);
    reader.onload = () => {
      const pdf = new jsPDF();
      pdf.addImage(reader.result, "JPEG", 10, 10, 180, 160);
      pdf.save("converted.pdf");
    };
  };

  const convertPDFToJPG = async () => {
    if (!selectedFile) return alert("Please select a PDF file");
    const reader = new FileReader();
    reader.readAsArrayBuffer(selectedFile);
    reader.onload = async () => {
      const pdfData = new Uint8Array(reader.result);
      const pdf = await getDocument({ data: pdfData }).promise;

      for (let i = 0; i < pdf.numPages; i++) {
        const page = await pdf.getPage(i + 1);
        const viewport = page.getViewport({ scale: 2 });
        const canvas = document.createElement("canvas");
        const context = canvas.getContext("2d");
        canvas.width = viewport.width;
        canvas.height = viewport.height;

        const renderContext = {
          canvasContext: context,
          viewport: viewport,
        };
        await page.render(renderContext).promise;

        canvas.toBlob((blob) => {
          const link = document.createElement("a");
          link.href = URL.createObjectURL(blob);
          link.download = `page-${i + 1}.jpg`;
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        }, "image/jpeg");
      }
    };
  };

  const handleConversion = () => {
    if (isPDFtoJPG) {
      convertPDFToJPG();
    } else {
      convertJPGToPDF();
    }
  };

  return (
    <div className="p-4 text-center container">
      <h2 className="text-xl font-bold mb-4">JPG & PDF Converter</h2>
      <button
        type="button"
        className="btn btn-success mb-3"
        onClick={() => setIsPDFtoJPG(!isPDFtoJPG)}
        data-bs-toggle="tooltip" data-bs-placement="top"
        data-bs-custom-class="custom-tooltip"
        title="Click to switch conversion type"
      >
        {isPDFtoJPG ? "Convert PDF to JPG" : "Convert JPG to PDF"}
      </button>
      <br />
      <div className="drag-n-drop">

      <div
        ref={dropRef}
        className="mt-4 p-6 border-2 border-dashed border-gray-400 rounded-lg cursor-pointer "
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        >
        {selectedFile ? (
            <p>{selectedFile.name}</p>
        ) : (
            <p>Drag & Drop a {isPDFtoJPG ? "PDF" : "JPG"} file here</p>
        )}
        <a href="#" onClick={() => document.getElementById("fileInput").click()}>
        Upload File
      </a>

      {/* Hidden File Input */}
      <input
        type="file"
        accept={isPDFtoJPG ? "application/pdf" : "image/jpeg"}
        onChange={handleFileChange}
        className="mt-2"
        id="fileInput"
        style={{ display: "none" }}
      />

      </div>
        </div>
      <button className="mt-2 p-2 bg-blue-500 text-white btn btn-success " onClick={handleConversion}>
        Convert
      </button>
    </div>
  );
}
