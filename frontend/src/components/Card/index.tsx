import style from './Card.module.css';
import { RiDeleteBinLine } from 'react-icons/ri';
import { AiOutlineEdit } from 'react-icons/ai';
import { getHours, isAfter } from 'date-fns';
import { useState } from 'react';
import { ModalEdit } from '../ModalEdit';
import { isAxiosError } from 'axios';
import { toast } from 'react-toastify';
import { api } from '../../server';
interface ISchedule {
  name: string;
  phone: string;
  date: Date;
  id: string;
}
export const Card = ({ name, date, id, phone }: ISchedule) => {
  const isAfterDate = isAfter(new Date(date), new Date());
  const [openModal, setOpenModal] = useState<boolean>(false);

  const dateFormatted = new Date(date);
  const hour = getHours(dateFormatted);

  let phoneFormatted = phone.replace(/\D/g, '');
  phoneFormatted = phoneFormatted.replace(
    /(\d{2})(\d{4})(\d{4})/,
    '($1) $2-$3',
  );
  const handleChangeModal = () => {
    setOpenModal(!openModal);
  };
  const handleDelete = async () => {
    try {
      const result = await api.delete(`/schedules/${id}`);
      toast.success('Deletado com sucesso');
      console.log('🚀 ~ file: index.tsx:35 ~ handleDelete ~ result:', result);
    } catch (error) {
      if (isAxiosError(error)) {
        toast.error(error.response?.data.message);
      }
    }
  };
  return (
    <>
      <div className={style.background}>
        <div>
          <span className={`${!isAfterDate && style.disabled}`}>{hour}h</span>
          <p>
            {name} - {phoneFormatted}
          </p>
        </div>
        <div className={style.icons}>
          <AiOutlineEdit
            color="#5F68B1"
            size={17}
            onClick={() => isAfterDate && handleChangeModal()}
          />
          <RiDeleteBinLine
            color="#EB2E2E"
            size={17}
            onClick={() => isAfterDate && handleDelete()}
          />
        </div>
      </div>
      <ModalEdit
        isOpen={openModal}
        handleChangeModal={handleChangeModal}
        hour={String(hour)}
        id={id}
        name={name}
      />
    </>
  );
};
