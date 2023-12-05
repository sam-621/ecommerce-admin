'use client';

import { useState } from 'react';

import { FilledButton, Input } from '@/components/theme';
import { useOrderContext } from '@/lib/contexts';

export const ContactInformationForm = () => {
  const { completeOrder } = useOrderContext();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async e => {
    e.preventDefault();
    setIsSubmitting(true);

    const body = {
      firstName,
      lastName,
      phoneNumber,
      email
    };

    await completeOrder(body);
  };

  return (
    <>
      <h1 className="text-24 lg:text-32 text-neutral-title font-bold">
        Llena tu información y paga
      </h1>
      <form onSubmit={onSubmit} className="flex flex-col gap-16">
        <div className="flex flex-col gap-16 lg:flex-row lg:gap-6">
          <Input setValue={setFirstName} name="firstName" label="Nombre(s)" type="text" />
          <Input setValue={setLastName} name="lastName" label="Apellido(s)" type="text" />
        </div>
        <Input setValue={setEmail} name="email" label="Correo electronico" type="email" />
        <Input setValue={setPhoneNumber} name="tel" label="Número de teléfono" type="text" />
        <FilledButton type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Procesando la compra...' : 'Comprar'}
        </FilledButton>
      </form>
    </>
  );
};
