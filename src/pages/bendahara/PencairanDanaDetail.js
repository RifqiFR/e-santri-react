import { MERCHANTS } from 'constants/dummies';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { Button } from "reactstrap";
import { formatNumberToRupiah } from 'utils/number';
import DetailField from '../../components/DetailField';

const AMOUNT_JOIN_MERCHANTS = [
  {
    id: 1,
    merchant_id: 1,
    amount: 750000,
  },
  {
    id: 2,
    merchant_id: 2,
    amount: 300000,
  },
  {
    id: 3,
    merchant_id: 3,
    amount: 500000,
  },
]

const PencairanDanaDetail = () => {
  const { id: merchantId, action } = useParams();
  const [merchant, setMerchant] = useState(null);

  let actionButton = (
    <div className="d-flex justify-content-end">
      <Link to="/bendahara/pencairan-dana" className="btn btn-success">Kembali</Link>
    </div>
  );
  if (action && action === 'cairkan') {
    actionButton = (
      <div className="d-flex justify-content-center">
        <Button color="danger" className="d-block w-75">Cairkan</Button>
      </div>
    );
  }

  useEffect(() => {
    const fetchedMerchant = MERCHANTS.find(m => m.id == merchantId);
    const amount = AMOUNT_JOIN_MERCHANTS.find(am => am.merchant_id == fetchedMerchant?.id);
    console.log(fetchedMerchant);
    setMerchant([
      {
        label: 'Nama Merchant',
        value: fetchedMerchant?.name,
      },
      {
        label: 'Nama Pemilik',
        value: fetchedMerchant?.owner_name,
      },
      {
        label: 'Alamat Usaha',
        value: fetchedMerchant?.address,
      },
      {
        label: 'Alamat Pemilik',
        value: fetchedMerchant?.owner_address,
      },
      {
        label: 'Nomor Telepon',
        value: fetchedMerchant?.phone_number,
      },
      {
        label: 'Bidang Usaha',
        value: fetchedMerchant?.niche,
      },
      {
        label: 'Tahun Bergabung',
        value: fetchedMerchant?.join_year,
      },
      {
        label: 'Email Pemilik',
        value: fetchedMerchant?.owner_email,
      },
      {
        label: 'Nominal Pencairan',
        value: formatNumberToRupiah(amount?.amount)
      }
    ]);
  }, [merchantId]);

  return (
    <>
      <p className="text-center">Data Merchant Pondok Pesantren Tambak Beras Jombang</p>
      <hr className="mb-3" />
      <img src={require('../../images/shop.png')} alt="" className="w-25 mx-auto d-block mb-4" />
      <DetailField fieldData={merchant} />
      {actionButton}
    </>
  );
};

export default PencairanDanaDetail;