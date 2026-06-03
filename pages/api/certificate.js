export default function handler(req, res) {
  const course = req.query.course || "pv-solar-foundations";
  const title = String(course).replace(/-/g, " ").toUpperCase();
  const pdf = `%PDF-1.4
1 0 obj
<< /Type /Catalog /Pages 2 0 R >>
endobj
2 0 obj
<< /Type /Pages /Kids [3 0 R] /Count 1 >>
endobj
3 0 obj
<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Contents 4 0 R /Resources << /Font << /F1 5 0 R >> >> >>
endobj
4 0 obj
<< /Length 238 >>
stream
BT
/F1 28 Tf
72 650 Td
(Certificate of Completion) Tj
/F1 16 Tf
0 -48 Td
(Dr. H.E. Maepa Institute Digital Ecosystem) Tj
0 -40 Td
(This certifies completion of:) Tj
0 -34 Td
(${title}) Tj
0 -54 Td
(Issued by mock certificate endpoint.) Tj
ET
endstream
endobj
5 0 obj
<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>
endobj
xref
0 6
0000000000 65535 f 
0000000010 00000 n 
0000000059 00000 n 
0000000116 00000 n 
0000000250 00000 n 
0000000538 00000 n 
trailer
<< /Size 6 /Root 1 0 R >>
startxref
608
%%EOF`;

  res.setHeader("Content-Type", "application/pdf");
  res.setHeader("Content-Disposition", `attachment; filename="${course}-certificate.pdf"`);
  res.status(200).send(pdf);
}
