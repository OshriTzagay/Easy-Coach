import { useState } from "react";
import { Space, Table, Tag } from "antd";
import React, { CSSProperties } from "react";
import "./csv-parser.css";
import { useCSVReader, jsonToCsv } from "react-papaparse";
import { PlayerChart } from "../Chart-Compo/chart";
import { Link } from "react-router-dom";
const { Column, ColumnGroup } = Table;
export const CSVTable = () => {
  const { CSVReader } = useCSVReader();
  const [data, setData] = useState();
  const [meta, setMeta] = useState();
  const [objs, setObjs] = useState([]);
  const [col, setCol] = useState([]);
  const [colTitle, setColTitle] = useState([]);

  const DataSource = () => {
    data.map((player) => {
      const obj = {};
      col.forEach((element, index) => {
        obj[element] = player[index];
      });
      setObjs((objs) => [...objs, obj]);
      return obj;
    });

    console.log(objs);
    console.log(meta);
    console.log(col);
  };
  return (
    <div className="wrapper">
      {" "}
      <CSVReader
        onUploadAccepted={(results) => {
          setMeta(results.data.slice(0, 5));
          setData(results.data.slice(6));
          setCol(results.data[5]);
          setColTitle(results.data[4].filter((item) => item.length > 0));
        }}
      >
        {({ getRootProps }) => (
          <>
            <div>
              <button type="button" {...getRootProps()}>
                [1]Browse file
              </button>
              <br />
              <button type="button" onClick={DataSource}>
                [2]Get data
              </button>
              <br />

              
              <button><Link to="/mission2">Go to Mission 3</Link></button>
            </div>
          </>
        )}
      </CSVReader>
      <Table
        dataSource={objs}
        bordered
        summary={(pageData) => {
          let avg = 0;
          pageData.forEach((item) => {
            avg += parseInt(item);
          });
        }}
      >
        <ColumnGroup title={colTitle[0]}>
          {col.map((item, i) => {
            if (i < 17) {
              return <Column title={item} dataIndex={item} key={item} />;
            }
          })}
        </ColumnGroup>
        <ColumnGroup title={colTitle[1]}>
          {col.map((item, i) => {
            if (i > 16) {
              return <Column title={item} dataIndex={item} key={item} />;
            }
          })}
        </ColumnGroup>
      </Table>
      <div>
        <PlayerChart objs={objs} col={col} />
      </div>
    </div>
  );
};
