import React from "react";

const Table = () => {
  return (
    <>
      <Table>
        <thead>
          <tr>
            <th>No</th>
            <th>Soal</th>
            <th>Pilihan Jawaban</th>
            <th>Jawaban Benar</th>
            <th>Level</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1 + 1 =</td>
            <td>
              <ul>1</ul>
              <ul>3</ul>
              <ul>2</ul>
            </td>
            <td>2</td>
            <td>Penjumlahan</td>
          </tr>
          <tr>
            <td>1 + 1 =</td>
            <td>
              <ul>1</ul>
              <ul>3</ul>
              <ul>2</ul>
            </td>
            <td>2</td>
            <td>Penjumlahan</td>
          </tr>
          <tr>
            <td>1 + 1 =</td>
            <td>
              <ul>1</ul>
              <ul>3</ul>
              <ul>2</ul>
            </td>
            <td>2</td>
            <td>Penjumlahan</td>
          </tr>
        </tbody>
      </Table>
    </>
  );
};

export default Table;
