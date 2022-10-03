import React, { useState, useEffect } from "react";
import Papa from 'papaparse';
import Head from 'next/head'
import CsvUploadForm from '../src/components/csvUploadForm'
import TableHeader from '../src/components/tableHeader'
import TableEntry from '../src/components/tableEntry'

export default function Home() {
  const [csvFile, setCsvFile] = useState();
  const [csvFileContent, setCsvFileContent] = useState([]);

  useEffect(() => {
    if (csvFile) {
      Papa.parse(csvFile, {
        complete: function(results) {
          setCsvFileContent(results.data);
        }}
      )
    }
  }, [csvFile]);

  return (
    <div className="container">
      <Head>
        <title>AI Labs | Frontend case study</title>
        <meta name="description" content="AI Labs | Frontend case study" />
      </Head>

      <main className="brcs">
        <div className="row mt-4 mb-4">
          <div className="col">
            <h1 className="brcs__header" data-testid="h1_header">
              <span>AI Labs |</span> Frontend case study
            </h1>
          </div>
          <div className="col col-sm-auto">
            <CsvUploadForm {...{setCsvFile}} />
          </div>
        </div>

        <table className="table table-bordered">
          <thead className="table-dark">
            <tr>
              <th scope="col">Data</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <table className="table table-bordered table-striped">
                  {csvFileContent.slice(0, 1).map((firstRow, i) => (
                    <React.Fragment key={"header" + i}>
                      <TableHeader {...{firstRow}} />
                    </React.Fragment>
                  ))}
                  <tbody>
                    {csvFileContent.slice(1).map((entry, i) => (
                      <React.Fragment key={"row" + i}>
                        <TableEntry {...{entry}} />
                      </React.Fragment>
                    ))}
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
      </main>
    </div>
  )
}
