'use client';

import { type FC, useEffect, useState } from 'react';
import { useFormStatus } from 'react-dom';

export const FormFinishedNotification: FC<Props> = ({ notification }) => {
  const { pending } = useFormStatus();

  const [canBeFinished, setCanBeFinished] = useState(false);

  useEffect(() => {
    if (pending) {
      setCanBeFinished(true);
      return;
    }

    if (canBeFinished) {
      notification();
    }
  }, [pending, canBeFinished, notification]);

  return <div></div>;
};

type Props = {
  notification: () => void;
};
