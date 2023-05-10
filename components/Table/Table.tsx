import React, { FunctionComponent } from "react";
import { MovieData } from "../../types";

interface Props {
  data: MovieData[];
  displayHeaders: string[];
}

const Table: FunctionComponent<Props> = ({ data, displayHeaders }) => {
  return (
    <div className="table-container">
      <table className="table-auto">
        <thead>
          <tr>
            {displayHeaders?.map((key) => (
              <th key={key} className="capitalize">{key?.replace("_", " ")}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data?.map((item) => (
            <tr key={item.title}>
              {displayHeaders?.map((key: string) => (
                <td key={key}>{item?.[key]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
