import React from "react";
import PageHeader from "components/global/Commons/PageHeader";

type Props = {};

const ContasReceberTable = () => {
  return (
    <div>
      <PageHeader
        iconPath="/icons/customer/customer-128px.png"
        title="Contas à Receber"
      />

      <div className="table-responsive">
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">Código do Item</th>
              <th scope="col">valor total</th>
              <th scope="col">OGM</th>
              <th scope="col">Ações</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1-1-2020</td>
              <td>R$ 1,500.00</td>
              <td>Não</td>
              <td>
                <button
                  type="button"
                  className="btn btn-primary btn-sm btn-right-margin"
                  onClick={() => {}}
                >
                  <i className="print icon no-margin"></i>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ContasReceberTable;
